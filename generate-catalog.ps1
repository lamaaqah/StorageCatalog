# PowerShell Script to scan warehouses and generate products database dynamically
$ProgressPreference = 'SilentlyContinue'

# Load PresentationCore to get WIC capabilities
Add-Type -AssemblyName PresentationCore

# Variables in script scope
$script:Products = @()
$script:Id = 1

function Convert-DngToJpg($dngPath, $jpgPath) {
    try {
        $absoluteDng = [System.IO.Path]::GetFullPath($dngPath)
        $absoluteJpg = [System.IO.Path]::GetFullPath($jpgPath)
        
        $uri = New-Object System.Uri($absoluteDng, [System.UriKind]::Absolute)
        $decoder = [System.Windows.Media.Imaging.BitmapDecoder]::Create($uri, [System.Windows.Media.Imaging.BitmapCreateOptions]::None, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)
        
        if ($decoder -and $decoder.Frames.Count -gt 0) {
            $frame = $decoder.Frames[0]
            
            # Format convert to strip metadata and convert to Bgr32 (standard RGB bitmap)
            $convertedFrame = New-Object System.Windows.Media.Imaging.FormatConvertedBitmap
            $convertedFrame.BeginInit()
            $convertedFrame.Source = $frame
            $convertedFrame.DestinationFormat = [System.Windows.Media.PixelFormats]::Bgr32
            $convertedFrame.EndInit()
            
            # Create encoder and save
            $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
            $cleanFrame = [System.Windows.Media.Imaging.BitmapFrame]::Create($convertedFrame)
            $encoder.Frames.Add($cleanFrame)
            
            $fileStream = New-Object System.IO.FileStream($absoluteJpg, [System.IO.FileMode]::Create)
            $encoder.Save($fileStream)
            $fileStream.Close()
            $fileStream.Dispose()
            return $true
        }
    } catch {
        Write-Warning "Could not convert RAW DNG file: $dngPath. Error: $_"
    }
    return $false
}

function Scan-Warehouse($dirPath, $warehouseNum) {
    if (-not (Test-Path $dirPath)) {
        Write-Error "Directory $dirPath does not exist!"
        return
    }
    
    Write-Host "Scanning warehouse $warehouseNum in: $dirPath..."
    
    # Scan all files
    $files = Get-ChildItem -Path $dirPath -File
    
    foreach ($file in $files) {
        $ext = $file.Extension.ToUpper()
        
        # Calculate relative path to the root
        $relativeFile = Resolve-Path -Path $file.FullName -Relative
        $cleanPath = $relativeFile.Replace('.\', '').Replace('\', '/')
        
        if ($ext -eq ".JPG" -or $ext -eq ".JPEG" -or $ext -eq ".PNG") {
            # Standard image
            $script:Products += [PSCustomObject]@{
                id = $script:Id++
                name = $file.BaseName
                path = $cleanPath
                warehouse = $warehouseNum
            }
        } elseif ($ext -eq ".DNG") {
            # RAW Image - try to convert to JPG
            $jpgName = $file.BaseName + ".jpg"
            $jpgPath = Join-Path $file.DirectoryName $jpgName
            
            # Compute relative path for the new JPG
            # Resolve-Path fails if the file doesn't exist, so compute it manually
            $relativeDir = Resolve-Path -Path $dirPath -Relative
            $cleanJpgPath = "$relativeDir/$jpgName".Replace('.\', '').Replace('\', '/')
            
            Write-Host "Attempting to convert RAW DNG to JPG: $($file.Name)..."
            if (Test-Path $jpgPath) {
                $item = Get-Item $jpgPath
                if ($item.Length -eq 0) {
                    Remove-Item $jpgPath -Force
                }
            }
            
            if (Test-Path $jpgPath) {
                Write-Host "JPG already exists for $($file.Name)"
                $script:Products += [PSCustomObject]@{
                    id = $script:Id++
                    name = $file.BaseName
                    path = $cleanJpgPath
                    warehouse = $warehouseNum
                }
            } else {
                $success = Convert-DngToJpg $file.FullName $jpgPath
                if ($success) {
                    Write-Host "Successfully converted $($file.Name) to $jpgName"
                    $script:Products += [PSCustomObject]@{
                        id = $script:Id++
                        name = $file.BaseName
                        path = $cleanJpgPath
                        warehouse = $warehouseNum
                    }
                } else {
                    Write-Host "Skipping $($file.Name) due to conversion failure."
                }
            }
        }
    }
}

# Dynamically locate directories using pattern matching to avoid encoding issues
Write-Host "Searching for warehouse directories..."
$allDirs = Get-ChildItem -Directory

$w7Dir = $allDirs | Where-Object { $_.Name -like "*7*" } | Select-Object -First 1
$w9Dir = $allDirs | Where-Object { $_.Name -like "*9*" } | Select-Object -First 1

if (-not $w7Dir) {
    Write-Error "Could not find a directory containing '7' for Warehouse 7."
    exit 1
}
if (-not $w9Dir) {
    Write-Error "Could not find a directory containing '9' for Warehouse 9."
    exit 1
}

Write-Host "Found Warehouse 7 root: $($w7Dir.Name)"
Write-Host "Found Warehouse 9 root: $($w9Dir.Name)"

# Find inner directories
$w7Inner = Get-ChildItem -Path $w7Dir.FullName -Directory | Where-Object { $_.Name -like "*7*" } | Select-Object -First 1
$w9Inner = Get-ChildItem -Path $w9Dir.FullName -Directory | Where-Object { $_.Name -like "*9*" } | Select-Object -First 1

if (-not $w7Inner) {
    Write-Host "No nested '7' directory. Using root: $($w7Dir.FullName)"
    $w7Path = $w7Dir.FullName
} else {
    Write-Host "Found nested Warehouse 7 directory: $($w7Inner.FullName)"
    $w7Path = $w7Inner.FullName
}

if (-not $w9Inner) {
    Write-Host "No nested '9' directory. Using root: $($w9Dir.FullName)"
    $w9Path = $w9Dir.FullName
} else {
    Write-Host "Found nested Warehouse 9 directory: $($w9Inner.FullName)"
    $w9Path = $w9Inner.FullName
}

# Scan both warehouses
Scan-Warehouse $w7Path 7
Scan-Warehouse $w9Path 9

# Convert products array to JSON string
$JsonData = ConvertTo-Json -InputObject $script:Products -Depth 4
$JsContent = "const products = $JsonData;"

$OutPath = Join-Path "." "products.js"
[System.IO.File]::WriteAllText($OutPath, $JsContent, [System.Text.Encoding]::UTF8)

Write-Host "Catalog generation finished! Total products found: $($script:Products.Count)"
Write-Host "Products database saved to: $OutPath"

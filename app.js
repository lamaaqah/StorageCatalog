/**
 * app.js — Store Catalog Logic
 * Handles: filtering, search, view toggle, lightbox, scroll-to-top
 */

(function () {
  'use strict';

  /* ── State ─────────────────────────────────────────────── */
  let activeFilter = 'all';
  let activeView   = 'grid';
  let searchQuery  = '';
  let lbIndex      = 0;
  let filteredList = [];

  /* ── DOM refs ───────────────────────────────────────────── */
  const grid        = document.getElementById('catalog-grid');
  const resultsEl   = document.getElementById('results-count');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const searchEl    = document.getElementById('search-input');
  const gridViewBtn = document.getElementById('view-grid');
  const listViewBtn = document.getElementById('view-list');
  const scrollTopBtn= document.getElementById('scroll-top');

  // Lightbox
  const lightbox    = document.getElementById('lightbox');
  const lbImg       = document.getElementById('lb-img');
  const lbTitle     = document.getElementById('lb-title');
  const lbBadge     = document.getElementById('lb-badge');
  const lbClose     = document.getElementById('lb-close');
  const lbPrev      = document.getElementById('lb-prev');
  const lbNext      = document.getElementById('lb-next');
  const lbDots      = document.getElementById('lb-dots');
  const lbBackdrop  = document.getElementById('lb-backdrop');

  /* ── Deduplicate products ────────────────────────────────── */
  const seen = new Set();
  const uniqueProducts = products.filter(p => {
    if (seen.has(p.path)) return false;
    seen.add(p.path);
    return true;
  });

  /* ── Update badge counts ─────────────────────────────────── */
  function updateBadgeCounts() {
    const w7Count  = uniqueProducts.filter(p => p.warehouse === 7).length;
    const w9Count  = uniqueProducts.filter(p => p.warehouse === 9).length;
    const allCount = uniqueProducts.length;

    document.getElementById('count-all').textContent = allCount;
    document.getElementById('count-w7').textContent  = w7Count;
    document.getElementById('count-w9').textContent  = w9Count;
  }

  /* ── Filter & Render ─────────────────────────────────────── */
  function getFiltered() {
    return uniqueProducts.filter(p => {
      const whMatch = activeFilter === 'all' || p.warehouse === parseInt(activeFilter);
      const qMatch  = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return whMatch && qMatch;
    });
  }

  function render() {
    filteredList = getFiltered();
    grid.innerHTML = '';

    resultsEl.textContent = filteredList.length;

    if (filteredList.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <h3>لا توجد نتائج</h3>
          <p>جرّب تغيير الفلتر أو كلمة البحث</p>
        </div>`;
      return;
    }

    filteredList.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.animationDelay = `${Math.min(index * 35, 400)}ms`;
      card.dataset.index = index;

      const whLabel = product.warehouse === 7 ? 'مستودع ٧' : 'مستودع ٩';
      const whClass = product.warehouse === 7 ? 'w7' : 'w9';

      card.innerHTML = `
        <span class="card-ribbon ${whClass}">${whLabel}</span>
        <div class="card-image-wrap">
          <img
            src="${product.path}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.closest('.product-card').style.display='none'"
          />
          <div class="card-overlay">
            <div class="overlay-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
                <path d="M11 8v6M8 11h6" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <span class="card-id-badge ${whClass}">${product.name}</span>
        </div>`;

      card.addEventListener('click', () => openLightbox(index));
      grid.appendChild(card);
    });
  }

  /* ── Filters ─────────────────────────────────────────────── */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  /* ── Search ──────────────────────────────────────────────── */
  searchEl.addEventListener('input', () => {
    searchQuery = searchEl.value.trim();
    render();
  });

  /* ── View Toggle ─────────────────────────────────────────── */
  gridViewBtn.addEventListener('click', () => {
    activeView = 'grid';
    grid.classList.remove('list-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
  });

  listViewBtn.addEventListener('click', () => {
    activeView = 'list';
    grid.classList.add('list-view');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });

  /* ── Lightbox ────────────────────────────────────────────── */
  function openLightbox(index) {
    lbIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    buildDots();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const product = filteredList[lbIndex];
    if (!product) return;

    lbImg.classList.add('loading');
    lbImg.onload = () => lbImg.classList.remove('loading');
    lbImg.src    = product.path;
    lbImg.alt    = product.name;

    lbTitle.textContent = product.name;

    const whLabel = product.warehouse === 7 ? 'مستودع ٧' : 'مستودع ٩';
    const whClass = product.warehouse === 7 ? 'w7' : 'w9';
    lbBadge.textContent = whLabel;
    lbBadge.className   = `lightbox-badge ${whClass}`;

    lbPrev.disabled = lbIndex === 0;
    lbNext.disabled = lbIndex === filteredList.length - 1;

    updateActiveDot();
  }

  function buildDots() {
    const total = filteredList.length;
    // Only show dots if ≤ 30 images to avoid overflow
    if (total > 30) {
      lbDots.innerHTML = `<span style="font-size:0.8rem;color:var(--text-muted)">${lbIndex + 1} / ${total}</span>`;
      return;
    }
    lbDots.innerHTML = '';
    filteredList.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = `lb-dot${i === lbIndex ? ' active' : ''}`;
      dot.addEventListener('click', () => { lbIndex = i; updateLightbox(); updateActiveDot(); });
      lbDots.appendChild(dot);
    });
  }

  function updateActiveDot() {
    const total = filteredList.length;
    if (total > 30) {
      lbDots.innerHTML = `<span style="font-size:0.8rem;color:var(--text-muted)">${lbIndex + 1} / ${total}</span>`;
      return;
    }
    document.querySelectorAll('.lb-dot').forEach((d, i) => {
      d.classList.toggle('active', i === lbIndex);
    });
  }

  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);

  lbPrev.addEventListener('click', () => {
    if (lbIndex > 0) { lbIndex--; updateLightbox(); updateActiveDot(); }
  });

  lbNext.addEventListener('click', () => {
    if (lbIndex < filteredList.length - 1) { lbIndex++; updateLightbox(); updateActiveDot(); }
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   { if (lbIndex > 0) { lbIndex--; updateLightbox(); updateActiveDot(); } }
    if (e.key === 'ArrowRight')  { if (lbIndex < filteredList.length - 1) { lbIndex++; updateLightbox(); updateActiveDot(); } }
  });

  // Touch / swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx > 0 && lbIndex > 0)                             { lbIndex--; updateLightbox(); updateActiveDot(); }
      if (dx < 0 && lbIndex < filteredList.length - 1)       { lbIndex++; updateLightbox(); updateActiveDot(); }
    }
  }, { passive: true });

  /* ── Scroll to Top ───────────────────────────────────────── */
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Init ────────────────────────────────────────────────── */
  updateBadgeCounts();
  render();
})();

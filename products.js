const products = [
    // ═══════════════════════════════════════════════════════
    // مستودع ٧  (Warehouse 7) — 45 items
    // ═══════════════════════════════════════════════════════
    {
        "id": 1, "warehouse": 7,
        "name": "فازات زجاجية",
        "tags": ["فازات", "فازة", "زجاج", "ديكور"],
        "path": "images/IMG_2772.JPG"
    },
    {
        "id": 2, "warehouse": 7,
        "name": "فازات زجاجية",
        "tags": ["فازات", "فازة", "زجاج", "ديكور"],
        "path": "images/IMG_2773.JPG"
    },
    {
        "id": 3, "warehouse": 7,
        "name": "فازات زجاجية ملونه",
        "tags": ["فازات", "فازة", "زجاج", "ديكور"],
        "path": "images/IMG_2774.JPG"
    },
    {
        "id": 4, "warehouse": 7,
        "name": "فازات زجاجية ملونه",
        "tags": ["فازات", "فازة", "زجاج", "ديكور"],
        "path": "images/IMG_2775.JPG"
    },
    {
        "id": 5, "warehouse": 7,
        "name": "صواني تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images/IMG_2776.JPG"
    },
    {
        "id": 6, "warehouse": 7,
        "name": "صواني تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images/IMG_2778.JPG"
    },
    {
        "id": 7, "warehouse": 7,
        "name": "صواني تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images/IMG_2779.JPG"
    },
    {
        "id": 8, "warehouse": 7,
        "name": "صواني تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images1/IMG_2780.JPG"
    },
    {
        "id": 9, "warehouse": 7,
        "name": "صواني تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images1/IMG_2781.JPG"
    },
    {
        "id": 10, "warehouse": 7,
        "name": "صواني تقديم",
        "tags": ["كراسي", "طاولات", "طاولة", "اثاث"],
        "path": "images1/IMG_2782.JPG"
    },
    {
        "id": 11, "warehouse": 7,
        "name": "ابريق شاي",
        "tags": ["صواني", "تقديم", "اواني", "ابريق" , "شاي"],
        "path": "images1/IMG_2783.JPG"
    },
    {
        "id": 12, "warehouse": 7,
        "name": "دلال قهوه",
        "tags": ["صواني","دلال", "تقديم", "اواني", "قهوه"],
        "path": "images1/IMG_2784.JPG"
    },
    {
        "id": 13, "warehouse": 7,
        "name": "فناجيل تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images1/IMG_2785.JPG"
    },
    {
        "id": 14, "warehouse": 7,
        "name": "فناجيل تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images1/IMG_2786.JPG"
    },
    {
        "id": 15, "warehouse": 7,
        "name": "فناجيل تقديم",
        "tags": ["صواني", "تقديم", "اواني", "مطبخ"],
        "path": "images1/IMG_2787.JPG"
    },
    {
        "id": 16, "warehouse": 7,
        "name": "سلال",
        "tags": ["حقائب","سله", "شنط", "حقيبة"],
        "path": "images1/IMG_2788.JPG"
    },
    {
        "id": 17, "warehouse": 7,
        "name": "ستاندات خشب",
        "tags": ["ديكور","ستاندات", "خشب", "منزلي"],
        "path": "images/IMG_2790.JPG"
    },
    {
        "id": 18, "warehouse": 7,
        "name": "فازات فخاريه",
        "tags": ["فازات", "فازة", "فخار", "ديكور"],
        "path": "images2/IMG_2791.JPG"
    },
    {
        "id": 19, "warehouse": 7,
        "name": "فازات فخاريه",
        "tags": ["فازات", "فازة", "فخار", "ديكور"],
        "path": "images2/IMG_2792.JPG"
    },
    {
        "id": 20, "warehouse": 7,
        "name": "فازات فخاريه",
        "tags": ["فازات", "فازة", "فخار", "ديكور"],
        "path": "images2/IMG_2793.JPG"
    },
    {
        "id": 21, "warehouse": 7,
        "name": "سفره سعف",
        "tags": ["ضيافة", "تقديم", "سفره", "سعف"],
        "path": "images2/IMG_2794.JPG"
    },
    {
        "id": 22, "warehouse": 7,
        "name": "سلال",
        "tags": ["حقائب","سله", "شنط", "حقيبة"],
        "path": "images2/IMG_2795.JPG"
    },
    {
        "id": 23, "warehouse": 7,
        "name": "فوانيس زجاج",
        "tags": ["ديكور", "قطع", "فوانيس","منزلي"],
        "path": "images2/IMG_2796.JPG"
    },
    {
        "id": 24, "warehouse": 7,
        "name": "فوانيس زجاج",
        "tags": ["ديكور", "قطع", "فوانيس","منزلي"],
        "path": "images2/IMG_2797.JPG"
    },
    {
        "id": 25, "warehouse": 7,
        "name": "فوانيس زجاج",
        "tags": ["ديكور", "قطع", "فوانيس","منزلي"],
        "path": "images2/IMG_2798.JPG"
    },
    {
        "id": 26, "warehouse": 7,
        "name": "فوانيس",
        "tags": ["ديكور", "قطع", "فوانيس","منزلي"],
        "path": "images2/IMG_2799.JPG"
    },
    {
        "id": 27, "warehouse": 7,
        "name": "فوانيس ذهبيه",
        "tags": ["ديكور", "قطع", "فوانيس","ذهبيه"],
        "path": "images2/IMG_2800.JPG"
    },
    {
        "id": 28, "warehouse": 7,
        "name": "ستاندات ذهبيه",
        "tags": ["ديكور", "قطع", "ستاندات","ذهبيه"],
        "path": "images3/IMG_2801.JPG"
    },
    {
        "id": 29, "warehouse": 7,
        "name": "شموع",
        "tags": ["شموع", "ديكور"],
        "path": "images3/IMG_2807.JPG"
    },
    {
        "id": 30, "warehouse": 7,
        "name": "ديكور",
        "tags": ["ذهبيه", "ديكور"],
        "path": "images3/IMG_2808.JPG"
    },
    {
        "id": 31, "warehouse": 7,
        "name": "مباخر",
        "tags": ["مبخره", "مباخر", "ذهبيه"],
        "path": "images3/IMG_2809.JPG"
    },
    {
        "id": 32, "warehouse": 7,
        "name": "فوانيس",
        "tags": ["ديكور", "قطع", "فوانيس","منزلي"],
        "path": "images8/IMG_2810.PNG"
    },
    {
        "id": 33, "warehouse": 7,
        "name": "اعلام سعوديه",
        "tags": ["اعلام", "علم", "سعوديه", "اخضر", "وطني"],
        "path": "images/IMG_2811.jpg"
    },
    {
        "id": 34, "warehouse": 7,
        "name": "أقمشة متنوعة الألوان",
        "tags": ["قماش", "فرش", "ملون", "متنوع"],
        "path": "images4/IMG_2813.jpg"
    },
    {
        "id": 35, "warehouse": 7,
        "name": "خشبيات",
        "tags": ["اطارات", "صور", "خشب", "ديكور", "كبير"],
        "path": "images8/IMG_2814.PNG"
    },
    {
        "id": 36, "warehouse": 7,
        "name": "بالونات",
        "tags": ["بالونات"],
        "path": "images8/IMG_2816.PNG"
    },
    {
        "id": 37, "warehouse": 7,
        "name": "العاب",
        "tags": ["ورق", "قرطاسية", "العاب"],
        "path": "images8/IMG_2817.JPG"
    },
    {
        "id": 38, "warehouse": 7,
        "name": "اكواب ورق",
        "tags": ["اكواب" , " ورق "],
        "path": "images8/IMG_2818.JPG"
    },
    {
        "id": 39, "warehouse": 7,
        "name": "سجادات",
        "tags": ["سجاد"],
        "path": "images8/IMG_2820.JPG"
    },
    {
        "id": 40, "warehouse": 7,
        "name": "أقمشة شعبيه",
        "tags": ["فرش", "قماش", "ملون", "ورد", "شعبيه"],
        "path": "images8/IMG_2821.JPG"
    },
    {
        "id": 41, "warehouse": 7,
        "name": "أقمشة بيضاء ",
        "tags": ["قماش", "فرش", "ابيض", "شفاف"],
        "path": "images8/IMG_2822.JPG"
    },
    {
        "id": 42, "warehouse": 7,
        "name": "اقمشه ملونه",
        "tags": ["مفرش", "فرش", "قماش", "ورد", "زهور", "ملون"],
        "path": "images8/IMG_2823.JPG"
    },
    {
        "id": 43, "warehouse": 7,
        "name": "ورق تصوير ومستلزمات مكتبية",
        "tags": ["ورق", "قرطاسية", "مكتب", "تصوير"],
        "path": "images5/IMG_2824.JPG"
    },
    {
        "id": 44, "warehouse": 7,
        "name": "إطارات صور ذهبية مجموعة",
        "tags": ["اطارات", "صور", "ذهبي", "ديكور"],
        "path": "images5/IMG_2825.JPG"
    },
    {
        "id": 45, "warehouse": 7,
        "name": "زي التطوع",
        "tags": ["ملابس", "واقية", "تطوع", "عمل"],
        "path": "images5/IMG_2826.JPG"
    },

    // ═══════════════════════════════════════════════════════
    // مستودع ٩  (Warehouse 9) — 21 items
    // ═══════════════════════════════════════════════════════
    {
        "id": 46, "warehouse": 9,
        "name": "سجاد زراعي اخضر",
        "tags": ["سجاد" , " زراعي " , " اصطناعي " , " اخضر " , " عشب" ],
        "path": "images5/IMG_2827.JPG"
    },
    {
        "id": 47, "warehouse": 9,
        "name": "زرع اصطناعي ",
        "tags": ["ورد", "زهور", "زرع", "اخضر", "اصطناعي", "ديكور"],
        "path": "images5/IMG_2828.JPG"
    },
    {
        "id": 48, "warehouse": 9,
        "name": "زرع اصطناعي ",
        "tags": ["ورد", "زهور", "زرع", "اخضر", "اصطناعي", "ديكور"],
        "path": "images5/IMG_2829.JPG"
    },
    {
        "id": 49, "warehouse": 9,
        "name": "ورد اصطناعي ملون",
        "tags": ["ورد", "زهور", "ورود", "ملون", "اصطناعي", "ديكور"],
        "path": "images5/IMG_2830.JPG"
    },
    {
        "id": 50, "warehouse": 9,
        "name": "ورد اصطناعي ملون",
        "tags": ["ورد", "زهور", "ورود", "ملون", "اصطناعي", "ديكور"],
        "path": "images5/IMG_2831.JPG"
    },
    {
        "id": 51, "warehouse": 9,
        "name": "ورد اصطناعي ملون",
        "tags": ["ورد", "زهور", "ورود", "ملون", "اصطناعي", "ديكور"],
        "path": "images5/IMG_2832.JPG"
    },
    {
        "id": 52, "warehouse": 9,
        "name": "زرع اصطناعي ",
        "tags": ["ورد", "زهور", "زرع", "اخضر", "اصطناعي", "ديكور"],
        "path": "images6/IMG_2833.JPG"
    },
    {
        "id": 53, "warehouse": 9,
        "name": "طاولات ارضيه دائريه ",
        "tags": ["طاولات", "طاولة", "ارضيه","دائريه" , "اثاث"],
        "path": "images6/IMG_2834.JPG"
    },
    {
        "id": 54, "warehouse": 9,
        "name": "زرع اصطناعي ",
        "tags": ["ورد", "زهور", "زرع", "اخضر", "اصطناعي", "ديكور"],
        "path": "images6/IMG_2835.JPG"
    },
    {
        "id": 55, "warehouse": 9,
        "name": "اطارات",
        "tags": ["لوحات", "اطارات", "اطار", "ديكور"],
        "path": "images6/IMG_2836.JPG"
    },
    {
        "id": 56, "warehouse": 9,
        "name": "غاز هيليوم",
        "tags": ["غاز" ," هيليوم " , "ديكور"],
        "path": "images6/IMG_2837.JPG"
    },
    {
        "id": 57, "warehouse": 9,
        "name": "غلايات ماء",
        "tags": ["ماء", "غلايات", "سخانه", "منزلي"],
        "path": "images6/IMG_2838.JPG"
    },
    {
        "id": 58, "warehouse": 9,
        "name": "طاوله خشب",
        "tags": ["طاولات", "طاوله", "خشب", "اثاث"],
        "path": "images6/IMG_2839.JPG"
    },
    {
        "id": 59, "warehouse": 9,
        "name": "اشجار صناعيه بيضاء",
        "tags": ["شجر", "اصطناعي", "ابيض", "اثاث"],
        "path": "images6/IMG_2840.JPG"
    },
    {
        "id": 60, "warehouse": 9,
        "name": "ديكور فضي",
        "tags": ["فازات", "فضي", "فازه", "ديكور"],
        "path": "images7/IMG_2841.JPG"
    },
    {
        "id": 61, "warehouse": 9,
        "name": "مخدات",
        "tags": ["مخدات" , "ديكور"],
        "path": "images7/IMG_2842.JPG"
    },
    {
        "id": 62, "warehouse": 9,
        "name": "ارضيات خشب ",
        "tags": ["خشب", "ارضيات", "فرش"],
        "path": "images7/IMG_2843.JPG"
    },
    {
        "id": 63, "warehouse": 9,
        "name": "ستاندات خشبيه",
        "tags": ["ادوات", "خشب", "ستاندات"],
        "path": "images7/IMG_2845.JPG"
    },
    {
        "id": 64, "warehouse": 9,
        "name": "صبوره خشبيه ",
        "tags": ["خشب", "زينة", "ديكور", "صبوره"],
        "path": "images7/IMG_2846.JPG"
    },
    {
        "id": 65, "warehouse": 9,
        "name": "صبوره",
        "tags": ["صبوره" , "ديكور"],
        "path": "images7/IMG_2847.JPG"
    },
    {
        "id": 66, "warehouse": 9,
        "name": "مفارش بيضاء",
        "tags": ["مفرش", "مفارش", "ابيض", "فرش", "قماش"],
        "path": "images6/مفارش بيضاء.jpg"
    },

    // ═══════════════════════════════════════════════════════
    // مستودع G012  (Warehouse G012) — 8 items (Item 70 / IMG_3004.jpeg removed)
    // ═══════════════════════════════════════════════════════
    {
        "id": 67, "warehouse": "G012",
        "name": "شعار سرطان الثدي",
        "tags": ["شعار" , " ستاند "],
        "path": "images9/IMG_3001.jpeg"
    },
    {
        "id": 68, "warehouse": "G012",
        "name": "ستاند شبك حديد",
        "tags": ["شبك" , " ستاند " , " حديد "],
        "path": "images9/IMG_3002.jpeg"
    },
    {
        "id": 69, "warehouse": "G012",
        "name": "ستاند حديد ابيض",
        "tags": ["ابيض" , " ستاند " , " حديد"],
        "path": "images9/IMG_3003.jpeg"
    },
    {
        "id": 70, "warehouse": "G012",
        "name": "رفوف خشب ",
        "tags": [" رفوف" , " رف " , " خشب" ],
        "path": "images9/IMG_3005.jpeg"
    },
    {
        "id": 71, "warehouse": "G012",
        "name": "طاولات ارضيه خشب",
        "tags": [" طاوله " , " طاولات" , " خشب " , "ارضيه"],
        "path": "images9/IMG_3006.jpeg"
    },
    {
        "id": 72, "warehouse": "G012",
        "name": "طاولات عرض",
        "tags": [" طاوله " , " طاولات " ],
        "path": "images9/IMG_3007.jpeg"
    },
    {
        "id": 73, "warehouse": "G012",
        "name": "كونسول ابيض ",
        "tags": [" طاوله " , " طاولات " , " كونسول " , " ابيض "],
        "path": "images9/IMG_3008.jpeg"
    },
    {
        "id": 74, "warehouse": "G012",
        "name": "ستاند خشب",
        "tags": [" ستاند " , " خشب "],
        "path": "images9/IMG_3009.jpeg"
    }
];

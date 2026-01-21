// Переводы для трёх языков
const translations = {
    'en': {
        about: 'ABOUT ME',
        projects: 'PROJECTS',
        legal: 'LEGAL',
        legal_title: 'Legal & Copyright',
        legal_subtitle: 'Portfolio usage terms and rights',
        home_h1: 'Selected projects',
        all: 'All',
        school: 'Academic',
        competitions: 'Competitions',
        collaboration: 'Collaboration',
        // Category values on project pages
        school_detail: 'academic',
        competitions_detail: 'competitions',
        collaboration_detail: 'collaboration',
        category_label: 'Category',
        year_label: 'Year',
        location_label: 'Location',
        prev: '← Previous',
        next: 'Next →',
        all_projects: 'All Projects',
        // Project 1
        project1_title: 'High-Speed Rail Terminal Prague-East',
        // Project 2
        project2_title: 'Design – Art – and – Peace – Factory',
        // Project 3
        project3_title: 'Žluté lázně – Riverside Leisure & Spa',
        // Project 4
        project4_title: 'The Roof Club – Yacht Club Podolí',
        // Project 5
        project5_title: 'Středokluky Village Center',
        // Project 6
        project6_title: 'ČVUT Exhibition for the Gaudeamus Higher Education Fair',
        // Project 7
        project7_title: 'New Branch of Olomouc City Library – Trnkova',
        // Project 8
        project8_title: 'Primary School Stará Boleslav',
        // Project 9
        project9_title: 'In-between Spaces of Prague Market — Urban & Landscape Proposal',
        type_label: 'Type',
        conversion: 'Conversion',
        authors_label: 'Authors',
        collaboration_label: 'Collaboration',
        visualization_label: 'Visualization',
        gallery_visualizations: 'Visualizations',
        gallery_drawings: 'Drawings',
        drawings_label: 'Drawings',
        client_label: 'Client',
        award_label: 'Award',
        award_2nd_place: '2nd Place',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'All content is protected by copyright. Reproduction without permission is not allowed.'
    },
    'ru': {
        about: 'ОБО МНЕ',
        projects: 'ПРОЕКТЫ',
        legal: 'ПРАВО',
        legal_title: 'Правовая информация',
        legal_subtitle: 'Условия использования портфолио и права',
        home_h1: 'Избранные проекты',
        all: 'Все',
        school: 'Академические',
        competitions: 'Конкурсы',
        collaboration: 'Сотрудничество',
        // Category values on project pages
        school_detail: 'академические',
        competitions_detail: 'конкурсы',
        collaboration_detail: 'сотрудничество',
        category_label: 'Категория',
        year_label: 'Год',
        location_label: 'Локация',
        prev: '← Назад',
        next: 'Далее →',
        all_projects: 'Все проекты',
        // Project 1
        project1_title: 'Терминал ВСМ Прага-восток',
        // Project 2
        project2_title: 'Design – Art – and – Peace – Factory',
        // Project 3
        project3_title: 'Žluté lázně – Riverside Leisure & Spa',
        // Project 4
        project4_title: 'The Roof Club – Яхт-клуб Подоли',
        // Project 5
        project5_title: 'Центр деревни Стршедоклуки',
        // Project 6
        project6_title: 'Экспозиция ЧВУТ для выставки вузов Gaudeamus',
        // Project 7
        project7_title: 'Новый филиал библиотеки города Оломоуц – Трнкова',
        // Project 8
        project8_title: 'Начальная школа Стара-Болеслав',
        // Project 9
        project9_title: 'Межпространства Пражского рынка — градостроительно-ландшафтное предложение',
        type_label: 'Тип',
        conversion: 'Конверсия',
        authors_label: 'Авторы',
        collaboration_label: 'Сотрудничество',
        visualization_label: 'Визуализация',
        gallery_visualizations: 'Визуализации',
        gallery_drawings: 'Чертежи',
        drawings_label: 'Чертежи',
        client_label: 'Клиент',
        award_label: 'Награда',
        award_2nd_place: '2-е место',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'Весь контент защищён авторским правом. Воспроизведение без разрешения запрещено.'
    },
    'cz': {
        about: 'O MNĚ',
        projects: 'PROJEKTY',
        legal: 'PRÁVO',
        legal_title: 'Právní informace',
        legal_subtitle: 'Podmínky použití portfolia a práva',
        home_h1: 'Vybrané projekty',
        all: 'Vše',
        school: 'Akademické',
        competitions: 'Soutěže',
        collaboration: 'Spolupráce',
        // Category values on project pages (lowercase / regular)
        school_detail: 'akademické',
        competitions_detail: 'soutěže',
        collaboration_detail: 'spolupráce',
        category_label: 'Kategorie',
        year_label: 'Rok',
        location_label: 'Místo',
        prev: '← Předchozí',
        next: 'Další →',
        all_projects: 'Všechny projekty',
        // Project 1
        project1_title: 'Terminál VRT Praha-východ',
        // Project 2
        project2_title: 'Design – Art – and – Peace – Factory',
        // Project 3
        project3_title: 'Žluté lázně – Riverside Leisure & Spa',
        // Project 4
        project4_title: 'The Roof Club – Jachtařský klub Podolí',
        // Project 5
        project5_title: 'Centrum obce Středokluky',
        // Project 6
        project6_title: 'Expozice ČVUT pro veletrh vysokých škol Gaudeamus',
        // Project 7
        project7_title: 'Nová pobočka knihovny města Olomouce – Trnkova',
        // Project 8
        project8_title: 'ZŠ Stará Boleslav',
        // Project 9
        project9_title: 'Meziprostory Pražské tržnice — urbanisticko-krajinářský návrh',
        type_label: 'Typ',
        conversion: 'Konverze',
        authors_label: 'Autoři',
        collaboration_label: 'Spolupráce',
        visualization_label: 'Vizualizace',
        gallery_visualizations: 'Vizualizace',
        gallery_drawings: 'Výkresy',
        drawings_label: 'Výkresy',
        client_label: 'Klient',
        award_label: 'Ocenění',
        award_2nd_place: '2. místo',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'Veškerý obsah je chráněn autorským právem. Reprodukce bez souhlasu není povolena.'
    }
};

const imageSupport = (() => {
    const can = (mime) => {
        try {
            const c = document.createElement('canvas');
            if (!c.getContext) return false;
            return c.toDataURL(mime).startsWith(`data:${mime}`);
        } catch {
            return false;
        }
    };
    return {
        avif: can('image/avif'),
        webp: can('image/webp'),
    };
})();

function preferOptimizedImageUrl(url) {
    if (!url || typeof url !== 'string') return url;

    const withPicweb = (u) =>
        String(u).replace(/(images\/project\d+\/)(?!picweb\/)/i, '$1picweb/');

    const swap = (ext) =>
        withPicweb(url).replace(/\.(jpg|jpeg|png)(?=($|[?#]))/i, `.${ext}`);
    if (imageSupport.avif) return swap('avif');
    if (imageSupport.webp) return swap('webp');
    return url;
}

function updatePictureSources(pictureEl, fallbackSrc) {
    if (!pictureEl || !fallbackSrc) return;

    const withPicweb = (u) =>
        String(u).replace(/(images\/project\d+\/)(?!picweb\/)/i, '$1picweb/');

    const swap = (ext) =>
        withPicweb(fallbackSrc).replace(/\.(jpg|jpeg|png)(?=($|[?#]))/i, `.${ext}`);

    const avif = pictureEl.querySelector('source[type="image/avif"]');
    const webp = pictureEl.querySelector('source[type="image/webp"]');

    if (avif) avif.setAttribute('srcset', encodeURI(swap('avif')));
    if (webp) webp.setAttribute('srcset', encodeURI(swap('webp')));
}

function updateHomepageProjectMeta(lang) {
    if (!document.body.classList.contains('home')) return;

    const t = translations?.[lang] || translations?.en || {};
    const items = Array.from(document.querySelectorAll('.project-grid .project-item'));

    items.forEach((item) => {
        const metaEl = item.querySelector('[data-project-meta]');
        if (!metaEl) return;
        const year = (item.getAttribute('data-year') || '').trim();
        const category = (item.getAttribute('data-category') || '').trim();
        const categoryLabel = (t && category && t[category]) ? t[category] : category;

        // Minimal “studio-level” meta line: Year · Category
        const parts = [year, categoryLabel].filter(Boolean);
        metaEl.textContent = parts.join(' · ');
    });
}

function syncProjectHeroTitleAlignment() {
    const heroTitle = document.querySelector('.project-hero-title');
    const headerLeft = document.querySelector('.main-header .header-left');
    if (!heroTitle || !headerLeft) return;

    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        heroTitle.style.removeProperty('--hero-title-left');
        return;
    }

    const target = headerLeft.querySelector('.nav-separator') || headerLeft;
    const rect = target.getBoundingClientRect();
    const left = Math.max(16, Math.round(rect.left));

    heroTitle.style.setProperty('--hero-title-left', `${left}px`);
}

function initLightbox() {
    const links = Array.from(document.querySelectorAll('a.lightbox-link[href]'));
    
    // Don't create lightbox if there are no lightbox links on the page
    if (!links.length) return;
    
    let overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <button class="lightbox-close" type="button" aria-label="Close">×</button>
            <button class="lightbox-prev" type="button" aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>
            <button class="lightbox-next" type="button" aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
            <div class="lightbox-content" role="dialog" aria-modal="true">
                <img alt="">
                <div class="lightbox-caption"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const imgEl = overlay.querySelector('.lightbox-content img');
    const captionEl = overlay.querySelector('.lightbox-caption');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    // Gallery state
    let galleryImages = [];
    let currentGalleryIndex = 0;

    const close = () => {
        overlay.classList.remove('is-open');
        document.body.classList.remove('lightbox-open');
        imgEl.removeAttribute('src');
        captionEl.textContent = '';
        galleryImages = [];
        currentGalleryIndex = 0;
    };

    const showImage = (index) => {
        if (galleryImages.length === 0) return;
        currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;
        const img = galleryImages[currentGalleryIndex];
        
        imgEl.style.opacity = '0';
        setTimeout(() => {
            imgEl.src = img.src;
            imgEl.alt = img.alt || '';
            captionEl.textContent = img.alt || '';
            imgEl.style.opacity = '1';
        }, 100);
        
        // Show/hide arrows based on gallery size
        const showArrows = galleryImages.length > 1;
        prevBtn.style.display = showArrows ? 'flex' : 'none';
        nextBtn.style.display = showArrows ? 'flex' : 'none';
    };

    const openGallery = (gallery, startIndex = 0) => {
        galleryImages = gallery;
        currentGalleryIndex = startIndex;
        
        overlay.classList.add('is-open');
        document.body.classList.add('lightbox-open');
        showImage(currentGalleryIndex);
    };

    const prev = () => {
        if (galleryImages.length > 1) {
            showImage(currentGalleryIndex - 1);
        }
    };
    
    const next = () => {
        if (galleryImages.length > 1) {
            showImage(currentGalleryIndex + 1);
        }
    };

    // Collect all gallery images from the page
    const collectGalleryImages = (clickedLink) => {
        const images = [];
        
        // Get all lightbox links on the page
        document.querySelectorAll('a.lightbox-link[href]').forEach(link => {
            const src = preferOptimizedImageUrl(link.getAttribute('href'));
            const alt = link.querySelector('img')?.getAttribute('alt') || '';
            if (src && !images.some(i => i.src === src)) {
                images.push({ src, alt });
            }
        });
        
        // Also get images from drawings gallery thumbnails
        document.querySelectorAll('.drawings-gallery .drawings-thumb').forEach(thumb => {
            const src = preferOptimizedImageUrl(thumb.dataset.src);
            const alt = thumb.dataset.alt || '';
            if (src && !images.some(i => i.src === src)) {
                images.push({ src, alt });
            }
        });
        
        return images;
    };

    // Standard lightbox links - open with gallery navigation
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const clickedSrc = preferOptimizedImageUrl(href);
            const caption = link.querySelector('img')?.getAttribute('alt') || '';
            
            // Collect all images and find current index
            const allImages = collectGalleryImages(link);
            let startIndex = allImages.findIndex(img => img.src === clickedSrc);
            
            if (startIndex < 0) startIndex = 0;
            
            if (allImages.length > 0) {
                openGallery(allImages, startIndex);
            } else {
                // Fallback: single image
                openGallery([{ src: clickedSrc, alt: caption }], 0);
            }
        });
    });

    // Use event delegation on overlay for all button clicks
    overlay.addEventListener('click', (e) => {
        const target = e.target;
        
        // Close button
        if (target.closest('.lightbox-close')) {
            e.preventDefault();
            e.stopPropagation();
            close();
            return;
        }
        
        // Prev button
        if (target.closest('.lightbox-prev')) {
            e.preventDefault();
            e.stopPropagation();
            prev();
            return;
        }
        
        // Next button
        if (target.closest('.lightbox-next')) {
            e.preventDefault();
            e.stopPropagation();
            next();
            return;
        }
        
        // Click on overlay background closes
        if (target === overlay) {
            close();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });
    
    // Listen for custom event from drawings gallery
    document.addEventListener('openLightboxGallery', (e) => {
        const { images, startIndex } = e.detail;
        if (images && images.length > 0) {
            openGallery(images, startIndex || 0);
        }
    });
    
    // Swipe support for lightbox
    let touchStartX = 0;
    overlay.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    overlay.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) next();
            else prev();
        }
    }, { passive: true });

    // Expose gallery open function for mobile gallery
    window.openLightboxGallery = (href, caption, gallery, startIndex) => {
        openGallery(gallery, startIndex);
    };
}

function randomInt(maxExclusive) {
    // Prefer cryptographically strong randomness when available
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const buf = new Uint32Array(1);
        crypto.getRandomValues(buf);
        return buf[0] % maxExclusive;
    }
    return Math.floor(Math.random() * maxExclusive);
}

function shuffleInPlace(arr) {
    // Fisher–Yates
    for (let i = arr.length - 1; i > 0; i--) {
        const j = randomInt(i + 1);
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

function initRandomizeHomepageProjects() {
    const grid = document.querySelector('.project-grid');
    if (!grid) return;

    const items = Array.from(grid.children).filter(el => el.classList?.contains('project-item'));
    if (items.length < 2) return;

    const key = 'projectGridOrderSignature';
    const last = (() => {
        try { return sessionStorage.getItem(key) || ''; } catch { return ''; }
    })();

    const signatureOf = (els) => els
        .map(el => el.querySelector('a')?.getAttribute('href') || '')
        .filter(Boolean)
        .join('|');

    // Try a few times to avoid repeating the exact same order after refresh in the same tab.
    let attempt = 0;
    let next = items.slice();
    let sig = '';
    do {
        next = shuffleInPlace(next);
        sig = signatureOf(next);
        attempt += 1;
    } while (attempt < 5 && sig && sig === last);

    next.forEach(el => grid.appendChild(el));

    try { sessionStorage.setItem(key, sig); } catch {}
}

// Функция для фильтрации проектов
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else {
            const projectCategory = project.getAttribute('data-category');
            project.style.display = projectCategory === category ? 'block' : 'none';
        }
    });
}

// Animated underline for filter buttons
function initFilterUnderline() {
    const filterGroup = document.querySelector('.filter-group');
    if (!filterGroup) return;
    
    // Create the underline element
    let underline = filterGroup.querySelector('.filter-underline');
    if (!underline) {
        underline = document.createElement('span');
        underline.className = 'filter-underline';
        filterGroup.appendChild(underline);
    }

    // Mark as JS-enhanced so CSS fallback can disable itself
    filterGroup.classList.add('has-underline');
    
    // Ensure each button has a measurable text wrapper, so underline aligns to text (not padding)
    const buttons = Array.from(filterGroup.querySelectorAll('.filter-btn'));
    buttons.forEach((btn) => {
        // If translations previously replaced the button text, wrappers may be lost.
        let label = btn.querySelector('.filter-label');
        if (!label) {
            const text = (btn.textContent || '').trim();
            btn.textContent = '';
            label = document.createElement('span');
            label.className = 'filter-label';
            label.textContent = text;
            btn.appendChild(label);
        }
    });

    function moveUnderline(btn) {
        if (!btn) return;
        const groupRect = filterGroup.getBoundingClientRect();
        const label = btn.querySelector('.filter-label') || btn;
        const labelRect = label.getBoundingClientRect();

        // Underline: constant-width dash (same everywhere), centered under label
        const width = 20;
        const labelCenter = (labelRect.left - groupRect.left) + (labelRect.width / 2);
        const left = labelCenter - (width / 2);
        
        underline.style.left = `${left}px`;
        underline.style.width = `${width}px`;
        underline.style.opacity = '1';
    }
    
    // Position underline on active button
    const activeBtn = filterGroup.querySelector('.filter-btn.active');
    if (activeBtn) {
        // Initial position without animation
        underline.style.transition = 'none';
        // Do it on next frame (layout is more stable), then re-enable animation
        requestAnimationFrame(() => {
            moveUnderline(activeBtn);
            underline.style.transition = '';
        });
        // And once more after fonts/layout settle (prevents wrong position on refresh)
        window.addEventListener('load', () => moveUnderline(activeBtn), { passive: true, once: true });
    }
    
    // Update on window resize
    window.addEventListener('resize', () => {
        const active = filterGroup.querySelector('.filter-btn.active');
        if (active) moveUnderline(active);
    });

    // Premium interaction: underline follows hover, returns to active when leaving the group
    buttons.forEach((btn) => {
        // Defer measurement to next frame so hover/focus styles (incl. font-weight) are applied
        btn.addEventListener('mouseenter', () => requestAnimationFrame(() => moveUnderline(btn)), { passive: true });
        btn.addEventListener('focus', () => requestAnimationFrame(() => moveUnderline(btn)), { passive: true });
    });
    filterGroup.addEventListener('mouseleave', () => {
        const active = filterGroup.querySelector('.filter-btn.active');
        if (active) requestAnimationFrame(() => moveUnderline(active));
    }, { passive: true });
    
    // Expose so other code (translations / initial load) can re-sync position
    window.__moveFilterUnderline = moveUnderline;
    return moveUnderline;
}

// Обработчики для фильтров
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        
        // Добавляем активный класс нажатой кнопке
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        
        // Move underline to active button
        if (window.__moveFilterUnderline) {
            requestAnimationFrame(() => window.__moveFilterUnderline(btn));
        } else {
            // If underline wasn't initialized (e.g., a runtime error in DOMContentLoaded),
            // initialize on-demand so the UI still works without a reload.
            const mover = initFilterUnderline();
            if (typeof mover === 'function') requestAnimationFrame(() => mover(btn));
        }
        
        // Фильтруем проекты
        const category = btn.getAttribute('data-filter');
        filterProjects(category);
    });
});

// Функция для переключения языков
function switchLanguage(lang) {
    // Убираем активный класс у всех языковых ссылок
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Находим ссылку с нужным языком и добавляем активный класс
    const langLink = document.querySelector(`.lang-link[data-lang="${lang}"]`);
    if (langLink) {
        langLink.classList.add('active');
    }
    
    // Сохраняем выбранный язык
    try { localStorage.setItem('selectedLanguage', lang); } catch {}

    // Keep <html lang> in sync for accessibility/SEO
    document.documentElement.lang = (lang === 'cz') ? 'cs' : lang;
    
    // Переводим текст на странице
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Показываем/скрываем языковые блоки (для длинного текста, например legal page)
    const i18nBlocks = document.querySelectorAll('.i18n-block[data-lang-content]');
    if (i18nBlocks.length) {
        i18nBlocks.forEach(block => {
            const blockLang = block.getAttribute('data-lang-content');
            block.style.display = (blockLang === lang) ? 'block' : 'none';
        });
    }

    // Обновляем тексты фильтров
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const key = btn.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            const label = btn.querySelector('.filter-label');
            if (label) label.textContent = translations[lang][key];
            else btn.textContent = translations[lang][key];
        }
    });

    // Re-sync animated underline after text changes (layout width changes)
    if (window.__moveFilterUnderline) {
        const active = document.querySelector('.filter-group .filter-btn.active');
        if (active) {
            requestAnimationFrame(() => window.__moveFilterUnderline(active));
        }
    }

    // Project pages: keep hero title aligned with header breadcrumb
    requestAnimationFrame(() => syncProjectHeroTitleAlignment());

    // Homepage: update the “Year · Category” micro-line under titles
    updateHomepageProjectMeta(lang);

    // Homepage: refresh tooltips + truncation after translations change
    if (window.__refreshHomepageProjectTitles) {
        window.__refreshHomepageProjectTitles();
    }
}

function getLangFromUrl() {
    try {
        const q = new URLSearchParams(location.search);
        const raw = (q.get('lang') || '').toLowerCase();
        if (raw === 'en' || raw === 'cz' || raw === 'ru') return raw;
    } catch {}
    return null;
}

function setLangInUrl(lang) {
    if (!lang) return;
    try {
        const url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState({}, '', url.toString());
    } catch {}
}

// Добавляем обработчики для языковых ссылок
document.querySelectorAll('.lang-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        switchLanguage(lang);
        setLangInUrl(lang);
    });
});

// При загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Авто-год в копирайтах
    const year = String(new Date().getFullYear());
    document.querySelectorAll('.js-year').forEach(el => {
        el.textContent = year;
    });

    // Load saved language; if none is saved, default to Czech for Czech browsers.
    let storedLanguage = null;
    try { storedLanguage = localStorage.getItem('selectedLanguage'); } catch {}
    const browserLang = (navigator.language || '').toLowerCase();
    const defaultLanguage = browserLang.startsWith('cs') ? 'cz' : 'en';
    const urlLanguage = getLangFromUrl();
    switchLanguage(urlLanguage || storedLanguage || defaultLanguage);
    syncProjectHeroTitleAlignment();
    window.addEventListener('resize', () => syncProjectHeroTitleAlignment(), { passive: true });
    window.addEventListener('load', () => syncProjectHeroTitleAlignment(), { passive: true, once: true });

    // Init animated underline after language is applied (correct widths on refresh)
    initFilterUnderline();

    // Homepage: keep projects in original order (randomization disabled)
    // initRandomizeHomepageProjects();
    
    // Service Worker (cache for faster navigations + offline fallback)
    registerServiceWorker();

    // Prefetch likely next navigations (project pages + homepage tiles)
    initPrefetching();

    // UX: avoid hover transitions while scrolling (prevents "reload" illusion)
    initScrollStateClass();

    // Homepage: 1-line titles on mobile + full title in tooltip on hover
    initHomepageProjectTitleTooltipsAndTruncation();

    // Мягкая защита изображений (не влияет на копирование текста):
    // - запрет drag
    // - запрет контекстного меню только на изображениях
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('draggable', 'false');
        img.addEventListener('dragstart', (e) => e.preventDefault());
        img.addEventListener('contextmenu', (e) => e.preventDefault());
    });

    // Lightbox pro full-size zobrazení obrázků
    initLightbox();
    
    // Galleries (Drawings / thumbnails style)
    initDrawingsGallery();

    // Project 5: make full-width frames less aggressively cropped by auto-sizing height
    initProject5GalleryAutoHeights();
    
    // Mobile gallery: convert vertical gallery to swipeable gallery on mobile
    initMobileGallery();

    // About page: scroll-to-contact button (works with language blocks)
    initAboutContactScroll();

    // About page: "Download PDF" (Print → Save as PDF)
    initAboutPdfDownload();
});

function initAboutContactScroll() {
    const triggers = Array.from(document.querySelectorAll('.js-scroll-contact'));
    if (!triggers.length) return;

    const getActiveBlock = () => {
        const blocks = Array.from(document.querySelectorAll('.i18n-block[data-lang-content]'));
        return blocks.find((b) => window.getComputedStyle(b).display !== 'none') || null;
    };

    const scrollToContact = () => {
        const active = getActiveBlock();
        const target = active?.querySelector('.js-contact-section') || document.querySelector('.js-contact-section');
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    triggers.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToContact();
        });
    });
}

function initAboutPdfDownload() {
    const btns = Array.from(document.querySelectorAll('.js-print-pdf'));
    if (!btns.length) return;
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // User can "Save as PDF" in the print dialog
            window.print();
        });
    });
}

function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    // Avoid noisy errors when running via file:// (SW requires http/https)
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;

    // IMPORTANT: this file (`script.js`) is referenced as "../script.js" on /projects/* pages,
    // but the resolved URL is still "/script.js". We use that to reliably locate "/sw.js".
    const scriptTag =
        document.querySelector('script[src$="/script.js"]') ||
        document.querySelector('script[src$="script.js"]');
    const scriptUrl = scriptTag?.src ? new URL(scriptTag.src) : null;
    const siteRoot = scriptUrl ? new URL('.', scriptUrl) : new URL('/', location.origin);

    const swUrl = new URL('sw.js', siteRoot);
    const scope = siteRoot.pathname; // usually "/"

    navigator.serviceWorker.register(swUrl.href, { scope }).catch(() => {
        // Fail silently; site should work without SW
    });
}

function initPrefetching() {
    // Helper: safe prefetch without breaking older browsers
    const seen = new Set();
    const prefetchUrl = (url) => {
        if (!url) return;
        try {
            const abs = new URL(url, location.href);
            if (abs.origin !== location.origin) return;
            if (seen.has(abs.href)) return;
            seen.add(abs.href);

            // 1) Hint browser
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = abs.href;
            link.as = 'document';
            document.head.appendChild(link);

            // 2) Warm HTTP cache (and SW cache if installed)
            fetch(abs.href, { credentials: 'same-origin' }).catch(() => {});
        } catch {
            // ignore
        }
    };

    // Project pages: prefetch prev/next (new project-nav + legacy fallback)
    const navLinks = Array.from(
        document.querySelectorAll('.project-nav a[href], .project-navigation-top a.nav-arrow[href]')
    );
    navLinks.forEach(a => prefetchUrl(a.getAttribute('href')));

    // Homepage: prefetch on hover/focus (cheap, user-intent based)
    const projectLinks = Array.from(document.querySelectorAll('.project-grid a.project-link[href]'));
    projectLinks.forEach(a => {
        const href = a.getAttribute('href');
        const onIntent = () => prefetchUrl(href);
        a.addEventListener('mouseenter', onIntent, { passive: true });
        a.addEventListener('focus', onIntent, { passive: true });
        a.addEventListener('touchstart', onIntent, { passive: true });
    });
}

function initScrollStateClass() {
    // Prevent hover transitions from triggering while user scrolls
    // (fixes the "images keep reloading while scrolling" feeling on the homepage).
    let t = null;
    const onScroll = () => {
        document.body.classList.add('is-scrolling');
        if (t) window.clearTimeout(t);
        t = window.setTimeout(() => {
            document.body.classList.remove('is-scrolling');
        }, 140);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

function refreshHomepageProjectTitles() {
    if (!document.body.classList.contains('home')) return;
    const titles = Array.from(document.querySelectorAll('.project-grid .project-title'));
    if (!titles.length) return;

    titles.forEach((el) => {
        const full = (el.textContent || '').trim();
        if (!full) return;
        el.dataset.fullTitle = full;
        // Native tooltip = "full title only on hover"
        el.setAttribute('title', full);
    });

    const truncateOneLineToWholeWords = (el) => {
        const full = (el.dataset.fullTitle || el.textContent || '').trim();
        if (!full) return;

        // Reset to full, then measure.
        el.textContent = full;
        if (el.scrollWidth <= el.clientWidth) return;

        // Reduce by whole words until it fits (avoid cutting mid-word where possible).
        let current = full;
        const minLen = 6;
        while (el.scrollWidth > el.clientWidth && current.length > minLen) {
            const lastSpace = Math.max(current.lastIndexOf(' '), current.lastIndexOf('\u00A0'));
            if (lastSpace <= 0) break;
            current = current.slice(0, lastSpace).trim();
            el.textContent = current + '…';
        }
    };

    const apply = () => {
        const isMobile = window.matchMedia && window.matchMedia('(max-width: 600px)').matches;
        titles.forEach((el) => {
            const full = (el.dataset.fullTitle || '').trim();
            if (!full) return;
            el.textContent = full;
            if (isMobile) truncateOneLineToWholeWords(el);
        });
    };

    requestAnimationFrame(apply);
}

function initHomepageProjectTitleTooltipsAndTruncation() {
    if (!document.body.classList.contains('home')) return;

    // Initial + after language switch
    window.__refreshHomepageProjectTitles = refreshHomepageProjectTitles;
    refreshHomepageProjectTitles();

    window.addEventListener('load', refreshHomepageProjectTitles, { passive: true, once: true });

    let rt = null;
    window.addEventListener('resize', () => {
        if (rt) window.clearTimeout(rt);
        rt = window.setTimeout(refreshHomepageProjectTitles, 140);
    }, { passive: true });
}

function initProject5GalleryAutoHeights() {
    if (!document.body.classList.contains('project-5')) return;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    function getNaturalAspectFromImg(img) {
        const w = img?.naturalWidth || 0;
        const h = img?.naturalHeight || 0;
        if (!w || !h) return null;
        return w / h;
    }

    function loadAspect(src) {
        return new Promise((resolve) => {
            const tmp = new Image();
            tmp.onload = () => {
                const w = tmp.naturalWidth || 0;
                const h = tmp.naturalHeight || 0;
                resolve(w && h ? (w / h) : null);
            };
            tmp.onerror = () => resolve(null);
            tmp.src = src;
        });
    }

    // 1) Full-width vertical gallery frames
    const verticalGallery = document.querySelector('.project-gallery-vertical');
    const frameFigures = verticalGallery
        ? Array.from(verticalGallery.querySelectorAll('figure.gallery-frame'))
        : [];

    const frameImgs = frameFigures
        .filter(fig => !fig.classList.contains('slide-situace')) // situation is handled with contain (no crop)
        .map(fig => fig.querySelector('img'))
        .filter(Boolean);

    // 2) Drawings gallery main preview
    const drawingsGalleries = Array.from(document.querySelectorAll('.drawings-gallery'));

    // We no longer auto-switch the "narrowest" slide to contain. It caused one image (often the church)
    // to render visually smaller than the rest until hover zoom kicked in.
    function markContainFrames() {}

    function setupAutoHeightForFrames(minAspect, aspects) {
        if (!verticalGallery || !frameFigures.length || !minAspect) return;

        const apply = () => {
            const width = verticalGallery.clientWidth || window.innerWidth;
            // Height chosen so the narrowest image (min aspect) has no crop with object-fit: cover.
            const desired = width / minAspect;
            const minH = 360;
            const maxH = window.innerHeight * 0.82;
            const heightPx = Math.round(clamp(desired, minH, maxH));

            frameFigures.forEach(fig => {
                fig.style.height = `${heightPx}px`;
            });

            // Keep the split-row block aligned to the same "frame height"
            const splitFrames = Array.from(
                document.querySelectorAll('.gallery-row-split.gallery-row-frame')
            );
            splitFrames.forEach(el => {
                el.style.height = `${heightPx}px`;
            });

            // Special-case: situace composition should size itself to the main situation image (contain, no crop),
            // so it looks visually bigger and doesn't get huge white padding.
            applySituaceComboHeight();
        };

        // Even if we can't make the frame tall enough on every screen, ensure the narrowest slide isn't cropped:
        markContainFrames(aspects, minAspect);

        apply();

        // Debounced resize
        let t = null;
        window.addEventListener('resize', () => {
            if (t) window.clearTimeout(t);
            t = window.setTimeout(apply, 120);
        }, { passive: true });
    }

    let situaceAspect = null;
    function applySituaceComboHeight() {
        const combo = document.querySelector('.p5-situace-combo');
        if (!combo) return;
        const img = combo.querySelector('figure.slide-situace img');
        if (!img) return;

        // Cache aspect once loaded (or when available)
        const natural = getNaturalAspectFromImg(img);
        if (typeof natural === 'number' && natural > 0) situaceAspect = natural;

        if (!situaceAspect) return;

        // Use the actual rendered width of the left column (2/3) to compute a tight height for "contain".
        const leftFig = combo.querySelector('figure.slide-situace');
        const leftW = leftFig?.clientWidth || 0;
        if (!leftW) return;

        const desired = leftW / situaceAspect;
        const minH = 320;
        const maxH = window.innerHeight * 0.86;
        const heightPx = Math.round(clamp(desired, minH, maxH));

        combo.style.height = `${heightPx}px`;
    }

    async function computeAspectsForFrames() {
        if (!frameImgs.length) return [];

        const pairs = await Promise.all(
            frameImgs.map(async (img) => {
                const fig = img?.closest('figure.gallery-frame');
                const natural = getNaturalAspectFromImg(img);
                if (typeof natural === 'number' && natural > 0) return { fig, aspect: natural };
                const src = img?.getAttribute('src');
                const loaded = src ? await loadAspect(src) : null;
                return { fig, aspect: loaded };
            })
        );

        return pairs.filter(p => p?.fig);
    }

    function setupAutoHeightForDrawings(gallery, minAspect) {
        if (!gallery || !minAspect) return;
        const main = gallery.querySelector('.drawings-main');
        if (!main) return;

        const apply = () => {
            const width = main.clientWidth || window.innerWidth;
            const desired = width / minAspect;
            const minH = 360;
            const maxH = window.innerHeight * 0.82;
            const heightPx = Math.round(clamp(desired, minH, maxH));
            main.style.height = `${heightPx}px`;
        };

        apply();

        let t = null;
        window.addEventListener('resize', () => {
            if (t) window.clearTimeout(t);
            t = window.setTimeout(apply, 120);
        }, { passive: true });
    }

    async function computeMinAspectForDrawings(gallery) {
        const thumbs = Array.from(gallery.querySelectorAll('.drawings-thumb'))
            .map(btn => btn.dataset?.src)
            .filter(Boolean);
        if (!thumbs.length) return null;

        const aspects = (await Promise.all(thumbs.map(loadAspect)))
            .filter(a => typeof a === 'number' && a > 0);

        return aspects.length ? Math.min(...aspects) : null;
    }

    async function setupContainToggleForDrawings(gallery, minAspect) {
        if (!gallery || !minAspect) return;
        const main = gallery.querySelector('.drawings-main');
        const mainImg = gallery.querySelector('.drawings-main img');
        if (!main || !mainImg) return;

        const threshold = minAspect * 1.02;

        const srcs = Array.from(gallery.querySelectorAll('.drawings-thumb'))
            .map(btn => btn.dataset?.src)
            .filter(Boolean);

        const aspectMap = new Map();
        await Promise.all(
            srcs.map(async (src) => {
                const a = await loadAspect(src);
                if (typeof a === 'number' && a > 0) aspectMap.set(src, a);
            })
        );

        const apply = () => {
            const src = mainImg.getAttribute('src') || '';
            const a = aspectMap.get(src);
            const shouldContain = typeof a === 'number' && a > 0 && a <= threshold;
            main.classList.toggle('is-contain', shouldContain);
        };

        apply();

        // Track changes when user navigates (thumbs / arrows update mainImg.src)
        const obs = new MutationObserver(apply);
        obs.observe(mainImg, { attributes: true, attributeFilter: ['src'] });
    }

    // Kick off (async, but safe)
    computeAspectsForFrames().then((pairs) => {
        const aspects = pairs
            .map(p => p.aspect)
            .filter(a => typeof a === 'number' && a > 0);
        const minAspect = aspects.length ? Math.min(...aspects) : null;
        setupAutoHeightForFrames(minAspect, pairs);
    });

    drawingsGalleries.forEach(gallery => {
        computeMinAspectForDrawings(gallery).then(minAspect => {
            setupAutoHeightForDrawings(gallery, minAspect);
            setupContainToggleForDrawings(gallery, minAspect);
        });
    });
}

// Drawings Gallery (MVRDV style)
function initDrawingsGallery() {
    const galleries = Array.from(document.querySelectorAll('.drawings-gallery'));
    if (!galleries.length) return;

    galleries.forEach(gallery => {
        const mainImg = gallery.querySelector('.drawings-main img');
        const mainPicture = mainImg ? mainImg.closest('picture') : null;
        const thumbs = Array.from(gallery.querySelectorAll('.drawings-thumb'));
        const prevBtn = gallery.querySelector('.drawings-prev');
        const nextBtn = gallery.querySelector('.drawings-next');
        const currentNum = gallery.querySelector('#drawingsCurrentNum');
        const totalNum = gallery.querySelector('#drawingsTotalNum');

        if (!mainImg || !thumbs.length) return;

        let currentIndex = thumbs.findIndex(t => t.classList.contains('active'));
        if (currentIndex < 0) currentIndex = 0;

        const total = thumbs.length;
        if (totalNum) totalNum.textContent = total;

        function updateGallery(index) {
            currentIndex = index;
            const thumb = thumbs[index];
            const src = thumb.dataset.src;
            const alt = thumb.dataset.alt || '';

            // Fade effect
            mainImg.style.opacity = '0';
            setTimeout(() => {
                // If main image is inside a <picture>, update <source> candidates too.
                if (mainPicture) updatePictureSources(mainPicture, src);
                mainImg.src = src;
                mainImg.alt = alt;
                mainImg.style.opacity = '1';
            }, 150);

            // Update active thumb
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');

            // Optional counter
            if (currentNum) currentNum.textContent = String(index + 1);
        }

        // Initialize from current active thumb
        const activeThumb = thumbs[currentIndex];
        if (activeThumb?.dataset?.src) {
            if (mainPicture) updatePictureSources(mainPicture, activeThumb.dataset.src);
            mainImg.src = activeThumb.dataset.src;
            mainImg.alt = activeThumb.dataset.alt || '';
        }

        thumbs.forEach((thumb, i) => {
            thumb.addEventListener('click', () => updateGallery(i));
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                updateGallery((currentIndex - 1 + total) % total);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                updateGallery((currentIndex + 1) % total);
            });
        }

        // Click on main image opens lightbox with full gallery
        const mainContainer = gallery.querySelector('.drawings-main');
        if (mainContainer) {
            mainContainer.addEventListener('click', (e) => {
                // Don't open lightbox if clicking arrows
                if (e.target.closest('.drawings-arrow')) return;
                
                // Collect all images from this drawings gallery
                const galleryImages = thumbs.map(thumb => ({
                    src: preferOptimizedImageUrl(thumb.dataset.src),
                    alt: thumb.dataset.alt || ''
                })).filter(img => img.src);
                
                // Trigger custom event to open lightbox with gallery
                const event = new CustomEvent('openLightboxGallery', {
                    detail: {
                        images: galleryImages,
                        startIndex: currentIndex
                    }
                });
                document.dispatchEvent(event);
            });
        }
    });
}

// Mobile Gallery: Convert vertical gallery to swipeable gallery on mobile
function initMobileGallery() {
    const verticalGallery = document.querySelector('.project-gallery-vertical');
    if (!verticalGallery) return;
    
    // Check if mobile gallery already exists
    if (document.querySelector('.mobile-gallery')) return;
    
    // Collect all images from the vertical gallery
    const allImages = [];
    
    // Get images from figures and lightbox links
    verticalGallery.querySelectorAll('img').forEach(img => {
        const link = img.closest('a.lightbox-link');
        const src = preferOptimizedImageUrl(link ? link.getAttribute('href') : img.getAttribute('src'));
        const alt = img.getAttribute('alt') || '';
        if (src && !allImages.some(i => i.src === src)) {
            allImages.push({ src, alt });
        }
    });
    
    if (allImages.length === 0) return;
    
    // Create mobile gallery HTML with modern navigation
    const mobileGallery = document.createElement('div');
    mobileGallery.className = 'mobile-gallery';
    
    const dotsHtml = allImages.map((_, i) => `
        <button class="mobile-gallery-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Image ${i + 1}"></button>
    `).join('');
    
    mobileGallery.innerHTML = `
        <div class="mobile-gallery-main">
            <img src="${allImages[0].src}" alt="${allImages[0].alt}">
            <div class="mobile-gallery-arrows">
                <button class="mobile-gallery-arrow mobile-gallery-prev" aria-label="Previous">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                <button class="mobile-gallery-arrow mobile-gallery-next" aria-label="Next">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="mobile-gallery-nav">
            <div class="mobile-gallery-progress">
                <div class="mobile-gallery-progress-bar" style="width: ${100 / allImages.length}%"></div>
            </div>
            <div class="mobile-gallery-dots">
                ${dotsHtml}
            </div>
            <div class="mobile-gallery-counter">${allImages.length} images</div>
        </div>
    `;
    
    // Insert after vertical gallery
    verticalGallery.parentNode.insertBefore(mobileGallery, verticalGallery.nextSibling);
    
    // Initialize gallery functionality
    const mainImg = mobileGallery.querySelector('.mobile-gallery-main img');
    const dots = Array.from(mobileGallery.querySelectorAll('.mobile-gallery-dot'));
    const prevBtn = mobileGallery.querySelector('.mobile-gallery-prev');
    const nextBtn = mobileGallery.querySelector('.mobile-gallery-next');
    const progressBar = mobileGallery.querySelector('.mobile-gallery-progress-bar');
    
    let currentIndex = 0;
    const total = allImages.length;
    
    function updateGallery(index) {
        currentIndex = index;
        const img = allImages[index];
        
        // Fade effect
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = img.src;
            mainImg.alt = img.alt;
            mainImg.style.opacity = '1';
        }, 120);
        
        // Update active dot
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        
        // Update progress bar
        if (progressBar) {
            const progress = ((index + 1) / total) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => updateGallery(i));
    });
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateGallery((currentIndex - 1 + total) % total);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateGallery((currentIndex + 1) % total);
        });
    }
    
    // Click on main image opens lightbox with full gallery
    const mainContainer = mobileGallery.querySelector('.mobile-gallery-main');
    if (mainContainer) {
        mainContainer.addEventListener('click', (e) => {
            // Don't open lightbox if clicking arrows
            if (e.target.closest('.mobile-gallery-arrow')) return;
            
            if (window.openLightboxGallery) {
                window.openLightboxGallery(
                    allImages[currentIndex].src,
                    allImages[currentIndex].alt,
                    allImages,
                    currentIndex
                );
            }
        });
    }
    
    // Swipe support for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    mainContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    mainContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swipe left - next
                updateGallery((currentIndex + 1) % total);
            } else {
                // Swipe right - prev
                updateGallery((currentIndex - 1 + total) % total);
            }
        }
    }, { passive: true });
}


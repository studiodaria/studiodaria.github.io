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
        project1_title_short: 'High-Speed Rail Terminal',
        project1_location: 'Nehvizdy, Czech Republic',
        project1_client: 'Railway Administration',
        // Project 2
        project2_title: 'Design – Art – and – Peace – Factory',
        project2_title_short: 'Design – Art – and – Peace',
        project2_location: 'Kherson, Ukraine',
        project2_client: 'CTU FA, Studio Fránek',
        // Project 3
        project3_title: 'Zlute lazne – Riverside Leisure & Spa',
        project3_title_short: 'Zlute lazne – Hotel & Spa',
        project3_location: 'Prague, Podolské Embankment – Žluté lázně',
        project3_client: 'CTU FA, Studio Lampa',
        // Project 4
        project4_title: 'The Roof Club – Yacht Club Podoli',
        project4_title_short: 'The Roof – Yacht Club',
        project4_location: 'Prague – Podolí, Podolský Island (Vltava)',
        project4_client: 'CTU FA, Studio Lampa',
        // Project 5
        project5_title: 'Village Center Stredokluky',
        project5_title_short: 'Village Center Stredokluky',
        project5_location: 'Středokluky, Czech Republic',
        project5_client: 'Czech Chamber of Architects',
        // Project 6
        project6_title: 'CTU Exhibition for the Gaudeamus Higher Education Fair',
        project6_title_short: 'CTU Exhibition',
        project6_location: 'Gaudeamus Higher Education Fair',
        project6_client: 'CTU',
        // Project 7
        project7_title: 'New Branch of Olomouc City Library – Trnkova',
        project7_title_short: 'Olomouc Library – Trnkova',
        project7_location: 'Olomouc – Trnkova, Czech Republic',
        project7_client: 'Czech Chamber of Architects',
        // Project 8
        project8_title: 'Primary School Stara Boleslav',
        project8_title_short: 'Primary School Stara Boleslav',
        project8_location: 'Stará Boleslav, Czech Republic',
        project8_client: 'City of Brandýs nad Labem – Stará Boleslav',
        // Project 9
        project9_title: 'In-between Spaces of Prague Market — Urban & Landscape Proposal',
        project9_title_short: 'Prague Market – Public Spaces',
        project9_location: 'Prague – Holešovice',
        project9_client: 'City of Prague',
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
        award_context: 'Architectural Competition',
        award_context_student: 'Student Competition',
        gallery_additional: 'Additional',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'Copyright protected. No reproduction without permission.'
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
        project1_title_short: 'Терминал ВСМ',
        project1_location: 'Негвизды, Чехия',
        project1_client: 'Управление железных дорог',
        // Project 2
        project2_title: 'Фабрика дизайна, искусства и мира',
        project2_title_short: 'Фабрика дизайна и искусства',
        project2_location: 'Херсон, Украина',
        project2_client: 'ФА ЧВУТ, Ателье Франек',
        // Project 3
        project3_title: 'Жёлтые лазне – Отель и спа у реки',
        project3_title_short: 'Жёлтые лазне – Отель и спа',
        project3_location: 'Прага, Подольская набережная – Жёлтые лазне',
        project3_client: 'ФА ЧВУТ, Ателье Лампа',
        // Project 4
        project4_title: 'The Roof Club – Яхт-клуб Подоли',
        project4_title_short: 'The Roof – Яхт-клуб',
        project4_location: 'Прага – Подоли, остров Подольский (Влтава)',
        project4_client: 'ФА ЧВУТ, Ателье Лампа',
        // Project 5
        project5_title: 'Центр деревни Стршедоклуки',
        project5_title_short: 'Центр Стршедоклуки',
        project5_location: 'Стршедоклуки, Чехия',
        project5_client: 'Чешская палата архитекторов',
        // Project 6
        project6_title: 'Экспозиция ЧВУТ для ярмарки вузов Gaudeamus',
        project6_title_short: 'Экспозиция ЧВУТ',
        project6_location: 'Ярмарка вузов Gaudeamus',
        project6_client: 'ЧВУТ',
        // Project 7
        project7_title: 'Новый филиал библиотеки города Оломоуц – Трнкова',
        project7_title_short: 'Библиотека Оломоуц – Трнкова',
        project7_location: 'Оломоуц – Трнкова, Чехия',
        project7_client: 'Чешская палата архитекторов',
        // Project 8
        project8_title: 'Начальная школа Стара-Болеслав',
        project8_title_short: 'Школа Стара-Болеслав',
        project8_location: 'Стара-Болеслав, Чехия',
        project8_client: 'Город Брандис-над-Лабем – Стара-Болеслав',
        // Project 9
        project9_title: 'Межпространства Пражского рынка — градостроительно-ландшафтное предложение',
        project9_title_short: 'Пражский рынок – Общественные пространства',
        project9_location: 'Прага – Голешовице',
        project9_client: 'Город Прага',
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
        award_context: 'Архитектурный конкурс',
        award_context_student: 'Студенческий конкурс',
        gallery_additional: 'Дополнительно',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'Контент защищён авторским правом. Копирование без разрешения запрещено.'
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
        project1_title_short: 'Terminál VRT',
        project1_location: 'Nehvizdy, Česká republika',
        project1_client: 'Správa železnic',
        // Project 2
        project2_title: 'Design – Art – and – Peace – Factory',
        project2_title_short: 'Škola designu a umění',
        project2_location: 'Cherson, Ukrajina',
        project2_client: 'FA ČVUT, Ateliér Fránek',
        // Project 3
        project3_title: 'Žluté lázně – Hotel a wellness u řeky',
        project3_title_short: 'Žluté lázně – Hotel a lázně',
        project3_location: 'Praha, Podolské nábřeží – Žluté lázně',
        project3_client: 'FA ČVUT, Ateliér Lampa',
        // Project 4
        project4_title: 'The Roof Club – Jachtařský klub Podolí',
        project4_title_short: 'The Roof – Jachtařský klub',
        project4_location: 'Praha – Podolí, Podolský ostrov (Vltava)',
        project4_client: 'FA ČVUT, Ateliér Lampa',
        // Project 5
        project5_title: 'Centrum obce Středokluky',
        project5_title_short: 'Středokluky – Centrum obce',
        project5_location: 'Středokluky, Česká republika',
        project5_client: 'Česká komora architektů',
        // Project 6
        project6_title: 'Expozice ČVUT pro veletrh vysokých škol Gaudeamus',
        project6_title_short: 'Expozice ČVUT',
        project6_location: 'Veletrh vysokých škol Gaudeamus',
        project6_client: 'ČVUT',
        // Project 7
        project7_title: 'Nová pobočka knihovny města Olomouce – Trnkova',
        project7_title_short: 'Knihovna Olomouc – Trnkova',
        project7_location: 'Olomouc – Trnkova, Česká republika',
        project7_client: 'Česká komora architektů',
        // Project 8
        project8_title: 'ZŠ Stará Boleslav',
        project8_title_short: 'ZŠ Stará Boleslav',
        project8_location: 'Stará Boleslav, Česká republika',
        project8_client: 'Město Brandýs nad Labem – Stará Boleslav',
        // Project 9
        project9_title: 'Meziprostory Pražské tržnice — urbanisticko-krajinářský návrh',
        project9_title_short: 'Pražská tržnice – Veřejné prostory',
        project9_location: 'Praha – Holešovice',
        project9_client: 'Hlavní město Praha',
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
        award_context: 'Architektonická soutěž',
        award_context_student: 'Studentská soutěž',
        gallery_additional: 'Další',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'Obsah je chráněn autorským právem. Reprodukce bez souhlasu zakázána.'
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

    // Decode first to normalize any existing encoding, then work with clean path
    let decoded = url;
    try { decoded = decodeURI(url); } catch { /* keep original */ }

    // Some assets live in special folders without generated /picweb counterparts.
    // In that case, keep the original URL to avoid rewriting into a 404.
    const lower = String(decoded).toLowerCase();
    if (lower.includes('/original-cmyk/')) {
        try { return encodeURI(decoded); } catch { return decoded; }
    }

    const withPicweb = (u) =>
        String(u).replace(/(images\/project\d+\/)(?!picweb\/)/i, '$1picweb/');

    const swap = (ext) =>
        withPicweb(decoded).replace(/\.(jpg|jpeg|png)(?=($|[?#]))/i, `.${ext}`);
    
    let result = decoded;
    if (imageSupport.avif) result = swap('avif');
    else if (imageSupport.webp) result = swap('webp');
    
    // Encode the result to handle spaces and special characters
    try { return encodeURI(result); } catch { return result; }
}

function updatePictureSources(pictureEl, fallbackSrc) {
    if (!pictureEl || !fallbackSrc) return;

    const lower = String(fallbackSrc).toLowerCase();
    const withPicweb = (u) =>
        String(u).replace(/(images\/project\d+\/)(?!picweb\/)/i, '$1picweb/');

    const swap = (ext) =>
        withPicweb(fallbackSrc).replace(/\.(jpg|jpeg|png)(?=($|[?#]))/i, `.${ext}`);

    const avif = pictureEl.querySelector('source[type="image/avif"]');
    const webp = pictureEl.querySelector('source[type="image/webp"]');

    // Special-case: avoid pointing <source> elements at non-existent optimized assets.
    if (lower.includes('/original-cmyk/')) {
        if (avif) avif.removeAttribute('srcset');
        if (webp) webp.removeAttribute('srcset');
        return;
    }

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
    const template = `
        <div class="lightbox-scrim" aria-hidden="true"></div>
        <div class="lightbox-shell" role="dialog" aria-modal="true" aria-label="Image viewer">
            <div class="lightbox-header" aria-label="Lightbox controls">
                <div class="lightbox-title"></div>
                <button class="lightbox-close" type="button" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="lightbox-stage">
                <div class="lightbox-hit lightbox-hit--prev" aria-hidden="true"></div>
                <img alt="">
                <div class="lightbox-hit lightbox-hit--next" aria-hidden="true"></div>
            </div>
            <div class="lightbox-footer">
                <div class="lightbox-nav" aria-label="Image navigation">
                    <button class="lightbox-prev" type="button" aria-label="Previous">
                        <span aria-hidden="true">‹</span>
                    </button>
                    <div class="lightbox-counter" aria-live="polite"></div>
                    <button class="lightbox-next" type="button" aria-label="Next">
                        <span aria-hidden="true">›</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = template;
        document.body.appendChild(overlay);
    } else if (!overlay.querySelector('.lightbox-title')) {
        // Upgrade existing markup (avoid stale overlay across navigations)
        overlay.innerHTML = template;
    }

    const shellEl = overlay.querySelector('.lightbox-shell');
    const imgEl = overlay.querySelector('.lightbox-stage img');
    const captionEl = overlay.querySelector('.lightbox-title');
    const counterEl = overlay.querySelector('.lightbox-counter');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    // Gallery state
    let galleryImages = [];
    let currentGalleryIndex = 0;
    let lastActiveEl = null;

    const normalizeLightboxUrl = (url) => {
        if (!url || typeof url !== 'string') return '';
        // Decode first to avoid double-encoding, then re-encode for consistency
        try {
            const decoded = decodeURI(url);
            return encodeURI(decoded);
        } catch { return url; }
    };

    const getCaptionFromLink = (link) => {
        if (!link) return '';
        const fromData = (link.getAttribute('data-caption') || '').trim();
        if (fromData) return fromData;
        const img = link.querySelector('img');
        return (img?.getAttribute('alt') || '').trim();
    };

    const close = () => {
        overlay.classList.remove('is-open');
        document.body.classList.remove('lightbox-open');
        imgEl.removeAttribute('src');
        captionEl.textContent = '';
        if (counterEl) counterEl.textContent = '';
        galleryImages = [];
        currentGalleryIndex = 0;
        // Restore focus for accessibility
        const toFocus = lastActiveEl;
        lastActiveEl = null;
        if (toFocus && typeof toFocus.focus === 'function') {
            try { toFocus.focus({ preventScroll: true }); } catch { toFocus.focus(); }
        }
    };

    const showImage = (index) => {
        if (galleryImages.length === 0) return;
        currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;
        const img = galleryImages[currentGalleryIndex];
        
        imgEl.style.opacity = '0';
        setTimeout(() => {
            imgEl.src = normalizeLightboxUrl(img.src);
            imgEl.alt = img.alt || '';
            const caption = (img.alt || '').trim();
            captionEl.textContent = caption;
            overlay.classList.toggle('has-caption', Boolean(caption));
            if (counterEl) counterEl.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
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
        
        lastActiveEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        overlay.classList.add('is-open');
        document.body.classList.add('lightbox-open');
        showImage(currentGalleryIndex);
        // Focus close button so keyboard users are “in” the dialog
        if (closeBtn && typeof closeBtn.focus === 'function') {
            try { closeBtn.focus({ preventScroll: true }); } catch { closeBtn.focus(); }
        }
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
    const collectGalleryImages = () => {
        const images = [];
        
        // Get all lightbox links on the page
        document.querySelectorAll('a.lightbox-link[href]').forEach(link => {
            const src = normalizeLightboxUrl(preferOptimizedImageUrl(link.getAttribute('href')));
            const alt = getCaptionFromLink(link);
            if (src && !images.some(i => i.src === src)) {
                images.push({ src, alt });
            }
        });
        
        // Also get images from drawings gallery thumbnails
        document.querySelectorAll('.drawings-gallery .drawings-thumb').forEach(thumb => {
            const src = normalizeLightboxUrl(preferOptimizedImageUrl(thumb.dataset.src));
            const alt = (thumb.dataset.caption || thumb.dataset.alt || '').trim();
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
            const clickedSrc = normalizeLightboxUrl(preferOptimizedImageUrl(href));
            const caption = getCaptionFromLink(link);
            
            // Collect all images and find current index
            const allImages = collectGalleryImages();
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

        // Mobile: invisible tap-zones (no buttons on top of the image)
        if (target.closest('.lightbox-hit--prev')) {
            e.preventDefault();
            e.stopPropagation();
            prev();
            return;
        }
        if (target.closest('.lightbox-hit--next')) {
            e.preventDefault();
            e.stopPropagation();
            next();
            return;
        }
        
        // Click on scrim/background closes
        if (target === overlay || target.classList?.contains('lightbox-scrim')) {
            close();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();

        // Basic focus trap inside the lightbox
        if (e.key === 'Tab' && shellEl) {
            const focusables = Array.from(
                shellEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
            ).filter((el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement;
            if (e.shiftKey && active === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        }
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
    // Keep current language accessible to other helpers (homepage title shortening, etc.)
    window.__currentLang = lang;

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

    // Mobile hero: if the hero image is pannable (scrollable), start centered
    centerPannableHeroImages();

    // Mobile gallery preview: allow pan + start centered
    centerPannableGalleryPreviews();

    // Keep the “drawings” galleries as-is (no collapsing)

    // About page: scroll-to-contact button (works with language blocks)
    initAboutContactScroll();

    // About page: "Download PDF" (Print → Save as PDF)
    initAboutPdfDownload();

});

function centerPannableHeroImages() {
    // Only applies to mobile layout where <picture> becomes the scroll container.
    if (!window.matchMedia || !window.matchMedia('(max-width: 768px)').matches) return;

    const pictures = Array.from(document.querySelectorAll('.project-hero > picture'));
    if (!pictures.length) return;

    const centerScroll = (pic) => {
        const max = Math.max(0, (pic.scrollWidth || 0) - (pic.clientWidth || 0));
        if (max <= 0) return;
        // Center the horizontal overflow so the hero "opens" centered.
        pic.scrollLeft = Math.round(max / 2);
    };

    pictures.forEach((pic) => {
        const img = pic.querySelector('img');
        if (!img) return;

        const run = () => {
            // Two RAFs helps after layout settles (fonts/header overlay etc.)
            requestAnimationFrame(() => requestAnimationFrame(() => centerScroll(pic)));
        };

        if (img.complete) run();
        else img.addEventListener('load', run, { once: true });
    });
}

function centerPannableGalleryPreviews() {
    // On phones, some previews are horizontally scrollable (like hero).
    if (!window.matchMedia || !window.matchMedia('(max-width: 768px)').matches) return;

    // Only the visual (top) gallery uses this pannable preview.
    const mains = Array.from(document.querySelectorAll('.drawings-main.drawings-main--visual'));
    if (!mains.length) return;

    const getActiveThumb = (main) => {
        const gallery = main.closest('.drawings-gallery');
        if (!gallery) return null;
        return gallery.querySelector('.drawings-thumb.active');
    };

    const updatePanStateAndCenter = (main, img) => {
        // Per-image override: force "fit" mode (never pannable)
        const activeThumb = getActiveThumb(main);
        if (activeThumb?.dataset?.forceFit === '1') {
            main.classList.remove('is-pannable');
            main.scrollLeft = 0;
            return;
        }

        const cw = main.clientWidth || 0;
        const ch = main.clientHeight || 0;
        const nw = img?.naturalWidth || 0;
        const nh = img?.naturalHeight || 0;
        if (!cw || !ch || !nw || !nh) {
            main.classList.remove('is-pannable');
            main.scrollLeft = 0;
            return;
        }

        const aspect = nw / nh;

        // If we display the image at full container height, its width would be:
        const projectedWidth = ch * aspect;
        const overflowPx = projectedWidth - cw;

        // If the overflow is small, prefer fitting fully (no panning).
        // User preference: only enable pan for clearly wide (panoramic) images.
        const smallOverflowThresholdPx = Math.min(420, Math.max(140, Math.round(cw * 0.30)));
        const pannable = overflowPx > smallOverflowThresholdPx;

        main.classList.toggle('is-pannable', pannable);

        if (!pannable) {
            main.scrollLeft = 0;
            return;
        }

        // Panoramas: start centered, but allow panning to both sides
        const max = Math.max(0, (main.scrollWidth || 0) - (main.clientWidth || 0));
        if (max <= 0) {
            main.scrollLeft = 0;
            return;
        }
        main.scrollLeft = Math.round(max / 2);
    };

    mains.forEach((main) => {
        if (main.dataset.panInit === '1') return;
        main.dataset.panInit = '1';

        const img = main.querySelector('img');
        if (!img) return;

        const run = () => {
            // Two RAFs helps after layout settles (thumb strip, fonts, etc.)
            requestAnimationFrame(() => requestAnimationFrame(() => updatePanStateAndCenter(main, img)));
        };

        if (img.complete) run();
        else img.addEventListener('load', run, { once: true });

        // Re-center when the preview image changes (thumb click / arrows)
        const obs = new MutationObserver(() => {
            // Trigger after the new image actually loads too (important for correct scrollWidth)
            img.addEventListener('load', run, { once: true });
            run();
        });
        obs.observe(img, { attributes: true, attributeFilter: ['src'] });

        // Re-evaluate on resize/orientation changes
        window.addEventListener('resize', run, { passive: true });

        // Expose a per-element refresh hook so other code (auto-crop) can re-evaluate.
        main.__refreshPanState = run;
    });
}

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

    const lang =
        (typeof window !== 'undefined' && window.__currentLang) ||
        (document.querySelector('.lang-link.active')?.getAttribute('data-lang')) ||
        'en';
    const t = translations?.[lang] || translations?.en || {};

    titles.forEach((el) => {
        const key = el.dataset.translate || '';
        const fullFromT = key && t[key] ? String(t[key]) : '';
        const shortKey = key ? `${key}_short` : '';
        const shortFromT = shortKey && t[shortKey] ? String(t[shortKey]) : '';

        const full = (fullFromT || el.dataset.fullTitle || el.textContent || '').trim();
        if (!full) return;

        const display = (shortFromT || full).trim();
        el.dataset.fullTitle = full;
        el.dataset.displayTitle = display;

        // Native tooltip = "full title only on hover"
        el.setAttribute('title', full);

        // Always show the short title on cards (no wrapping, no ellipsis — short strings must fit).
        el.textContent = display;
    });
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
        if (gallery.dataset.drawingsInit === '1') return;
        gallery.dataset.drawingsInit = '1';

        const mainImg = gallery.querySelector('.drawings-main img');
        const mainPicture = mainImg ? mainImg.closest('picture') : null;
        const thumbs = Array.from(gallery.querySelectorAll('.drawings-thumb'));
        const prevBtn = gallery.querySelector('.drawings-prev');
        const nextBtn = gallery.querySelector('.drawings-next');
        const currentNum = gallery.querySelector('#drawingsCurrentNum');
        const totalNum = gallery.querySelector('#drawingsTotalNum');
        const thumbsRow = gallery.querySelector('.drawings-thumbnails');

        if (!mainImg || !thumbs.length) return;

        let currentIndex = thumbs.findIndex(t => t.classList.contains('active'));
        if (currentIndex < 0) currentIndex = 0;

        const total = thumbs.length;
        if (totalNum) totalNum.textContent = total;

        const prefersReducedMotion = () =>
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

        function ensureActiveThumbVisible(thumbEl) {
            if (!thumbEl || !thumbsRow) return;

            const rowRect = thumbsRow.getBoundingClientRect();
            const tRect = thumbEl.getBoundingClientRect();

            // If fully visible, do nothing
            if (tRect.left >= rowRect.left && tRect.right <= rowRect.right) return;

            const target =
                thumbEl.offsetLeft -
                (thumbsRow.clientWidth / 2) +
                (thumbEl.clientWidth / 2);

            const maxScroll = Math.max(0, thumbsRow.scrollWidth - thumbsRow.clientWidth);
            const left = clamp(target, 0, maxScroll);

            try {
                thumbsRow.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
            } catch {
                thumbsRow.scrollLeft = left;
            }
        }

        function applyMainImageTuningFromThumb(thumbEl) {
            if (!thumbEl || !mainImg) return;

            // Optional per-image tuning (used by Project 6 “visualizations” gallery)
            const zoomRaw = thumbEl.dataset.zoom;
            const xRaw = thumbEl.dataset.posX;
            const yRaw = thumbEl.dataset.posY;

            const zoom = zoomRaw ? Number(zoomRaw) : null;
            const posX = xRaw ? Number(xRaw) : 50;
            const posY = yRaw ? Number(yRaw) : 50;

            // For panoramas (pannable), the preview must match the lightbox (no crop/zoom).
            const mainContainer = mainImg.closest('.drawings-main');
            const isPannable = Boolean(mainContainer && mainContainer.classList.contains('is-pannable'));

            if (!isPannable && typeof zoom === 'number' && Number.isFinite(zoom) && zoom > 0) {
                mainImg.style.transform = `scale(${zoom})`;
                mainImg.style.transformOrigin = `${posX}% ${posY}%`;
            } else {
                // Reset to default behavior
                mainImg.style.removeProperty('transform');
                mainImg.style.removeProperty('transform-origin');
            }
        }

        async function computeAutoCropForWhiteMargins(imgEl) {
            // Only for the generated "visualizations" gallery (preview + thumbs)
            if (!gallery.classList.contains('drawings-gallery--visual')) return null;
            if (!imgEl) return null;
            const nw = imgEl.naturalWidth || 0;
            const nh = imgEl.naturalHeight || 0;
            if (!nw || !nh) return null;

            // Never auto-crop wide panoramas — they should be pannable and match the lightbox.
            const mainContainer = imgEl.closest('.drawings-main');
            const cw = mainContainer?.clientWidth || 0;
            const ch = mainContainer?.clientHeight || 0;
            if (cw && ch) {
                const aspect = nw / nh;
                const projectedWidth = ch * aspect;
                const overflowPx = projectedWidth - cw;
                const thresholdPx = Math.min(420, Math.max(140, Math.round(cw * 0.30)));
                if (overflowPx > thresholdPx) return null;
            }

            // Downscale for speed
            const maxDim = 320;
            const scale = Math.min(1, maxDim / Math.max(nw, nh));
            const w = Math.max(1, Math.round(nw * scale));
            const h = Math.max(1, Math.round(nh * scale));

            let canvas;
            try {
                canvas = document.createElement('canvas');
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                if (!ctx) return null;
                ctx.drawImage(imgEl, 0, 0, w, h);
                const { data } = ctx.getImageData(0, 0, w, h);

                // Detect bounding box of non-white (foreground) pixels.
                // This is a heuristic intended for images with large white margins.
                const isFg = (r, g, b, a) => {
                    if (a < 16) return false;
                    // Treat near-white as background
                    return !(r > 250 && g > 250 && b > 250);
                };

                // Quick safety: only attempt auto-crop when the outer border is mostly white.
                // This avoids bad crops on dark/colored backgrounds.
                const isBg = (r, g, b, a) => a >= 16 && r > 250 && g > 250 && b > 250;
                const sampleBorder = () => {
                    const step = Math.max(1, Math.round(Math.min(w, h) / 64));
                    let total = 0;
                    let white = 0;
                    const sample = (x, y) => {
                        const i = (y * w + x) * 4;
                        total += 1;
                        if (isBg(data[i], data[i + 1], data[i + 2], data[i + 3])) white += 1;
                    };
                    for (let x = 0; x < w; x += step) {
                        sample(x, 0);
                        sample(x, h - 1);
                    }
                    for (let y = 0; y < h; y += step) {
                        sample(0, y);
                        sample(w - 1, y);
                    }
                    const ratio = total ? (white / total) : 0;
                    return ratio;
                };

                if (sampleBorder() < 0.90) return null;

                let minX = w, minY = h, maxX = -1, maxY = -1;
                for (let y = 0; y < h; y++) {
                    for (let x = 0; x < w; x++) {
                        const i = (y * w + x) * 4;
                        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
                        if (!isFg(r, g, b, a)) continue;
                        if (x < minX) minX = x;
                        if (y < minY) minY = y;
                        if (x > maxX) maxX = x;
                        if (y > maxY) maxY = y;
                    }
                }

                if (maxX < minX || maxY < minY) return null;

                // Add padding so we don't crop too tight to thin lines.
                const pad = Math.round(Math.min(w, h) * 0.06);
                minX = Math.max(0, minX - pad);
                minY = Math.max(0, minY - pad);
                maxX = Math.min(w - 1, maxX + pad);
                maxY = Math.min(h - 1, maxY + pad);

                const boxW = Math.max(1, maxX - minX + 1);
                const boxH = Math.max(1, maxY - minY + 1);

                // Only auto-crop when margins are clearly huge (avoid chopping drawings)
                const fill = (boxW * boxH) / (w * h);
                if (fill > 0.72) return null;

                // Convert box back to natural coordinates
                const bx = minX / scale;
                const by = minY / scale;
                const bw = boxW / scale;
                const bh = boxH / scale;

                // Compute a safe zoom that trims margins but keeps the content box fully visible.
                // (It effectively "zooms" until the tight box becomes the dominant boundary.)
                const zoom = Math.min(nw / bw, nh / bh);
                // Cap zoom to avoid "pseudo-cropping" meaningful edges
                const z = Math.max(1, Math.min(zoom, 1.55));
                if (z <= 1.01) return null;

                const cx = (bx + bw / 2) / nw * 100;
                const cy = (by + bh / 2) / nh * 100;

                return {
                    zoom: Number(z.toFixed(3)),
                    x: Number(cx.toFixed(2)),
                    y: Number(cy.toFixed(2)),
                };
            } catch {
                return null;
            } finally {
                canvas = null;
            }
        }

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

            // After the new image loads, compute auto-crop (if needed) and apply tuning.
            const onLoad = async () => {
                try {
                    // If there is no manual tuning, try auto-cropping white margins.
                    if (!thumb.dataset.zoom && thumb.dataset.noAutoCrop !== '1') {
                        const tuning = await computeAutoCropForWhiteMargins(mainImg);
                        if (tuning) {
                            thumb.dataset.zoom = String(tuning.zoom);
                            thumb.dataset.posX = String(tuning.x);
                            thumb.dataset.posY = String(tuning.y);
                        }
                    }
                } finally {
                    applyMainImageTuningFromThumb(thumb);
                    // Re-evaluate pan vs fit now that tuning may have changed.
                    const main = mainImg.closest('.drawings-main');
                    if (main && typeof main.__refreshPanState === 'function') main.__refreshPanState();
                }
            };

            mainImg.addEventListener('load', onLoad, { once: true });

            // Update active thumb
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            // Keep the active preview in view (important on mobile)
            ensureActiveThumbVisible(thumb);

            // Optional counter
            if (currentNum) currentNum.textContent = String(index + 1);
        }

        // Initialize from current active thumb
        const activeThumb = thumbs[currentIndex];
        if (activeThumb?.dataset?.src) {
            if (mainPicture) updatePictureSources(mainPicture, activeThumb.dataset.src);
            mainImg.src = activeThumb.dataset.src;
            mainImg.alt = activeThumb.dataset.alt || '';
            // Attempt auto-crop on first paint too
            mainImg.addEventListener('load', async () => {
                try {
                    if (!activeThumb.dataset.zoom && activeThumb.dataset.noAutoCrop !== '1') {
                        const tuning = await computeAutoCropForWhiteMargins(mainImg);
                        if (tuning) {
                            activeThumb.dataset.zoom = String(tuning.zoom);
                            activeThumb.dataset.posX = String(tuning.x);
                            activeThumb.dataset.posY = String(tuning.y);
                        }
                    }
                } finally {
                    applyMainImageTuningFromThumb(activeThumb);
                    const main = mainImg.closest('.drawings-main');
                    if (main && typeof main.__refreshPanState === 'function') main.__refreshPanState();
                }
            }, { once: true });
            // Make sure the active preview is visible on load
            requestAnimationFrame(() => ensureActiveThumbVisible(activeThumb));
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

    // Only build the JS gallery on tablet/phone. Desktop should keep the original layout.
    const mq = window.matchMedia ? window.matchMedia('(max-width: 1024px)') : null;
    if (!mq || !mq.matches) return;

    // Check if mobile gallery already exists
    if (document.querySelector('.mobile-gallery')) return;
    
    // Collect all images from the vertical gallery
    const allImages = [];

    const getProjectKey = () => {
        const cls = Array.from(document.body.classList).find(c => /^project-\d+$/.test(c));
        return cls || 'project';
    };

    const getTuningForSrc = (src) => {
        const projectKey = getProjectKey();
        const tuningMaps = {
            // Example (we can add more rules per-project later)
            'project-6': new Map([
                // Scheme / diagrams (often lots of white margins)
                ['Scheme1_page-0001.jpg', { zoom: 1.12, x: 50, y: 50 }],

                // Axo / top views
                ['kub.effectsResult1.png', { zoom: 1.14, x: 50, y: 50 }],
                ['kub_2.effectsResult.png', { zoom: 1.12, x: 50, y: 50 }],

                // Facade views: force-fit (never panoramas) + slightly smaller in the frame
                ['pohled1.effectsResult.png', { forceFit: true, noAutoCrop: true, zoom: 1.296, x: 50, y: 50 }],
                ['pohled2.effectsResult.png', { forceFit: true, noAutoCrop: true, zoom: 1.296, x: 50, y: 50 }],
            ]),
            'project-5': new Map([
                // Situace + detail plans should never be panoramas (always fully visible)
                ['situace s legendou.jpg', { forceFit: true, noAutoCrop: true }],
                ['situace_hiscentrum_podrobne.png', { forceFit: true, noAutoCrop: true }],
                ['situace_spolcentrm_podrobne.png', { forceFit: true, noAutoCrop: true }],
                ['situace_servisy_podrobne.png', { forceFit: true, noAutoCrop: true }],
            ]),
            'project-8': new Map([
                // Axonometry should be fully visible (no panorama swipe)
                ['axonometrie-1.jpg', { forceFit: true, noAutoCrop: true }],
            ]),
        };

        const map = tuningMaps[projectKey];
        if (!map || !src) return null;
        const clean = String(src).split(/[?#]/)[0] || '';
        const file = clean.split('/').pop() || '';

        // Support optimized extensions (avif/webp) by matching by stem too.
        const stem = file.replace(/\.(avif|webp|jpe?g|png)$/i, '');
        let decodedFile = file;
        let decodedStem = stem;
        try {
            decodedFile = decodeURIComponent(file);
            decodedStem = decodeURIComponent(stem);
        } catch {
            // keep original
        }
        const candidates = [
            file,
            stem,
            decodedFile,
            decodedStem,
            `${stem}.png`,
            `${stem}.jpg`,
            `${stem}.jpeg`,
            `${stem}.webp`,
            `${stem}.avif`,
            `${decodedStem}.png`,
            `${decodedStem}.jpg`,
            `${decodedStem}.jpeg`,
            `${decodedStem}.webp`,
            `${decodedStem}.avif`,
        ];

        for (const key of candidates) {
            const v = map.get(key);
            if (v) return v;
        }

        return null;
    };
    
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

    // Project-specific ordering
    // Project 5: show renderings first, then situace + details (plans)
    if (document.body.classList.contains('project-5')) {
        const isSituace = (item) => {
            const src = (item?.src || '').toLowerCase();
            const alt = (item?.alt || '').toLowerCase();
            return src.includes('situace') || alt.includes('site plan') || alt.includes('situace');
        };

        const renders = [];
        const plans = [];
        allImages.forEach((it) => (isSituace(it) ? plans : renders).push(it));
        allImages.length = 0;
        allImages.push(...renders, ...plans);
    }
    
    // Build a thumbnails gallery (same UX as the "drawings" gallery)
    const mobileGallery = document.createElement('div');
    mobileGallery.className = 'mobile-gallery';

    const g = document.createElement('div');
    g.className = 'drawings-gallery drawings-gallery--visual';

    const main = document.createElement('div');
    main.className = 'drawings-main drawings-main--visual';
    const mainImg = document.createElement('img');
    mainImg.src = allImages[0].src;
    mainImg.alt = allImages[0].alt || '';
    mainImg.loading = 'lazy';
    main.appendChild(mainImg);

    const nav = document.createElement('div');
    nav.className = 'drawings-nav drawings-nav--visual';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'drawings-arrow drawings-prev';
    prevBtn.type = 'button';
    prevBtn.setAttribute('aria-label', 'Previous');
    prevBtn.textContent = '‹';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'drawings-arrow drawings-next';
    nextBtn.type = 'button';
    nextBtn.setAttribute('aria-label', 'Next');
    nextBtn.textContent = '›';

    const thumbs = document.createElement('div');
    thumbs.className = 'drawings-thumbnails';

    allImages.forEach((img, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = `drawings-thumb${i === 0 ? ' active' : ''}`;
        b.dataset.src = img.src;
        b.dataset.alt = img.alt || '';

        const tuning = getTuningForSrc(img.src);
        if (tuning) {
            if (tuning.forceFit) b.dataset.forceFit = '1';
            if (tuning.noAutoCrop) b.dataset.noAutoCrop = '1';
            if (tuning.zoom) b.dataset.zoom = String(tuning.zoom);
            if (typeof tuning.x === 'number') b.dataset.posX = String(tuning.x);
            if (typeof tuning.y === 'number') b.dataset.posY = String(tuning.y);
        }

        const tImg = document.createElement('img');
        tImg.src = img.src;
        tImg.alt = '';
        tImg.loading = 'lazy';
        b.appendChild(tImg);

        thumbs.appendChild(b);
    });

    nav.appendChild(prevBtn);
    nav.appendChild(thumbs);
    nav.appendChild(nextBtn);

    g.appendChild(main);
    g.appendChild(nav);
    mobileGallery.appendChild(g);
    
    // Insert after vertical gallery
    verticalGallery.parentNode.insertBefore(mobileGallery, verticalGallery.nextSibling);

    // Mark page as JS-enhanced so CSS can swap galleries safely
    document.body.classList.add('has-mobile-gallery');

    // Initialize behavior using the same handler as drawings galleries
    initDrawingsGallery();
}

// (Removed) initDrawingsAccordion — it hid important images and confused users on mobile.


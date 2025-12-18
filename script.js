// Переводы для трёх языков
const translations = {
    'en': {
        about: 'ABOUT ME',
        projects: 'PROJECTS',
        legal: 'LEGAL',
        legal_title: 'Legal & Copyright',
        legal_subtitle: 'Portfolio usage terms and rights',
        all: 'All',
        school: 'School',
        competitions: 'Competitions',
        collaboration: 'Collaboration',
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
        project3_title: 'Yellow Shelter – Hotel & Spa',
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
        type_label: 'Type',
        conversion: 'Conversion',
        authors_label: 'Authors',
        collaboration_label: 'Collaboration',
        visualization_label: 'Visualization',
        gallery_visualizations: 'Visualizations',
        gallery_drawings: 'Drawings',
        drawings_label: 'Drawings',
        client_label: 'Client',
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
        all: 'Все',
        school: 'Учебные',
        competitions: 'Конкурсы',
        collaboration: 'Сотрудничество',
        category_label: 'Категория',
        year_label: 'Год',
        location_label: 'Локация',
        prev: '← Назад',
        next: 'Далее →',
        all_projects: 'Все проекты',
        // Project 1
        project1_title: 'Терминал ВСМ Прага-восток',
        // Project 2
        project2_title: 'Школа дизайна и искусства',
        // Project 3
        project3_title: 'Жёлтое Убежище – Отель & Бани',
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
        type_label: 'Тип',
        conversion: 'Конверсия',
        authors_label: 'Авторы',
        collaboration_label: 'Сотрудничество',
        visualization_label: 'Визуализация',
        gallery_visualizations: 'Визуализации',
        gallery_drawings: 'Чертежи',
        drawings_label: 'Чертежи',
        client_label: 'Клиент',
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
        all: 'Vše',
        school: 'Školní',
        competitions: 'Soutěže',
        collaboration: 'Spolupráce',
        category_label: 'Kategorie',
        year_label: 'Rok',
        location_label: 'Místo',
        prev: '← Předchozí',
        next: 'Další →',
        all_projects: 'Všechny projekty',
        // Project 1
        project1_title: 'Terminál VRT Praha-východ',
        // Project 2
        project2_title: 'Škola designu a umění',
        // Project 3
        project3_title: 'Žlutý Úkryt – Hotel & Lázně',
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
        type_label: 'Typ',
        conversion: 'Konverze',
        authors_label: 'Autoři',
        collaboration_label: 'Spolupráce',
        visualization_label: 'Vizualizace',
        gallery_visualizations: 'Vizualizace',
        gallery_drawings: 'Výkresy',
        drawings_label: 'Výkresy',
        client_label: 'Klient',
        // scroll_down removed (scroll indicator disabled)
        // Footer
        no_copy: 'Veškerý obsah je chráněn autorským právem. Reprodukce bez souhlasu není povolena.'
    }
};

function initLightbox() {
    const links = Array.from(document.querySelectorAll('a.lightbox-link[href]'));
    if (!links.length) return;

    let overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <button class="lightbox-close" type="button" aria-label="Close">×</button>
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

    const close = () => {
        overlay.classList.remove('is-open');
        document.body.classList.remove('lightbox-open');
        imgEl.removeAttribute('src');
        captionEl.textContent = '';
    };

    const open = (href, caption) => {
        imgEl.src = href;
        imgEl.alt = caption || '';
        captionEl.textContent = caption || '';
        overlay.classList.add('is-open');
        document.body.classList.add('lightbox-open');
    };

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const caption = link.querySelector('img')?.getAttribute('alt') || '';
            if (href) open(href, caption);
        });
    });

    closeBtn?.addEventListener('click', close);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
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

// Обработчики для фильтров
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Добавляем активный класс нажатой кнопке
        btn.classList.add('active');
        
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
    localStorage.setItem('selectedLanguage', lang);
    
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
            btn.textContent = translations[lang][key];
        }
    });
}

// Добавляем обработчики для языковых ссылок
document.querySelectorAll('.lang-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// При загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Авто-год в копирайтах
    const year = String(new Date().getFullYear());
    document.querySelectorAll('.js-year').forEach(el => {
        el.textContent = year;
    });

    // Загружаем сохраненный язык (по умолчанию английский)
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLanguage);
    
    // Загружаем сохраненный режим (светлый/темный)
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }

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
});

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

        // Click on main image opens lightbox
        const mainContainer = gallery.querySelector('.drawings-main');
        if (mainContainer) {
            mainContainer.addEventListener('click', () => {
                const overlay = document.querySelector('.lightbox-overlay');
                if (!overlay) return;
                const imgEl = overlay.querySelector('.lightbox-content img');
                const captionEl = overlay.querySelector('.lightbox-caption');
                if (!imgEl || !captionEl) return;

                imgEl.src = mainImg.src;
                imgEl.alt = mainImg.alt;
                captionEl.textContent = mainImg.alt;
                overlay.classList.add('is-open');
                document.body.classList.add('lightbox-open');
            });
        }
    });
}

// Přepínání nočního režimu
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Uložit do localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
}

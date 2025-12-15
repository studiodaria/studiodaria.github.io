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
        authors_label: 'Authors',
        visualization_label: 'Visualization',
        gallery_visualizations: 'Visualizations',
        gallery_drawings: 'Drawings',
        client_label: 'Client',
        scroll_down: 'Scroll',
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
        authors_label: 'Авторы',
        visualization_label: 'Визуализация',
        gallery_visualizations: 'Визуализации',
        gallery_drawings: 'Чертежи',
        client_label: 'Клиент',
        scroll_down: 'Листать',
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
        authors_label: 'Autoři',
        visualization_label: 'Vizualizace',
        gallery_visualizations: 'Vizualizace',
        gallery_drawings: 'Výkresy',
        client_label: 'Klient',
        scroll_down: 'Scrollovat',
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
    
    // Drawings gallery initialization
    initDrawingsGallery();
});

// Drawings Gallery (MVRDV style)
function initDrawingsGallery() {
    const gallery = document.querySelector('.drawings-gallery');
    if (!gallery) return;
    
    const mainImg = document.getElementById('drawingsMainImg');
    const thumbs = gallery.querySelectorAll('.drawings-thumb');
    const prevBtn = gallery.querySelector('.drawings-prev');
    const nextBtn = gallery.querySelector('.drawings-next');
    const currentNum = document.getElementById('drawingsCurrentNum');
    const totalNum = document.getElementById('drawingsTotalNum');
    
    if (!mainImg || !thumbs.length) return;
    
    let currentIndex = 0;
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
        
        // Update counter
        if (currentNum) currentNum.textContent = index + 1;
    }
    
    // Thumb clicks
    thumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => updateGallery(i));
    });
    
    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + total) % total;
            updateGallery(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % total;
            updateGallery(newIndex);
        });
    }
    
    // Click on main image opens lightbox
    const mainContainer = gallery.querySelector('.drawings-main');
    if (mainContainer) {
        mainContainer.addEventListener('click', () => {
            const overlay = document.querySelector('.lightbox-overlay');
            if (overlay) {
                const imgEl = overlay.querySelector('.lightbox-content img');
                const captionEl = overlay.querySelector('.lightbox-caption');
                imgEl.src = mainImg.src;
                imgEl.alt = mainImg.alt;
                captionEl.textContent = mainImg.alt;
                overlay.classList.add('is-open');
                document.body.classList.add('lightbox-open');
            }
        });
    }
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

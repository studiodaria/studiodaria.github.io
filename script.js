// Переводы для трёх языков
const translations = {
    'en': {
        about: 'ABOUT ME',
        projects: 'PROJECTS',
        all: 'All',
        school: 'School',
        competitions: 'Competitions',
        collaboration: 'Collaboration',
        category_label: 'Category',
        year_label: 'Year',
        location_label: 'Location'
    },
    'ru': {
        about: 'ОБО МНЕ',
        projects: 'ПРОЕКТЫ',
        all: 'Все',
        school: 'Учебные',
        competitions: 'Конкурсы',
        collaboration: 'Сотрудничество',
        category_label: 'Категория',
        year_label: 'Год',
        location_label: 'Локация'
    },
    'cz': {
        about: 'O MNĚ',
        projects: 'PROJEKTY',
        all: 'Vše',
        school: 'Školní',
        competitions: 'Soutěže',
        collaboration: 'Spolupráce',
        category_label: 'Kategorie',
        year_label: 'Rok',
        location_label: 'Místo'
    }
};

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
    // Загружаем сохраненный язык (по умолчанию английский)
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLanguage);
    
    // Загружаем сохраненный режим (светлый/темный)
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

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

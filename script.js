// --- МАТРИЦА СЛУЖЕБНЫХ ДАННЫХ ДЛЯ ЭКРАНА КОМПЕТЕНЦИЙ ---
const matrixData = [
    {
        req: "Опыт от 1 года в продуктовом маркетинге, продакт-менеджменту или развитию продуктов.",
        resp: "9 лет глубокого практического опыта в маркетинге, интернет-маркетинге, контекстной и таргетированной рекламе.",
        tags: ["9 лет опыта", "Маркетинг", "Tаргет & Контекст", "Лидогенерация", "b2b", "b2c"]
    },
    {
        req: "Понимание того, как продукт развивается и выводится на рынок.",
        resp: "Есть чёткое продуктовое понимание процессов. Огромная прикладная насмотренность за счёт работы с 70+ различными коммерческими нишами в контекстной рекламе",
        tags: ["Продуктовый цикл", "Go-to-Market", "70+ Ниш бизнеса", "Аналитика"]
    },
    {
        req: "Умение анализировать рынок, конкурентов и потребности клиентов.",
        resp: "Выстраиваю стратегию на базе исследований аудитории. Понимание современных фреймворков JTBD, CJM и CustDev-интервью.",
        tags: ["JTBD", "CJM", "CustDev", "Маркетинговые исследования"]
    },
    {
        req: "Опыт построения маркетинговых воронок и продвижения продуктов.",
        resp: "Уверенно проектирую классические воронки продаж и интегрирую передовые методологии growth-маркетинга (В частности, пиратскую метрику AAARRR).",
        tags: ["Воронки продаж", "Growth Marketing", "Метрики AAARRR", "Конверсии", "CPL", "LTV", "ROI"]
    },
    {
        req: "Понимание инструментов продаж и продвижения: каналы, воронки, аналитика.",
        resp: "Отличное практическое владение инструментарием продвижения: контекст, таргет, SEO, Email-маркетинг, ABM-стратегии, Tripwire и лид-магниты.",
        tags: ["SEO", "Email маркетинг", "ABM", "Tripwire", "Лид-магниты", "WOW-marketing"]
    }
];

// --- ОБНОВЛЕННЫЙ МАССИВ МЕСТ РАБОТЫ: УФАНЕТ БЕЗ СПИСКА ---
const placeholderJobs = [
    { 
        name: "АО «Уфанет»", 
        role: "Product Marketing Manager / Growth Hacker", 
        period: "2026 — Будущее", 
        // Флаг isUfanet подскажет скрипту, что разметку списка выводить не нужно
        isUfanet: true,
        htmlContent: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 24px; text-align: center; width: 100%; height: 100%; padding: 20px 0;">
                <p style="font-size: 1.4rem; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">Давайте начнем!</p>
                <img src="https://giphy.com" alt="Ура, Уфанет!" style="width: 100%; max-width: 420px; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: 0 15px 35px rgba(52, 215, 75, 0.15);">
            </div>
        `
    },
    { 
        name: "Продуктовая IT-Компания Альфа", 
        role: "Senior Product Marketer", 
        period: "2024 — По настоящее время", 
        bullets: ["Управление процессами Go-to-Market для флагманских SaaS-сервисов.", "Проведение исследований рынка, CustDev интервью и проектирование Customer Journey Map.", "Оптимизация сквозных воронок продвижения и масштабирование юнит-экономики продукта."] 
    },
    { 
        name: "Digital Агентство Сигма", 
        role: "Product Marketing Manager", 
        period: "2022 — 2023", 
        bullets: ["Разработка комплексных маркетинговых стратегий для 15+ коммерческих ниш бизнеса.", "Построение и сквозное тестирование маркетинговых автоворонок привлечения трафика.", "Управление кросс-функциональной командой из 6 специалистов (дизайн, SEO, контекст)."] 
    },
    { 
        name: "Технологический Стартап Вега", 
        role: "Growth Hacker / Маркетолог", 
        period: "2020 — 2022", 
        bullets: ["Быстрое прототипирование и тестирование гипотез роста по фреймворку пиратских метрик AAARRR.", "Настройка контекстной, таргетированной рекламы и веб-аналитики с нуля.", "Внедрение лид-магнитов и автоцепочек трипвайеров, увеличивших конверсию на 40%."] 
    },
    { 
        name: "Федеральный Ритейл Омега", 
        role: "Интернет-маркетолог", 
        period: "2018 — 2020", 
        bullets: ["Управление рекламными бюджетами, запуск контекстной рекламы в Яндекс.Директ и Google Ads.", "Комплексный конкурентный анализ рынка и сегментация клиентской базы данных.", "Развитие каналов Email-маркетинга и SEO-оптимизации веб-платформы."] 
    },
    { 
        name: "Digital Группа Дельта", 
        role: "Специалист по контекстной рекламе", 
        period: "2015 — 2018", 
        bullets: ["Сбор семантических ядер, кластеризация запросов и ведение 40+ аккаунтов контекстной рекламы.", "Анализирование эффективности посадочных страниц и проведение сплит-тестов.", "Подготовка регулярных аналитических отчетов по стоимости лида (CPL) и CAC."] 
    }
];

let currentSlide = 0;
let currentStep = 0;
let viewedSteps = new Set();
window.addEventListener('DOMContentLoaded', () => {
    
    // Элементы слайдера
    const slides = document.querySelectorAll('.slide-section');
    const menuButtons = document.querySelectorAll('.menu-btn');
    const startTrigger = document.getElementById('next-slide-trigger');

    // Элементы терминала компетенций (Экран 2)
    const tabsContainer = document.getElementById('steps-tabs-container');
    const reqDisplay = document.getElementById('step-requirement-display');
    const respDisplay = document.getElementById('step-response-display');
    const tagsDisplay = document.getElementById('step-tags-display');
    const barFill = document.getElementById('step-bar-fill');
    const footerStatus = document.getElementById('stepper-footer-status');
    const counterText = document.getElementById('step-counter-text');

    // Элементы экрана истории и модального окна (Экран 3)
    const ctaBtn = document.getElementById('cta-collaboration-btn');
    const contactsModal = document.getElementById('contacts-modal');
    const closeContactsBtn = document.getElementById('close-contacts-btn');

    // Элементы таймлайна опыта работы (Экран 4)
    const timelineContainer = document.getElementById('workplace-timeline-list');
    const jobPeriod = document.getElementById('workplace-detail-period');
    const jobName = document.getElementById('workplace-detail-name');
    const jobRole = document.getElementById('workplace-detail-role');
    const jobBullets = document.getElementById('workplace-detail-bullets');

    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ГЛАВНЫХ ЭКРАНОВ ---
    function changeSlide(index) {
        if (!slides.length || index < 0 || index >= slides.length) return;
        
        slides[currentSlide].classList.remove('active');
        if (menuButtons[currentSlide]) menuButtons[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        if (menuButtons[currentSlide]) menuButtons[currentSlide].classList.add('active');

        if (currentSlide === 1) {
            renderStep(currentStep);
        }
    }

    // --- ЛОГИКА ТЕРМИНАЛА КОМПЕТЕНЦИЙ (ЭКРАН 2) ---
    function initTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = '';
        matrixData.forEach((_, idx) => {
            const btn = document.createElement('button');
            btn.className = 'tab-btn';
            btn.id = `tab-btn-${idx}`;
            btn.innerHTML = `<span>Требование</span> <strong>0${idx + 1}</strong>`;
            btn.addEventListener('click', () => renderStep(idx));
            tabsContainer.appendChild(btn);
        });
    }

    function renderStep(stepIndex) {
        currentStep = stepIndex;
        viewedSteps.add(currentStep);

        matrixData.forEach((_, idx) => {
            const btn = document.getElementById(`tab-btn-${idx}`);
            if (!btn) return;
            btn.className = 'tab-btn';
            if (idx === currentStep) btn.classList.add('active');
            else if (viewedSteps.has(idx)) btn.classList.add('completed');
        });

        if (reqDisplay) reqDisplay.textContent = matrixData[currentStep].req;
        if (respDisplay) respDisplay.textContent = matrixData[currentStep].resp;

        if (tagsDisplay) {
            tagsDisplay.innerHTML = '';
            matrixData[currentStep].tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = tag;
                tagsDisplay.appendChild(span);
            });
        }

        if (barFill) {
            barFill.style.width = '0%';
            setTimeout(() => { barFill.style.width = '100%'; }, 50);
        }

        if (viewedSteps.size === matrixData.length) {
            if (footerStatus) footerStatus.className = 'stepper-footer-controls success-state';
            if (counterText) counterText.innerHTML = `✓ Анализ завершен: Идеальное соответствие вакансии на 100%!`;
        } else {
            if (footerStatus) footerStatus.className = 'stepper-footer-controls';
            if (counterText) counterText.textContent = `Изучено требований вакансии: ${viewedSteps.size} из ${matrixData.length}`;
        }
    }
    // --- ЛОГИКА ХРОНОЛОГИИ МЕСТ РАБОТЫ (ЭКРАН 4) ---
    function renderJobDetail(idx) {
        const job = placeholderJobs[idx];
        if (!job) return;

        document.querySelectorAll('.timeline-item-btn').forEach((b, i) => {
            b.classList.toggle('active', i === idx);
        });

        if (jobPeriod) jobPeriod.textContent = job.period;
        if (jobName) jobName.textContent = job.name;
        if (jobRole) jobRole.textContent = job.role;
        
        if (jobBullets) {
            jobBullets.innerHTML = '';
            
            // Если выбран Уфанет — рендерим красивый кастомный блок БЕЗ списков и буллитов
            if (job.isUfanet) {
                jobBullets.innerHTML = job.htmlContent;
            } else {
                // Для остальных компаний-рыб рендерим стандартный маркированный список
                const ulTitle = document.createElement('p');
                ulTitle.className = 'stack-title';
                ulTitle.textContent = 'Ключевые обязанности и достижения:';
                jobBullets.appendChild(ulTitle);

                const ul = document.createElement('ul');
                ul.className = 'workplace-bullets-list';
                
                job.bullets.forEach(bullet => {
                    const li = document.createElement('li');
                    li.textContent = bullet;
                    ul.appendChild(li);
                });
                jobBullets.appendChild(ul);
            }
        }
    }

    function initWorkplaceTimeline() {
        if (!timelineContainer) return;
        timelineContainer.innerHTML = '';
        
        placeholderJobs.forEach((job, idx) => {
            const btn = document.createElement('button');
            btn.className = 'timeline-item-btn';
            if (idx === 0) btn.classList.add('active');
            
            btn.innerHTML = `
                <span class="timeline-date">${job.period}</span>
                <span class="timeline-comp-name">${job.name}</span>
            `;
            
            btn.addEventListener('click', () => renderJobDetail(idx));
            timelineContainer.appendChild(btn);
        });
        
        renderJobDetail(0);
    }

    // --- ОБРАБОТЧИКИ КЛИКОВ НАВИГАЦИИ ---
    menuButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetBtn = e.target.closest('.menu-btn');
            if (targetBtn) changeSlide(parseInt(targetBtn.dataset.target, 10));
        });
    });

    if (startTrigger) {
        startTrigger.addEventListener('click', () => changeSlide(1));
    }

    // УПРАВЛЕНИЕ МОДАЛКОЙ КОНТАКТОВ
    if (ctaBtn && contactsModal) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactsModal.style.display = 'flex';
        });
    }

    if (closeContactsBtn && contactsModal) {
        closeContactsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactsModal.style.display = 'none';
        });
    }

    // СТАРТОВАЯ ИНИЦИАЛИЗАЦИЯ ВСЕХ БЛОКОВ ПРИЛОЖЕНИЯ
    initTabs();
    renderStep(0);
    initWorkplaceTimeline();
});

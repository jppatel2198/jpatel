// Shared scripts for every page of the portfolio.
// Loaded at the end of <body>, so the DOM is already parsed.

(function () {
    // ---------- Theme (light / dark) ----------
    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-mode', isLight);
        const label = document.querySelector('.light-mode-toggle .toggle-text');
        if (label) label.textContent = isLight ? 'DARK MODE' : 'LIGHT MODE';
    }

    let savedTheme = null;
    try { savedTheme = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }
    applyTheme(savedTheme === 'light' ? 'light' : 'dark');

    window.toggleLightMode = function () {
        const next = document.body.classList.contains('light-mode') ? 'dark' : 'light';
        applyTheme(next);
        try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    };

    // ---------- Accent color theme ----------
    const ACCENTS = ['green', 'blue', 'red', 'purple', 'yellow'];

    function applyAccent(accent) {
        if (ACCENTS.indexOf(accent) === -1) accent = 'green';
        document.body.dataset.accent = accent;
        document.querySelectorAll('.accent-swatch').forEach(function (btn) {
            btn.setAttribute('aria-pressed', btn.dataset.accent === accent ? 'true' : 'false');
        });
    }

    let savedAccent = null;
    try { savedAccent = localStorage.getItem('accent'); } catch (e) { /* storage blocked */ }
    applyAccent(savedAccent);

    document.querySelectorAll('.accent-swatch').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyAccent(btn.dataset.accent);
            try { localStorage.setItem('accent', btn.dataset.accent); } catch (e) { /* ignore */ }
        });
    });

    // ---------- Mobile menu ----------
    window.toggleMobileMenu = function () {
        document.querySelector('.nav-links').classList.toggle('active');
        document.querySelector('.hamburger').classList.toggle('active');
        document.body.classList.toggle('menu-open');
    };

    window.closeMobileMenu = function () {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
        document.body.classList.remove('menu-open');
    };

    // ---------- Back to top ----------
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            backToTop.classList.toggle('visible', window.pageYOffset > 300);
        }, { passive: true });
    }

    // ---------- Gauges (home page only) ----------
    let gaugesAnimated = false;
    function animateGauges() {
        if (gaugesAnimated) return;
        gaugesAnimated = true;
        document.querySelectorAll('.gauge-value[data-target]').forEach(function (el) {
            const target = parseFloat(el.dataset.target);
            const decimals = parseInt(el.dataset.decimals || '0', 10);
            const suffix = el.dataset.suffix || '';
            let frame = 0;
            const frames = 60;
            const timer = setInterval(function () {
                frame++;
                const value = frame >= frames ? target : (target * frame) / frames;
                el.textContent = value.toFixed(decimals) + suffix;
                if (frame >= frames) clearInterval(timer);
            }, 16);
        });
    }

    // ---------- Scroll reveal ----------
    const selector = '.glass-tile, .timeline-item, .section-header, .fade-in, .fade-in-left, .fade-in-right, .scale-in';
    const elements = document.querySelectorAll(selector);

    function revealAll() {
        elements.forEach(function (el) { el.classList.add('visible'); });
        if (document.querySelector('.hex-pattern')) animateGauges();
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('hex-pattern')) animateGauges();
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        elements.forEach(function (el) { observer.observe(el); });
    } else {
        revealAll();
    }

    // ---------- Footer year ----------
    document.querySelectorAll('.current-year').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.nav-links');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        // Close the mobile menu after choosing a link.
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navbar.classList.remove('active'));
        });
    }

    // Keep the footer year current.
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Highlight the nav link for the section currently on screen.
    const sections = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navAnchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(section => observer.observe(section));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu-item.has-submenu');

    if (hamburger && menu) {
        // Hamburger toggle
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from immediately closing
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                menuItems.forEach(item => item.classList.remove('open'));
            }
        });
    }

    // Submenu toggle for mobile
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    e.stopPropagation();
                    item.classList.toggle('open');
                }
            });
        }
    });
});

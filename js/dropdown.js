document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu-item');
    const submenu = menu.querySelector('.submenu');
    const landskabMenuItem = submenu.querySelector('.submenu-item:nth-child(1)');
    const vandMenuItem = landskabMenuItem.querySelector('.nested-submenu .submenu-item:first-child');
    const nestedSubmenu = vandMenuItem.querySelector('.nested-submenu');

    let isOverVand = false;
    let isMenuOpen = false;

    menu.addEventListener('mouseover', function () {
        submenu.style.display = 'block';
        isMenuOpen = true;
    });

    menu.addEventListener('mouseleave', function () {
        if (!isMenuOpen) {
            submenu.style.display = 'none';
        }
    });

    submenu.addEventListener('mouseover', function (e) {
        const target = e.target;
        if (target && target.classList.contains('submenu-item')) {
            if (target.textContent == 'Landskab') {
                nestedSubmenu.style.display = 'none';
                isOverVand = false;
            }
        }
    });

    vandMenuItem.addEventListener('mouseover', function () {
        nestedSubmenu.style.display = 'block';
        isOverVand = true;
    });

    vandMenuItem.addEventListener('mouseleave', function () {
        nestedSubmenu.style.display = 'none';
    });

    submenu.addEventListener('mouseleave', function () {
        submenu.style.display = 'none';
        isMenuOpen = false;
    });
});

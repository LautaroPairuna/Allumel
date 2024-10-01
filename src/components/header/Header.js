document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');

    let isMenuVisible = false;

    function onToggleMenu(e) {
      if (!isMenuVisible) {
        navLinks.classList.remove('translate-y-[-100%]', 'opacity-0');
        navLinks.classList.add('translate-y-0', 'opacity-100');
        e.name = "close-outline"; 
      } else {
        navLinks.classList.remove('translate-y-0', 'opacity-100');
        navLinks.classList.add('translate-y-[-100%]', 'opacity-0');
        e.name = "menu-outline"; 
      }
      isMenuVisible = !isMenuVisible; 
    }

    menuIcon.addEventListener('click', function() {
      onToggleMenu(menuIcon);
    });
});
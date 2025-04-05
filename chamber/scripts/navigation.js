document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuButton = document.querySelector(".menu-toggle");
    const navContainer = document.querySelector(".nav-links");

    // Loop through each link and add the active class based on the current page
    navLinks.forEach(link => {
        if (window.location.pathname === link.getAttribute('href')) {
            link.classList.add('active');
        }
    });

    // Toggle the menu when the hamburger icon is clicked
    menuButton.addEventListener("click", function() {
        navContainer.classList.toggle("nav-active");
    });
});
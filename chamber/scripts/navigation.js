// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each link and add the active class based on the current page
navLinks.forEach(link => {
    if (window.location.pathname === link.getAttribute('href')) {
        link.classList.add('active');
    }
});

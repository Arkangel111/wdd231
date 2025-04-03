
document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.querySelector("#currentyear");
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }

    const lastModifiedElement = document.querySelector("#lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", function () {
        menu.classList.toggle("open");
        hamburgerButton.textContent = menu.classList.contains("open") ? "✖" : "☰";
    });
});
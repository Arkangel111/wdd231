document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    console.log("Current Year Element: ", currentYearElement);
    console.log("Last Modified Element: ", lastModifiedElement);

    const today = new Date();
    if (currentYearElement) {
        currentYearElement.textContent = today.getFullYear();
    }

    const lastModified = document.lastModified;
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last Modified: " + lastModified;
    }
});
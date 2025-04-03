document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });

    // Load Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;

            // Ensure the elements exist before modifying them
            const currentYearElement = document.querySelector("#currentyear");
            const lastModifiedElement = document.querySelector("#lastModified");

            const today = new Date();
            if (currentYearElement) {
                currentYearElement.textContent = today.getFullYear();
            }

            const lastModified = document.lastModified;
            if (lastModifiedElement) {
                lastModifiedElement.textContent = "Last Modified: " + lastModified;
            }
        });
});
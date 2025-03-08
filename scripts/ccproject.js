document.addEventListener("DOMContentLoaded", function () {
    // Update current year and last modified date
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
        lastModifiedElement.textContent = "Last Modification: " + lastModified;
    }

    // Load header and footer
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
});

// Function to load external HTML
function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}
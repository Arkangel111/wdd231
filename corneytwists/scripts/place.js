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

// Static values for temperature (in °F) and wind speed (in mph)
const temperature = 42; // Example: static temperature value in °F
const windSpeed = 10; // Example: static wind speed value in mph

// Function to calculate wind chill factor
function calculateWindChill(temp, wind) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temp * Math.pow(wind, 0.16)
    ).toFixed(1); // Return the result rounded to 1 decimal place
}

// Function to check conditions and display the wind chill factor
function displayWindChill() {
    const windChillElement = document.getElementById("windChill"); // Get the HTML element where the wind chill will be displayed

    // Check if the conditions are met for wind chill calculation
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temperature, windSpeed); // Call the wind chill function
        windChillElement.textContent = `${windChill} °F`; // Display wind chill in the element
    } else {
        windChillElement.textContent = "N/A"; // Display "N/A" if conditions are not met
    }
}

// Call displayWindChill when the page loads
window.onload = displayWindChill;
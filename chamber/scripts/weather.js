// Select HTML elements
const myTown = document.querySelector('#town');
const myTemperature = document.querySelector('#current-temp');
const myGraphic = document.querySelector('#weather-icon');
const myDescription = document.querySelector('#description');
const captionDesc = document.querySelector('figcaption'); // If using <figcaption>

const myKey = "9e990d3fcdad92d662c495a5cc359c1b";
const myLat = 49.75;
const myLong = 6.63;
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        console.log("Fetching weather data...");
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log("API Response:", data); // Debugging
            displayResults(data);
        } else {
            throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

function displayResults(data) {
    myTown.textContent = data.name || "Unknown Location"; // Handle missing data
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;

    // Get weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', desc);
    myDescription.textContent = desc;

    // If using a <figcaption>, update it
    if (captionDesc) captionDesc.textContent = desc;
}

// Call the API fetch function
apiFetch();

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function fetchForecast() {
    try {
        console.log("Fetching 3-day forecast...");
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log("Forecast API Response:", data); // Debugging
            displayForecast(data);
        } else {
            throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('#forecast');
    forecastContainer.innerHTML = ""; // Clear previous content

    const dailyForecasts = {};

    // OpenWeather provides forecasts in 3-hour intervals; extract daily data
    data.list.forEach(item => {
        const date = item.dt_txt.split(" ")[0]; // Extract date (YYYY-MM-DD)
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
                temp: item.main.temp,
                icon: item.weather[0].icon,
                description: item.weather[0].description
            };
        }
    });

    // Select only the next 3 days
    const forecastEntries = Object.entries(dailyForecasts).slice(0, 3);
    
    forecastEntries.forEach(([date, forecast]) => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('forecast-day');
        
        dayElement.innerHTML = `
            <h3>${new Date(date).toLocaleDateString("en-US", { weekday: 'long' })}</h3>
            <img src="https://openweathermap.org/img/w/${forecast.icon}.png" alt="${forecast.description}">
            <p>${forecast.temp}&deg;F</p>
            <p>${forecast.description}</p>
        `;
        
        forecastContainer.appendChild(dayElement);
    });
}

// Call forecast function
fetchForecast();
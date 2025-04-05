document.addEventListener("DOMContentLoaded", function () {
    fetch("data/places.json")
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("cards");
  
        data.forEach(place => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          card.innerHTML = `
            <h2>${place.title}</h2>
            <figure>
              <img src="${place.image}" alt="${place.title}">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(error => console.error("Error loading JSON:", error));
  });
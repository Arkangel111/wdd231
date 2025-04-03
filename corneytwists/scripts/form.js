document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded and DOM ready!");

    // --- HANDLE REVIEW COUNT ---
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

    const reviewCountDisplay = document.getElementById('review-count-display');
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = `Number of reviews: ${reviewCount}`;
    } else {
        console.warn("Element #review-count-display not found!");
    }

    const reviewForm = document.querySelector('form'); // Select the form properly
    if (reviewForm) {
        reviewForm.addEventListener('submit', function () {
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);

            if (reviewCountDisplay) {
                reviewCountDisplay.textContent = `Number of reviews: ${reviewCount}`;
            }
        });
    } else {
        console.warn("Form not found!");
    }

    // --- HANDLE PRODUCT DROPDOWN ---
    const productSelect = document.getElementById('product');
    if (!productSelect) {
        console.error("Element #product not found!");
        return;
    }

    const products = [
        { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
        { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
    ];

    console.log("Populating product select...");
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    console.log("Product select populated.");
});

let isGridView = false;  // Default is list view

async function fetchMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to fetch member data");

        const members = await response.json();
        displayMembers(members);  // Display members initially when fetched

    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displayMembers(members) {
    const container = document.getElementById("membersList");
    container.innerHTML = ""; // Clear existing content

    members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member-card");

        memberDiv.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} Logo">
            <h2>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(memberDiv);
    });

    // Update the view layout based on the current view type
    updateLayout();
}

function getMembershipLevel(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    }
}

// Update the layout based on the current view type
function updateLayout() {
    const container = document.getElementById("membersList");

    if (isGridView) {
        container.classList.add("grid-view");
        container.classList.remove("list-view");
    } else {
        container.classList.add("list-view");
        container.classList.remove("grid-view");
    }

    // Update the button text
    const button = document.getElementById("toggleViewButton");
    button.textContent = isGridView ? "Switch to List View" : "Switch to Grid View";
}

// Toggle between grid and list view
document.getElementById("toggleViewButton").addEventListener("click", () => {
    isGridView = !isGridView;  // Toggle the view state
    updateLayout();  // Update the layout without re-fetching members
});

// Load members when the page is loaded
document.addEventListener("DOMContentLoaded", fetchMembers);
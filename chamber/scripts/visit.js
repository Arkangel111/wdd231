document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();
    
    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem("lastVisit");
    
    // Get the sidebar element where the message will be displayed
    const sidebarContent = document.getElementById("sidebar-content");
  
    if (lastVisit === null) {
      // First visit
      sidebarContent.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
      // Calculate the number of days since the last visit
      const lastVisitDate = new Date(lastVisit);
      const timeDiff = currentDate - lastVisitDate;
      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert time difference to days
  
      if (daysDiff < 1) {
        // Less than a day since last visit
        sidebarContent.innerHTML = "Back so soon! Awesome!";
      } else {
        // More than a day since last visit
        const dayText = daysDiff === 1 ? "day" : "days";
        sidebarContent.innerHTML = `You last visited ${daysDiff} ${dayText} ago.`;
      }
    }
  
    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", currentDate.toString());
  });
  
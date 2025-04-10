document.addEventListener("DOMContentLoaded", async function () {
    const header = await fetch("header.html").then(res => res.text());
    document.getElementById("header-container").innerHTML = header;
  
    const footer = await fetch("footer.html").then(res => res.text());
    document.getElementById("footer-container").innerHTML = footer;
  
    try {
      let eventsData;
      const cached = localStorage.getItem("eventsData");
  
      if (cached) {
        eventsData = JSON.parse(cached);
      } else {
        const response = await fetch("events.json");
        eventsData = await response.json();
        localStorage.setItem("eventsData", JSON.stringify(eventsData));
      }
  
      const calendarEvents = eventsData.map(event => ({
        title: event.title,
        start: event.date,
        extendedProps: {
          location: event.location,
          type: event.type,
          description: event.description
        },
        color: event.type === "private" ? "#d9534f" : "#5cb85c"
      }));
  
      // Safe view handling
      const validViews = ["dayGridMonth", "timeGridWeek", "listWeek"];
      let savedView = localStorage.getItem("calendarView");
      if (!validViews.includes(savedView)) {
        savedView = "dayGridMonth";
      }
  
      const calendarEl = document.getElementById("calendar");
      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: savedView,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek"
        },
        events: calendarEvents,
        eventClick: function(info) {
          const props = info.event.extendedProps;
          document.getElementById("modal-title").textContent = info.event.title;
          document.getElementById("modal-date").textContent = info.event.start.toDateString();
          document.getElementById("modal-location").textContent = props.location;
          document.getElementById("modal-type").textContent = props.type;
          document.getElementById("modal-description").textContent = props.description;
          document.getElementById("event-modal").showModal();
        },
        datesSet: function(info) {
          localStorage.setItem("calendarView", info.view.type);
        }
      });
  
      calendar.render();
  
    } catch (error) {
      console.error("Error loading calendar data:", error);
    }
  });
  
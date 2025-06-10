// let h2s = document.querySelectorAll("h2");
// for (let i = 0; i < h2s.length; i++) {
//   h2s[i].style.color = "green";
// }

let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

 //digital clock
  function updateDateTime() {
      const now = new Date();

      // Format time (HH:MM:SS AM/PM)
      const optionsTime = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeString = now.toLocaleTimeString([], optionsTime);

      // Format day and date (e.g., Tuesday, June 10, 2025)
      const optionsDate = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const dateString = now.toLocaleDateString([], optionsDate);

      // Update HTML content
      document.getElementById('currentTime').textContent = timeString;
      document.getElementById('currentDate').textContent = dateString;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

 
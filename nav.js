window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.querySelector(".content");

  // Hide the loading screen
  loadingScreen.style.display = "none";

  // Show the content
  content.style.display = "block";
});

const navMobile = document.querySelector(".navMobile");
const navMobileListHolder = navMobile.querySelector(".navMobileListHolder");
document.querySelector(".hamburger").addEventListener("click", function () {
  navMobile.style.display = "flex";
  navMobile.classList.remove("animateCloseNavMobile");

  navMobile.classList.add("animateOpenNavMobile");
  navMobileListHolder.classList.remove("animateCloseNavMobileHolder");
  navMobileListHolder.classList.add("animateOpenNavMobileHolder");
});

navMobile.addEventListener("click", function (e) {
  if (e.target.classList.contains("navMobile")) {
    navMobile.classList.remove("animateOpenNavMobile");
    navMobile.classList.add("animateCloseNavMobile");
    navMobileListHolder.classList.remove("animateOpenNavMobileHolder");
    navMobileListHolder.classList.add("animateCloseNavMobileHolder");
    navMobile.addEventListener("animationend", function (event) {
      if (event.animationName === "animateCloseNavMobile") {
        navMobile.style.display = "none";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navMobileListItem a");

  // Function to set the active link based on current URL
  function setActiveLink() {
    const currentURL = window.location.href;
    navLinks.forEach((link) => {
      if (currentURL.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Set the active link on page load
  setActiveLink();

  // Add click event to set the active link on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
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
// Nav hamburgerburger selections
const burgerMenu = document.getElementById("burger-menu");
const navigation = document.querySelector(".navigation");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
if (burgerMenu) {
  burgerMenu.addEventListener("click", () => {
    navigation.classList.toggle("show");
  });
}

// Close hamburger menu when a link is clicked
if (navLink) {
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      navigation.classList.remove("show");
    })
  );
}

// Scroll to top functionality
if (scrollUp) {
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  // Rest of your code
}

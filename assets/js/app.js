// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

document.addEventListener("DOMContentLoaded", init);

function init() {
    //Event listener for dismiss button
    document.getElementById("dismiss-button").addEventListener("click", function () {
        document.getElementById("error-message").style.display = "none";
    });

    // dog fact button
    document.getElementById("dog-fact-button").addEventListener("click", function () {
        fetch("https://dog-api.kinduff.com/api/facts")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const dogFactParagrapgh = document.createElement("p");
                dogFactParagrapgh.textContent = data.facts[0];
                document.getElementById("dog-fact").appendChild(dogFactParagrapgh);
            })
            .catch(error => {
                console.log(error);
                const errorMessage = document.getElementById("error-message");
                errorMessage.textContent =
                    "an error occured while fetching dog facts. Please try again later";
                errorMessage.style.display = "block";
            });
    });

}


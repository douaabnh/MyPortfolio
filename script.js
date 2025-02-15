let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle menu visibility
});

function sendEmail() {
    window.location.href = "mailto:douaa.benhamida8@gmail.com?subject=Subject%20Here&body=Hello,%20I%20would%20like%20to%20contact%20you.";
}


let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle menu visibility
});

function sendEmail() {
    window.location.href = "mailto:douaa.benhamida8@gmail.com?subject=Subject%20Here&body=Hello,%20I%20would%20like%20to%20contact%20you.";
}

function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        let subject = encodeURIComponent("Message from " + name);
        let body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message);

        window.location.href = `mailto:douaa.benhamida8@gmail.com?subject=${subject}&body=${body}`;
    } else {
        alert("Please fill out all fields!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveSection() {
        let scrollPosition = window.scrollY + 100; // Adjust offset if needed

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
});



const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
    });
});

document.getElementById("contactForm").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("status").textContent =
            "Thank you, " + name + "! Message submitted successfully.";

        this.reset();
    }
);

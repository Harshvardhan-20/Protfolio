// Toggle Mobile Navigation Menu and Close on Outside Click or Link Click
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");
    const navLinkItems = document.querySelectorAll("#nav-links a");

    if (burgerMenu && navLinks) {
        // Toggle menu visibility
        burgerMenu.addEventListener("click", () => {
            navLinks.classList.toggle("nav-active");
            burgerMenu.classList.toggle("toggle");
        });

        // Close menu when clicking on a navigation link
        navLinkItems.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("nav-active");
                burgerMenu.classList.remove("toggle");
            });
        });

        // Close menu when clicking outside the menu
        document.addEventListener("click", (e) => {
            if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove("nav-active");
                burgerMenu.classList.remove("toggle");
            }
        });
    } else {
        console.error("Burger menu or nav links not found in the DOM.");
    }
});

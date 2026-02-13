document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("#primary-nav");

    if (!header || !toggle || !nav) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            header.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector(".nav");
    const icon = document.querySelector('.menu-button');

    icon.onclick = () => {
        menu.classList.toggle("open");
    }
});
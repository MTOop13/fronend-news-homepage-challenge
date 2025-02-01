const navButton = document.querySelector(".nav-button");
const navContainer = document.querySelector(".nav-container");

navButton.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    navButton.toggleAttribute('data-visible');
})
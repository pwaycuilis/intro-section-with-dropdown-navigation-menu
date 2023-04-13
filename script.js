const nav = document.querySelector('nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('body');



navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === "false") {
        nav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
        body.setAttribute('data-dark', "true");

    } else if (visibility === "true") {
        nav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
        body.setAttribute('data-dark', "false");

    }
})



document.addEventListener("click", e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown

    if (isDropDownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle('active');
    }



})


let menu__bar = document.querySelector(".ri-menu-fill");
let navlinks = document.querySelector(".navlinks");

menu__bar.addEventListener("click", () => {

    navlinks.classList.toggle("open");
    if (navlinks.classList.contains("open")) {
        menu__bar.classList.remove("ri-menu-fill");
        menu__bar.classList.add("ri-close-fill");
    } else if (!navlinks.classList.contains("open")) {
        menu__bar.classList.add("ri-menu-fill");
    }

})
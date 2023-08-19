const smallScreenMenu = document.querySelector("#sm-menu");
const menuOpenBtn = document.querySelector("#open-button-container");
const menuCloseBtn = document.querySelector("#close-button-container");

menuOpenBtn.addEventListener("click", () => { 
    smallScreenMenu.classList.toggle("sm-menu-appear");
    menuOpenBtn.classList.toggle("sm-menu-btn-hide");
    menuCloseBtn.classList.toggle("sm-menu-btn-appear");
})

menuCloseBtn.addEventListener("click", () => { 
    smallScreenMenu.classList.toggle("sm-menu-appear");
    menuOpenBtn.classList.toggle("sm-menu-btn-hide");
    menuCloseBtn.classList.toggle("sm-menu-btn-appear");
})

const navBar = document.querySelector("#nav");
const menu = document.querySelector("#menu"); // The container that contains the overlay and menu 
const menuOpenBtn = document.querySelector("#menu-open"); 
const menuCloseBtn = document.querySelector("#menu-close"); 


menuOpenBtn.addEventListener("click", () => { 
    menu.classList.toggle("menu-appear");
})

menuCloseBtn.addEventListener("click", () => { 
    menu.classList.toggle("menu-appear");
})

/* To make sure the navbar stays when you scroll and disappear when you scroll down */

let prevScrollpos = window.scrollY; 
window.onscroll = () => { 
    let currentScrollpos = window.scrollY; 
    if (prevScrollpos > currentScrollpos ) {
        navBar.style.transition = "0.3s ease-in-out"; 
        navBar.style.top = "0"
        
    } else { 
        navBar.style.transition = "0.3s ease-in-out";
        navBar.style.top = "-80px"
        
    }
    prevScrollpos = currentScrollpos;
}

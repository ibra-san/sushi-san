
const navBar = document.querySelector("#nav");
const overlay = document.querySelector("#overlay")
const menu = document.querySelector("#menu"); // The container that contains the overlay and menu 
const menuItems = document.querySelector("#menu-items")
const menuOpenBtn = document.querySelector("#menu-open"); 
const menuCloseBtn = document.querySelector("#menu-close"); 


menuOpenBtn.addEventListener("click", () => { 
    menu.classList.add("menu-appear");
})

menuCloseBtn.addEventListener("click", () => { 
    menu.classList.remove("menu-appear");
})

overlay.addEventListener("click", ()=> { 
    menu.classList.remove("menu-appear");
} )

menuItems.addEventListener("click", ()=> { 
    menu.classList.remove("menu-appear");
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


const navBar = document.querySelector("#nav");
const overlay = document.querySelector("#overlay")
const menu = document.querySelector("#menu"); // The container that contains the overlay and menu 
const menuItems = document.querySelector("#menu-items")
const menuOpenBtn = document.querySelector("#menu-open"); 
const menuCloseBtn = document.querySelector("#menu-close"); 

// I am selecting the elements below in order to make sure the label disappears when there is text in the input field
const selectBoxr = document.querySelector("#rlocation"); // Restaurant location selection menu targeted
const labelR = document.querySelector("#rlocationlabel");
const selectBoxs = document.querySelector("#rseatingtype"); // Seating type selection menu targeted  
const labelS = document.querySelector("#rseatingtypeLabel");

const nofpeople = document.querySelector("#nofpeople")


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


/* Hiding placeholder if user data is there */
selectBoxr.addEventListener("change", () => { 
    if(selectBoxr.value !== "") { 
        labelR.classList.add('selectedRS')
    } else { 
        labelR.classList.remove('selectedRS')
    }
})

selectBoxs.addEventListener("change", () => { 
    if(selectBoxs.value !== "") { 
        labelS.classList.add('selectedRS')
    } else { 
        labelS.classList.remove('selectedRS')
    }
})






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



// JS for datepicker section -----------

const datePickerElement = document.querySelector("#date-picker"); // Date picker container
const selectedDateElement = document.querySelector("#selected-date"); // The selected date container
const datesElement = document.querySelector("#dates"); // The calender container
const monthElementContainer = document.querySelector("#month"); // The month container
const monthElement = document.querySelector(".mth"); // The month text in the selected area
const prevMonth = document.querySelector(".prev-mth"); // Previous month arrow
const nextMonth = document.querySelector(".next-mth"); // Previous month arrow

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

let date = new Date(); // Gives you todays date
let day = date.getDate(); 
let month = date.getMonth(); 
let year = date.getFullYear(); 

let selectedDate = date; 
let selectedDay = day;
let selectedMonth = month; 
let selectedYear = year; 

 console.log(day);
monthElement.textContent = months[month]+ " "+ year;
selectedDateElement.textContent = formateDate(date);

// EVENT LISTENERS 
datePickerElement.addEventListener("click", toggleDatePicker); 
nextMonth.addEventListener("click", goToNextMonth); 
prevMonth.addEventListener("click", goToPrevMonth); 

// FUNCTIONS 

function goToNextMonth() { 
    month++; 
    if (month > 11) { 
        month = 0; 
        year++;
    }
    monthElement.textContent = months[month]+ " " + year;
}

function goToPrevMonth () {
    month--; 
    if (month < 0) { 
            month = 11; 
            year--;
    } 
    monthElement.textContent = months[month]+ " " + year;  
    }

function toggleDatePicker(e) { 
    if(!checkEventPathForID(e.composedPath())) { 
        datesElement.classList.toggle("hidden"); 
        datePickerElement.classList.toggle("hover:bg-slate-200");
    }
   
}


// HELPER FUNCTIONS
function checkEventPathForID (path) {
    
    for(let i=0; i < path.length; i++){
        if(path[i].id==='dates') { 
            return true;
        }
    }

    return false;
}


function formateDate (d) { 
    let day = d.getDate(); 
    
    if(day < 10) { 
        day="0"+day;
    }

    let month = d.getMonth()+1; 

    if (month < 10) { 
        month = "0"+ month
    }
    let year = d.getFullYear(); 

    return (day+" / " + month + " / " + year)
}



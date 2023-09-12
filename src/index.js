
const navBar = document.querySelector("#nav");
const overlay = document.querySelector("#overlay")
const menu = document.querySelector("#menu"); // The container that contains the overlay and menu 
const menuItems = document.querySelector("#menu-items")
const menuOpenBtn = document.querySelector("#menu-open"); 
const menuCloseBtn = document.querySelector("#menu-close"); 


/*Form section */

// Datepicker section -----------
const datePickerElement = document.querySelector("#date-picker"); // Date picker container
const selectedDateElement = document.querySelector("#selected-date"); // The selected date container
const datesElement = document.querySelector("#dates"); // The calender container
const monthElementContainer = document.querySelector("#month"); // The month container
const monthElement = document.querySelector(".mth"); // The month text in the selected area
const prevMonth = document.querySelector(".prev-mth"); // Previous month arrow
const nextMonth = document.querySelector(".next-mth"); // Previous month arrow
const daysElement = document.querySelector("#days"); // This is the days container  

const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email"); 

const rlocationInput = document.querySelector("#rlocation");

const rseatingtypeInput = document.querySelector("#rseatingtype"); 

const pnumberInput = document.querySelector("#pnumber"); 
const pnumberValid = document.querySelector("#pnumber-valid");

const nofpeopleInput = document.querySelector("#nofpeople");
const nofpeopleValid = document.querySelector("#nofpeople-valid");

// Form Submission and value collection: 
const bookBtn = document.querySelector("#book-btn"); 

const reserveRLocation = document.querySelector(".card-title-location"); 
const reserveName = document.querySelector(".card-name"); 
const reserveEmail = document.querySelector(".email");
const reserveLocation = document.querySelector(".rlocation"); 
const reserveSeating = document.querySelector(".rseating"); 
const reserveNoPeople = document.querySelector(".noPeople"); 
const reservedate = document.querySelector(".datetime");

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





// JS for datepicker section -----------




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

monthElement.textContent = months[month]+ " "+ year;
selectedDateElement.textContent = formateDate(date);


renderDate(month);



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

    renderDate(month);
}

function goToPrevMonth () {
    month--; 
    if (month < 0) { 
            month = 11; 
            year--;
    } 
    monthElement.textContent = months[month]+ " " + year;  

    renderDate(month);
}

function toggleDatePicker(e) { 
    if(!checkEventPathForID(e.composedPath())) { 
        datesElement.classList.toggle("hidden"); 
        datePickerElement.classList.toggle("hover:bg-slate-200");
    }
   
}


function populateDate (numberOfDays) { 
    daysElement.innerHTML = "";

    todayDate = new Date();
    todayDay = todayDate.getDate(); 
    todayMonth = todayDate.getMonth(); 
    todayYear = todayDate.getFullYear(); 

    for(let i=0; i < numberOfDays; i++) { 
        const dayElement = document.createElement("div"); 
        dayElement.classList.add('day');

        if(todayDay === i+1 && todayMonth === month && todayYear === year) { 
            dayElement.classList.add('todayDate')
        }

        if (year < todayYear) { 
            dayElement.classList.add("text-slate-200");
        } else if (year === todayYear) { 
            if(month < todayMonth) { 
                dayElement.classList.add("text-slate-200");
            } else if (month === todayMonth) { 
                if((i+1) < todayDay) { 
                    dayElement.classList.add("text-slate-200");
                }
            }
        }

        if(selectedDay === i+1 && selectedMonth === month && selectedYear === year) { 
            dayElement.classList.add('selectedDay')
        }

        
        dayElement.addEventListener("click", function () { 

            if (year === todayYear) { 
                if(month >= todayMonth) { 
                    if((i+1)>= todayDay) { 
                        selectedDate = new Date(year, month, (i+1)); 
                        selectedDay = (i + 1);
                        selectedMonth  = month; 
                        selectedYear = year;
                        selectedDateElement.textContent = formateDate(selectedDate);
                        selectedDateElement.dataset.value = selectedDate;
                        populateDate(numberOfDays);
                    }
                }
            } else if (year > todayYear) { 

                        selectedDate = new Date(year, month, (i+1)); 
                        selectedDay = (i + 1);
                        selectedMonth  = month; 
                        selectedYear = year;
                        selectedDateElement.textContent = formateDate(selectedDate);
                        selectedDateElement.dataset.value = selectedDate;
                        populateDate(numberOfDays);
            }
            
        })

        dayElement.textContent=i+1;
        daysElement.appendChild(dayElement);
    }

}

function renderDate (month) { 

    if ((month)%2 === 0 ) { 
        let numberOfDays = 30; 
        populateDate(numberOfDays);
    } else { 
        if(month === 1) { 
            let numberOfDays = 28; 
            populateDate(numberOfDays);
        } else { 
            let numberOfDays = 31; 
            populateDate(numberOfDays);
        }
       
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


/* Form validation */


bookBtn.addEventListener("click", function(e) { 
    e.preventDefault();
    phoneNumberValidation();
    numberOfPeopleValidation();
    collectingValues();
    
} )



// phone Number Validation functions and helper functions

function phoneNumberValidation() { 
    let phoneValidation = /^\d{10}$/; 

    if(pnumberInput.value.match(phoneValidation)) { 
        pnumberValid.textContent="";
        console.log("valid phone number");
        return pnumberInput.value;
    }else if (pnumberInput.value === "") { 
        pnumberValid.textContent="Please enter a PH number";
        return false;
    } else { 
        pnumberValid.textContent = "Please enter a valid Number";
        return false;
    }
}

// Number of people validation

function numberOfPeopleValidation() { 

    if(nofpeopleInput.value > 100) { 
        nofpeopleValid.textContent="Max No. Of People = 100"; 
        return false; 
    } else if (nofpeopleInput.value < 0 ) { 
        nofpeopleInput.value = 0;
        nofpeopleValid.textContent="Enter a No. between 0 & 100";
        return false; 
    } else 
        nofpeopleValid.textContent='';
        return nofpeopleInput.value;

}

function collectingValues() { 

    let name = nameInput.value; 
    let email = emailInput.value;
    let phoneNo = phoneNumberValidation(); 
    let restaurantL = rlocationInput.value;
    let seatingType = rseatingtypeInput.value;
    let numberPeople = numberOfPeopleValidation(); 
   

    reserveRLocation.textContent=restaurantL;
    reserveName.textContent=name;
    reserveLocation.textContent=restaurantL; 
    reserveEmail.textContent=email;
    reserveSeating.textContent=seatingType; 
    reserveNoPeople.textContent=numberPeople;
    reservedate.textContent=selectedDateElement.dataset.value;


}

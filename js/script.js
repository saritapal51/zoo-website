

// *****************  login form ****************************

let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})


//############################  payment js #########################

// DOM elements
let tColorA = document.getElementById('tColorA'),
    tColorB = document.getElementById('tColorB'),
    tColorC = document.getElementById('tColorC'),
    iconA = document.querySelector('.fa-credit-card'),
    iconB = document.querySelector('.fa-building-columns'),
    iconC = document.querySelector('.fa-wallet'),
    cDetails = document.querySelector('.card-details');

// Function to highlight "Payment by card"
function doFun() {
    tColorA.style.color = "greenyellow";
    tColorB.style.color = "#444";
    tColorC.style.color = "#444";
    iconA.style.color = "greenyellow";
    iconB.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cDetails.style.display = "block"; // Show card details
}

// Function to highlight "Internet banks"
function doFunA() {
    tColorA.style.color = "#444";
    tColorB.style.color = "greenyellow";
    tColorC.style.color = "#444";
    iconA.style.color = "#aaa";
    iconB.style.color = "greenyellow";
    iconC.style.color = "#aaa";
    cDetails.style.display = "none"; // Hide card details
}

// Function to highlight "Apple/Google Pay"
function doFunB() {
    tColorA.style.color = "#444";
    tColorB.style.color = "#444";
    tColorC.style.color = "greenyellow";
    iconA.style.color = "#aaa";
    iconB.style.color = "#aaa";
    iconC.style.color = "greenyellow";
    cDetails.style.display = "none"; // Hide card details
}

// Format card number
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function (e) {
    let num = cNumber.value.replace(/\s/g, ''); // Remove spaces
    let newValue = '';

    for (let i = 0; i < num.length; i++) {
        if (i % 4 === 0 && i > 0) newValue += ' '; // Add a space every 4 characters
        newValue += num[i];
    }
    cNumber.value = newValue; // Update the input with formatted value

    let ccNum = document.getElementById('c-number');
    ccNum.style.border = num.length < 16 ? "1px solid red" : "1px solid greenyellow";
});

// Format expiry date
let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function (e) {
    let newInput = eDate.value;

    // Automatically add slash after MM
    if (e.which !== 8) {
        let numChars = e.target.value.length;
        if (numChars === 2) {
            let thisVal = e.target.value;
            thisVal += '/';
            e.target.value = thisVal;
        }
    }

    eDate.style.border = newInput.length < 5 ? "1px solid red" : "1px solid greenyellow";
});

// Validate CVV
let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function () {
    let elen = cvv.value;
    let cvvBox = document.getElementById('cvv-box');
    cvvBox.style.border = elen.length < 3 ? "1px solid red" : "1px solid greenyellow";
});

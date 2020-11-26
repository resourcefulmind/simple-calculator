// we need to have something that holds a previous number when we do an operation with a new number, say a running total something like where we start off
let runningTotal = 0;

// Next we should have sort of like a buffer, what is on the screen at any given time
let buffer = "0";

// then we need to keep the previous operation in another store, sort of if we add before and we want to subtract now
let previousOperator;

// next we grab the screen 
const screen = document.querySelector('.screen');

//starting with what happens when a user clicks one of the buttons
function buttonClick(value) {
    console.log(value);
}

// creates a separate function for handling numbers and symbols below

function handleSymbol() {}
function handleNumber() {}

// the init function will be the function that gets called once and sets everything up
function init () {
// now we set up our event listeners
document.querySelector('.calc-buttons')
.addEventListener('click', function(event) {
    // refer to the code for the button click on line 14
    buttonClick(event.target.innerText);
})
}

// then call init
init();
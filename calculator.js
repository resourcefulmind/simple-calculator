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
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value);
    }
    // this makes the numbers display on the screen when they are clicked
    screen.innerText = buffer;
}

// creates a separate function for handling numbers and symbols below and this is really all you have to do to get numbers working correctly

function handleSymbol(symbol) {
    // Let's first handle the part that let's us clear numbers
    if (symbol === 'C') {
        buffer = '0';
        runningTotal = 0;
    }
}
function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer = buffer + numberString;
    }
}

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
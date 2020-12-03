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
    };
    // this makes the numbers display on the screen when they are clicked
    screen.innerText = buffer;
};

// creates a separate function for handling numbers and symbols below and this is really all you have to do to get numbers working correctly

function handleSymbol(symbol) {
// we can use switch statements instead since we have multiple if elses
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '&plus;':
        case '&minus;':
        case '&times;':
        case '&divide;':
            handleMath(symbol); 
            // the above handleMath(symbol) was created separately so we do not have to do all the math in here
            break;
    };
};

function handleMath(symbol) {
    if (buffer === '0') {
        // no need to do anything, just return
        return;
    };

    const intBuffer = parseInt(buffer);
    // turning the string into a number with the above

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    };

    previousOperator = symbol;

    buffer = '0';
};

function flushOperation(intBuffer) {
    if (previousOperator === '&plus;') {
        runningTotal += intBuffer;
    } else if (previousOperator === '&minus;') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '&times;') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    };
};

// flush operation is going to be the thing to actually do the math

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer = buffer + numberString;
    };
};

// the init function will be the function that gets called once and sets everything up
function init () {
// now we set up our event listeners
document.querySelector('.calc-buttons')
.addEventListener('click', function(event) {
    // refer to the code for the button click on line 14
    buttonClick(event.target.innerText);
});
};

// then call init
init();
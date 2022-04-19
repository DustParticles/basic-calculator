let displayCurrentValue = "";
let currentValue = 0;
let pressedHowManyTimes = 0;
//do calculations
//store 
function add(a, b) {
    
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function clear() {
    displayElement.innerHTML = 0;
    currentValue = 0;

}

//determine what symbol then operate
function operate(symbol, a, b) {
    switch (`${symbol}`) {
        case "+":
            return add(a, b)
            break;

        case "-":
            return subtract(a, b)
            break;

        case "*":
            return multiply(a, b)
            break;  

        case "/":
            return divide(a, b)
            break; 

        }
}

//select display element and number buttons
let displayElement = document.querySelector(".display");
let numberButtons = document.querySelectorAll(".buttonNumbers");

//listen to when is clicked
numberButtons.forEach(buttons => {
    buttons.addEventListener("click", changeDisplay);
});

document.querySelector(".clear").addEventListener("click", clear);


//use another to store calculations
function changeDisplay(num) {
    //check howmanytimespressed to remove default val 0
    if (pressedHowManyTimes == 0) displayElement.innerText = "";
    pressedHowManyTimes++
    
    //get the number that was pressed
    //use a variable and add numbers together in string
    displayCurrentValue += num.explicitOriginalTarget.dataset.numbers;
    
    //then change the display contents
    displayElement.innerText = displayCurrentValue;
}

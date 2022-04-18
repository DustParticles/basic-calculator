let currentValue = 0;
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

/* Create a new function operate that takes an operator and 2 numbers 
and then calls one of the above functions on the numbers. */

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

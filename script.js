let operator = '+';
let number1 = '';
let number2 = '';
let result = '';
let newNumber = false;
let displayValue = "";
let maxLength = 15;

let border = document.querySelector('#border');
border.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case '0':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "0";
            number1 = displayValue;
            newNumber = false;
            break;
        case '1':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "1";
            number1 = displayValue;
            newNumber = false;
            break;
        case '2':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "2";
            number1 = displayValue;
            newNumber = false;        
            break;
        case '3':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "3";
            number1 = displayValue;
            newNumber = false;
            break;
        case '4':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "4";
            number1 = displayValue;
            newNumber = false;
            break;
        case '5':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "5";
            number1 = displayValue;
            newNumber = false;
            break;
        case '6':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "6";
            number1 = displayValue;
            newNumber = false;
            break;
        case '7':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "7";
            number1 = displayValue;
            newNumber = false;
            break;
        case '8':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "8";
            number1 = displayValue;
            newNumber = false;
            break;
        case '9':
            if(newNumber === true) displayValue = '0';
            displayValue = displayValue + "9";
            number1 = displayValue;
            newNumber = false;
            break;
        case '+':
            displayValue = operate(operator, result, number1);
            number1 = '';
            result = displayValue;
            newNumber = true;
            operator = '+';
            break;
        case '-':
            displayValue = operate(operator, result, number1);
            number1 = '';
            result = displayValue;
            newNumber = true;
            operator = '-';
            break;
        case '*':
            displayValue = operate(operator, result, number1);
            number1 = '';
            result = displayValue;
            newNumber = true;
            operator = '*';
            break;
        case '/':
            displayValue = operate(operator, result, number1);
            number1 = '';
            result = displayValue;
            newNumber = true;
            operator = '/';
            break;
        case '=':
            if(number1 !== '')
            {
                displayValue = operate(operator, result, number1);
                result = displayValue;
                number1 = '';
            } 
            operator = '+';
            newNumber = false;
            break;
        case 'C':
            displayValue = '0'; 
            number1 = '';
            number2 = '';
            result = '';
            newNumber = true;
            operator = '+';
            break;
        case '+/-':
            displayValue = String(displayValue * (-1));
            break;
        case '%':
            displayValue = String(displayValue / 100);
            break;
        case '.':
            if(!displayValue.includes('.')) displayValue = displayValue + ".";
            break;
    }
    //Prevents Number to be to big to display
    if(displayValue.length > maxLength) displayValue = parseFloat(displayValue).toPrecision(8);

    //Prevents a non decimal number to start with 0
    if(displayValue.charAt(0) == '0' && displayValue.charAt(1) != '.' && displayValue.length > 1) displayValue = displayValue.slice(1);

    document.getElementById("displayedNumber").innerHTML = displayValue;
});

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0) return 'You stupid..!!'
    return num1 / num2;
}

function operate(operationType, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operationType === '+') return String(add(num1, num2));
    if(operationType === '-') return String(subtract(num1, num2));
    if(operationType === '*') return String(multiply(num1, num2));
    if(operationType === '/') return String(divide(num1, num2));
}
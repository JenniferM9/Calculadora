let currentInput = '0';
let savedInput = '0'; // Variable para almacenar el primer operando
let currentOperation = null;
let decimalFormat = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = formatNumber(currentInput);
}

function formatNumber(number) {
    if (decimalFormat) {
        return Number(number).toFixed(2);
    } else {
        return number;
    }
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperation(operation) {
    currentOperation = operation;
    savedInput = currentInput; // Guardar el primer operando
    currentInput = '0';
}

function calculateResult() {
    const operand1 = parseFloat(savedInput);
    const operand2 = parseFloat(currentInput);
    if (!isNaN(operand1) && !isNaN(operand2)) {
        switch (currentOperation) {
            case '+':
                currentInput = operand1 + operand2;
                break;
            case '-':
                currentInput = operand1 - operand2;
                break;
            case '*':
                currentInput = operand1 * operand2;
                break;
            case '/':
                currentInput = operand1 / operand2;
                break;
        }
        currentOperation = null;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    savedInput = '0';
    currentOperation = null;
    updateDisplay();
}

function toggleDecimalFormat() {
    decimalFormat = !decimalFormat;
    updateDisplay();
}

updateDisplay();

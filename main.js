// select the elements
const screen = document.querySelector(".screen");
const btns = document.querySelectorAll(
  ".btn-number, .btn-operation, .btn-clear, .btn-function, .btn-equal, .btn-parenthesis"
);
const factorialBtn = document.querySelector("#factorial");
const potBtn = document.querySelector("#pot");
const btnOn = document.querySelector("#btn-on");
const btnOff = document.querySelector("#btn-off");


// initialize the variables
let operand1 = "";
let currentNumber = "";
let operator = "";
let result = null;
let isDecimal = false;
let power = false;


// add event listeners to the buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!power) {
      return;
    }
    const value = btn.textContent;
    switch (value) {
      case "AC":
        clear();
        break;
      case "ON":
        resetCalculator();
        clear();
        break;
      case "=":
        calculate();
        break;
      case ".":
        addDecimal();
        break;
      case "+":
      case "-":
      case "*":
      case "÷":
        setOperator(value);
        break;
      case "%":
        calculatePercent();
        break;
      case "CE":
        clearLastEntry();
        break;
      case "sin":
        calculateTrig(Math.sin);
        break;
      case "cos":
        calculateTrig(Math.cos);
        break;
      case "tan":
        calculateTrig(Math.tan);
        break;
      case "√":
        calculateSqrt();
        break;
      case "log":
        calculateLog();
        break;
      case "ln":
        calculateLn();
        break;
      case "e":
        screen.value += Math.E.toFixed(15).trim();
        currentNumber += Math.E.toFixed(15).trim();
        break;
      case "𝜋":
        screen.value += Math.PI.toFixed(15).trim();
        currentNumber += Math.PI.toFixed(15).trim();
        break;
      case "exp":
        let exponente = parseInt(prompt("Ingresa el exponente: "));
        let num = parseFloat(screen.value);
        num *= Math.pow(10, exponente);
        screen.value = num.toString();
        break;
      case "x!":
        calculateFactorial();
        break;
      case "+/-":
        negateNumber();
        break;
      default:
        addNumber(value);
        break;
    }
  });
});

potBtn.addEventListener("click", () => {
  operator = "^";
  operand1 = currentNumber;
  currentNumber = "";
  isDecimal = false;
});

btnOn.addEventListener("click", () => {
  power = true;
});

btnOff.addEventListener("click", () => {
  powerOff();
});

// add number to the screen
function addNumber(value) {
  if (result) {
    clear();
  }
  if (isDecimal) {
    currentNumber += value;
    screen.value += value;
  } else {
    if (value === "-" && currentNumber.indexOf("-") === -1) {
      currentNumber = "-" + currentNumber;
      screen.value = currentNumber;
    } else if (value !== "-") {
      currentNumber += value;
      screen.value = currentNumber;
    }
  }
}

// add decimal point to the screen
function addDecimal() {
  if (!isDecimal) {
    isDecimal = true;
    currentNumber+= ".";
    screen.value += ".";
  }
}

// set the operator
function setOperator(value) {
  if (result) {
    operand1 = result;
    result = null;
  } else {
    operand1 = currentNumber;
    currentNumber = "";
  }
  operator = value;
  isDecimal = false; // set isDecimal to false after setting operator
}

function calculateTrig(trigFunc) {
  let num = parseFloat(screen.value);
  let result = trigFunc(num);
  screen.value = result;
  operand1 = "";
  currentNumber = "";
  operator = "";
  isDecimal = false;
}

function calculateSqrt() {
  let num = parseFloat(screen.value);
  let result = Math.sqrt(num);
  screen.value = result;
  operand1 = "";
  currentNumber = "";
  operator = "";
  isDecimal = false;
}

// calculate logarithm of a number
function calculateLog() {
  let num = parseFloat(screen.value);
  let result = Math.log10(num);
  screen.value = result;
  operand1 = "";
  currentNumber = "";
  operator = "";
  isDecimal = false;
}

// calculate natural logarithm of a number
function calculateLn() {
  let num = parseFloat(screen.value);
  let resultE = Math.log(num) / Math.log(Math.E);
  screen.value = resultE;
  operand1 = "";
  currentNumber = "";
  operator = "";
  isDecimal = false;
}

function calculateFactorial() {
  const num = parseInt(currentNumber);
  let result = factorial(num);
  screen.value = result;
  operand1 = "";
  currentNumber = "";
  operator = "";
  isDecimal = false;
}

function factorial(num) {
  if (num < 0) {
    return NaN;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function calcular(expresion) {
  let resultado = 0;
  let operador = "+";
  let numero = "";

  for (let i = 0; i < expresion.length; i++) {
    const caracter = expresion[i];

    if (/\d/.test(caracter)) {
      numero += caracter;
    }

    if (/[\+\-\*\/]/.test(caracter) || i === expresion.length - 1) {
      const num = parseFloat(numero);

      switch (operador) {
        case "+":
          resultado += num;
          break;
        case "-":
          resultado -= num;
          break;
        case "*":
          resultado *= num;
          break;
        case "/":
          resultado /= num;
          break;
      }

      operador = caracter;
      numero = "";
    }
  }

  return resultado;
}

function updateScreen(value) {
  screen.value = value;
}

function calculateExp() {
  let result = Math.exp(parseFloat(currentNumber));
  operand1 = result.toString();
  currentNumber = "";
  operator = "";
  updateScreen(operand1);
}

function negateNumber() {
  if (currentNumber !== "") {
    currentNumber = (-parseFloat(currentNumber)).toString();
    screen.value = currentNumber;
  }
}

// clear the screen
function clear() {
  operand1 = "";
  currentNumber = "";
  operator = "";
  result = null;
  isDecimal = false;
  screen.value = "";
}


function calculatePercent() {
  const num = parseFloat(currentNumber);
  const result = num / 100;
  screen.value = result;
  operand1 = "";
  currentNumber = "";
  operator = "";
  isDecimal = false;
}

// calculate the result
function calculate() {
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(currentNumber);
  let result = null;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    case "^":
      result = Math.pow(num1, num2);
      break;
    default:
      break;
  }

  if (result !== null) {
    screen.value = result;
    operand1 = "";
    currentNumber = result.toString();
    operator = "";
    isDecimal = false;
    result = null;
  }
}

// clear last entry from screen
function clearLastEntry() {
  let str = screen.value;
  str = str.slice(0, -1);
  screen.value = str;
  currentNumber = str;
}



// enable all buttons
function enableButtons() {
  btns.forEach((btn) => {
    btn.disabled = false;
  });
}

// disable all buttons, except the ON button
function disableButtons() {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
  btnOn.disabled = false;
}

// power off the calculator
function powerOff() {
  power = false;
  clear();
  operand1 = "";
  currentNumber = "";
  operator = "";
  result = null;
  isDecimal = false;
}

// call the addEventListeners function to add event listeners to the buttons
addEventListeners();

// add a function to reset the calculator variables and states
function resetCalculator() {
  operand1 = "";
  currentNumber = "";
  operator = "";
  result = null;
  isDecimal = false;
  power = false;
}


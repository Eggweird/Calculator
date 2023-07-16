const displayBox = document.querySelector(".display-box");
const digitButton = document.querySelectorAll("#digit-button");
const clearButton = document.querySelector("#clear-button");
const allClearButton = document.querySelector("#all-clear-button");
const operatorButton = document.querySelectorAll("#operator");
const equalButton = document.querySelector("#equal-button");
const decimalButton = document.querySelector("#decimal-button"); //could add this into the digitButton

let firstNumber = "";
let secondNumber = "";
let operatorValue = "";
let total = "";
//let memory = [];

//Event listener for digit buttons and call display
//to display the string of number on display box
digitButton.forEach((number) =>
  number.addEventListener("click", () => {
    display(number.textContent);
  })
);

//TODO: switch to switch statement later when it works
//Operator button will store firstNumber with the current displayed text on the display box
//depending on which operator was clicked it will store the operatorValue with that clicked operator
operatorButton.forEach((operator) =>
  operator.addEventListener("click", () => {
    if (operator.textContent === "+") {
      firstNumber = parseFloat(displayBox.textContent);
      operatorValue = operator.value;
      resetDisplay();
    } else if (operator.textContent === "-") {
      firstNumber = parseFloat(displayBox.textContent);
      operatorValue = operator.value;
      resetDisplay();
    } else if (operator.textContent === "/") {
      firstNumber = parseFloat(displayBox.textContent);
      operatorValue = operator.value;
      resetDisplay();
    } else if (operator.textContent === "*") {
      firstNumber = parseFloat(displayBox.textContent);
      operatorValue = operator.value;
      resetDisplay();
    }
  })
);

//This button will when clicked call the reset function
allClearButton.addEventListener("click", () => {
  reset();
});

//This button will when pressed store secondNumber with the current displayed value in the display box
//will call the operate function with the correct variables. Displaying the fully calculated number onto
//the display box
equalButton.addEventListener("click", () => {
  secondNumber = parseFloat(displayBox.textContent);
  resetDisplay();
  console.log(secondNumber);
  displayBox.textContent = operate(operatorValue, firstNumber, secondNumber);
});

//reset will reset everything in the calculator bringing it to square one
function reset() {
  firstNumber = "";
  secondNumber = "";
  operatorValue = "";
  total = "";
  displayBox.textContent = "";
}

//resetDisplay will just erase the numbers within the display box
function resetDisplay() {
  displayBox.textContent = "";
}

//display function to display in display box of calculator
function display(val) {
  displayBox.textContent += val;
  //console.log(val);
}

//The basic functions of a calculator
const subtract = function (a, b) {
  return a - b;
};

const add = function (a, b) {
  return a + b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

// This function will take an operator and 2 nums. The entered operator
// will then be taken into a switch statement. That will then utilizes the
// math functions created and return the value after the math has been completed.

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return null;
      } else {
        return divide(a, b);
      }
    default:
  }
}

const displayBox = document.querySelector(".display-box");
const digitButton = document.querySelectorAll("#digit-button");
const clearButton = document.querySelector("#clear-button");
const allClearButton = document.querySelector("#all-clear-button");
const operatorButton = document.querySelector("#operator");
const equalButton = document.querySelector("equal-button");
const decimalButton = document.querySelector("decimal-button"); //could add this into the digitButton

//let memory = [];

//Event listener for digit buttons and call display
//to display the string of number on display box
digitButton.forEach((number) =>
  number.addEventListener("click", () => {
    display(number.textContent);
  })
);

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

/**
 * Operate function:
 *  This function will take an operator and 2 nums. The entered operator
 *  will then be taken into a switch statement. That will then utilizes the
 *  math functions created and return the value after the math has been completed.
 */
operate = (operator, a, b) => {
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
};

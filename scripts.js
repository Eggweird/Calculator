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

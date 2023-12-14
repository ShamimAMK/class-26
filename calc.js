"use strict";
const display = document.querySelector(".display");

let expression = "";
function showExpression(value) {
  expression += value;
  display.value = expression;
}
function calculate() {
  const result = eval(expression);
  display.value = result;
  expression = "";
}

function allClear() {}

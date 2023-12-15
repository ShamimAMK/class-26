"use strict";
const display = document.querySelector(".display");

let expression = "";
function showExpression(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression).toFixed(3);
    display.value = result;
    expression = result;
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}

function allClear() {
  expression = "";
  display.value = "";
}

function allClear() {
  expression = "";
  display.value = "";
}

function deleteInput() {
  const trimmedInput = display.value.slice(0, -1);
  display.value = trimmedInput;
  expression = trimmedInput;
}

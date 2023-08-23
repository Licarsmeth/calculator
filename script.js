let num1, num2, op;

const calculator = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  power(a, b) {
    return a ** b;
  },
  modulo(a) {
    return a / 100;
  },
};

const operate = function (a, op, b) {
  switch (op) {
    case "+":
      return calculator.add(a, b);
      break;
    case "-":
      return calculator.subtract(a, b);
      break;
    case "/":
      return calculator.divide(a, b);
      break;
    case "*":
      return calculator.multiply(a, b);
      break;
    case "^":
      return calculator.power(a, b);
      break;
  }
};

const answer = document.querySelector(".answer");
const question = document.querySelector(".question");
const numbers = document.querySelectorAll(".no");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const delAll = document.querySelector(".delAll");
const del = document.querySelector(".del");
const percent = document.querySelector(".percent");

let ans = false;
let newVar = "";
let opClicked = false;
let arr = [];
answer.textContent = 0;

for (number of numbers) {
  number.addEventListener("click", numberClickHandler);
}

for (operator of operators) {
  operator.addEventListener("click", operatorClickHandler);
}
percent.addEventListener("click", percentHandler);
equal.addEventListener("click", equalHandler);
delAll.addEventListener("click", reset);
del.addEventListener("click", removeLast);

function numberClickHandler(e) {
  if (!opClicked) {
    num1ClickHandler(e);
  } else {
    num2ClickHandler(e);
  }
}

function num1ClickHandler(e) {
  answer.textContent = newVar + e.target.textContent;
  newVar = answer.textContent;
  num1 = answer.textContent;
  console.log(`num1 is ${num1}`);
}
function operatorClickHandler(e) {
  opClicked = true;
  question.textContent = num1 + e.target.textContent;
  op = e.target.textContent;
  arr.push(op);
  newVar = "";
  if (!(num2 == undefined)) {
    if(!ans){
    question.textContent =
      operate(num1, arr[arr.length - 2], num2) + e.target.textContent;
    num1 = operate(num1, arr[arr.length - 2], num2);
    }
    else{
        question.textContent = answer.textContent + e.target.textContent;
    }
  }
}

function num2ClickHandler(e) {
  answer.textContent = newVar + e.target.textContent;
  newVar = answer.textContent;
  num2 = answer.textContent;
  console.log(` num 2 is ${num2}`);
}
function percentHandler() {
  question.textContent = answer.textContent + "%";
  answer.textContent = calculator.modulo(answer.textContent);
}
function equalHandler() {
    ans = true;
  if (num1 == undefined && num2 == undefined) {
    answer.textContent = 0;
  } else if (num2 == undefined) {
    answer.textContent = num1;
  } else {
    question.textContent = `${num1} ${op} ${num2} =`;
    answer.textContent = operate(num1, op, num2);
    num1 = answer.textContent;
    newVar = "";
  }
}
function reset() {
  answer.textContent = "";
  question.textContent = "";
  opClicked = false;
  newVar = "";
  ans = false;
}
function removeLast() {
  let numAsString;
  if (num2 == undefined) {
    numAsString = num1.toString().slice(0, -1);
    num1 = Number(numAsString);
    answer.textContent = num1;
  } else {
    numAsString = num2.toString().slice(0, -1);
    num2 = Number(numAsString);
    answer.textContent = num2;
  }
}

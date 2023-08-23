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
    case "%":
      return calculator.modulo(a);
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
// percent.addEventListener("click", percentHandler);
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
  console.log(num1);
}
function operatorClickHandler(e) {
  opClicked = true;
  question.textContent = num1 + e.target.textContent;
  op = e.target.textContent;
  arr.push(op);
  newVar = "";
  if (op == "%") {
    percentHandler();
  }
  if (!(num2 == undefined)) {
    if (!ans) {
      if (op == "%") {
        percentHandler();
      }
      question.textContent =
        operate(num1, arr[arr.length - 2], num2) + e.target.textContent;
      num1 = operate(num1, arr[arr.length - 2], num2);
      answer.textContent = parseInt(question.textContent);
    } else {
      if (op == "%") {
        percentHandler();
      }
      question.textContent = answer.textContent + e.target.textContent;
      answer.textContent = parseInt(question.textContent);
    }
  }
}

function num2ClickHandler(e) {
  ans = false;
  answer.textContent = newVar + e.target.textContent;
  newVar = answer.textContent;
  num2 = answer.textContent;
}
function percentHandler() {
  answer.textContent = Number(operate(num1, op).toString().slice(0, 10));
  num1 = answer.textContent;
}

function equalHandler() {
  ans = true;
  if (op == "%") {
    question.textContent = `${num1 * 100} ${op}`;
  }
  if (num1 == undefined && num2 == undefined) {
    answer.textContent = 0;
  } else if (num2 == undefined) {
    answer.textContent = answer.textContent;
  } else {
    question.textContent = `${num1} ${op} ${num2} =`;
    answer.textContent = Number(
      operate(num1, op, num2).toString().slice(0, 10)
    );
    num1 = answer.textContent;
    newVar = "";
  }
}
function reset() {
  answer.textContent = "";
  question.textContent = "";
  opClicked = false;
  num1 = undefined;
  num2 = undefined;
  newVar = "";
  ans = false;
}
function removeLast() {
  let numAsString;
  if (num2 == undefined) {
    numAsString = num1.toString().slice(0, -1);
    num1 = Number(numAsString);
    answer.textContent = num1;
    newVar = num1;
    console.log(num1);
  } else {
    numAsString = num2.toString().slice(0, -1);
    num2 = Number(numAsString);
    answer.textContent = num2;
    newVar = num2;
  }
}

let num1, num2, op;

const calculator = {
    add(a, b) {
        return Number(a) + Number(b);
    },
    subtract(a,b) {
        return a-b;
    },
    multiply (a,b){
        return a*b;
    },
    divide(a,b){
        return a/b;
    },
    modulo(a,b){
        return a%b;
    },
}

const operate = function (a, op, b){
    switch (op){
        case '+':
            return calculator.add(a,b);
            break;
        case '-': 
            return calculator.subtract(a,b);
            break;
        case "/":
            return calculator.divide(a,b);
            break;
        case '*':
            return calculator.multiply(a,b);
            break;
        case '%':
            return calculator.modulo(a,b);
            break;
    }
}
num1 = 2;
op = '*';
num2 = 3;
let newVar = '';

console.log(operate(num1, op, num2));
const answer = document.querySelector('.answer');
const question = document.querySelector('.question');
const numbers = document.querySelectorAll('.no');
const operators = document.querySelectorAll('.op');

for(number of numbers){
    number.addEventListener('click', (e)=>{
        answer.textContent=newVar + e.target.textContent;
        newVar = answer.textContent;
    })
}

for (operator of operators){
    operator.addEventListener('click', (e)=>{
        question.textContent = answer.textContent + e.target.textContent;
        newVar= answer.textContent;
    })
}

let num1 = "";
let num2 = "";
let operator = "";
let chars = "";
let opp = "";


function add(a, b) {
  return a + b;
};

function sub(a, b) {
  return a - b;
};

function multi(a, b) {
  return a * b;
};

function div(a, b) {
  if ((a === 0 || b === 0)) {
  return `${b} can not divide ${a}`
  }  else {
    return Math.round((a / b) * 100) / 100;
  }
};

function operate(num1, operator, num2) {
  let result;
  switch(operator) {
    case '+':
      result = add(num1,num2);
      break;
    
    case '-':
      result = sub(num1,num2);
      break;

    case '*':
      result = multi(num1,num2);
      break;

    case '/':
      result = div(num1,num2);
      break;
  }

  return result;
}

let dialed;

const numSign = document.querySelectorAll('.num, .opSign');
const opSign = document.querySelectorAll('.opSign')
const display = document.querySelector('.display');

numSign.forEach(btn => btn.addEventListener('click', () => displays(btn.textContent)))

function displays(text) {
  display.textContent += text;
}

const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
const valueToOperate = display.textContent
console.log(valueToOperate)
storeDialed(valueToOperate)
})

function storeDialed(num) {
  
      for (let i = 0; i < num.length; i++) {
        let char = num[i]
        if (!isNaN(char)){
          if (operator === '') {
            num1 += char;
          } else {
            num2 += char
          }
        } else {
          operator = char
        }
      }
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  const result = operate(num1,operator,num2);

  display.textContent = result;

  num1 = '';
  operator = '';
  num2 = '';
}

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
  num1 = '';
  operator = '';
  num2 = '';
  display.textContent = '';
})





  
 






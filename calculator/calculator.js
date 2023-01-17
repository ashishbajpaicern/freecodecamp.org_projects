const calculator = document.querySelector('.calculator-container');
const keys = calculator.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');

let firstValue = 0;
let operator = '';
let secondValue = '';

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
        if (displayedNum.length < 10) { // check if the number of digits is less than 10
            if (operator) {
                secondValue = keyContent;
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      operator = action;
      firstValue = displayedNum;
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    }

    if (action === 'clear') {
      firstValue = 0;
      secondValue = '';
      operator = '';
      display.textContent = 0;
    }

    if (action === 'calculate') {
        if(secondValue){
            secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
        }
      }
      
      
  }
});

function calculate(firstValue, operator, secondValue) {
    var result = 0;
    switch (operator) {
      case 'add':
        result =  parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case 'subtract':
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case 'multiply':
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case 'divide':
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
      default:
        return 'Error';
    }
    return result.toFixed(5);
  }
  
  

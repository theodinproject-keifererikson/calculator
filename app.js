const $displayMain     = document.querySelector('#display-main'),
      $displaySub      = document.querySelector('#display-sub'),
      $allButtons      = document.querySelectorAll('button'),
      $numberButtons   = document.querySelectorAll('.num'),
      $operatorButtons = document.querySelectorAll('.op'),
      $btnEquals       = document.querySelector('#btn-equals'),
      $btnClear        = document.querySelector('#btn-clear');

let num1;
let num2;
let op;
let total = 0;

// event listener for number buttons
$numberButtons.forEach((e) => {
  e.addEventListener('click', () => {
    $displayMain.innerText += e.value;
    $displaySub.innerText += e.value;
  });
});

// event listener for operator buttons
$operatorButtons.forEach((e) => {
  e.addEventListener('click', () => {
    
    if (total != 0) {
      num1 = total;
      num2 = Number($displayMain.innerText);
      total = (operate(op, num1, num2)).toFixed(2);
      op = e.value;
      $displayMain.innerText = '';
      $displaySub.innerText += e.value;
    } else {
      op = e.value;
      total = Number($displayMain.innerText);
      $displayMain.innerText = '';
      $displaySub.innerText += e.value;
    }
  });
});

// event listener for equals button
$btnEquals.addEventListener('click', () => {
  if (!op) return alert('Please input an operable function'), reset();
  num1 = total;
  num2 = Number($displayMain.innerText);
  $displayMain.innerText = (operate(op, num1, num2)).toFixed(2);
  $displaySub.innerText += '=';
  total = 0;
});

// event listener for clear button
$btnClear.addEventListener('click', () => {
  reset()
});

function reset() {
  $displayMain.innerText = '';
  $displaySub.innerText = '';
  num1 = 0;
  num2 = 0;
  total = 0;
}

const operate = (operator, a, b) => {
  const operations = {
    "+" : (a, b) => { return a + b },
    "-" : (a, b) => { return a - b },
    "*" : (a, b) => { return a * b },
    "/" : (a, b) => { return a / b },
  }

  total = operations[operator](a, b);

  return total;
}





















      // $btn1            = document.querySelector('#btn-1'),
      // $btn2            = document.querySelector('#btn-2'),
      // $btn3            = document.querySelector('#btn-3'),
      // $btn4            = document.querySelector('#btn-4'),
      // $btn5            = document.querySelector('#btn-5'),
      // $btn6            = document.querySelector('#btn-6'),
      // $btn7            = document.querySelector('#btn-7'),
      // $btn8            = document.querySelector('#btn-8'),
      // $btn9            = document.querySelector('#btn-9'),
      // $btn0            = document.querySelector('#btn-0'),
      // $btnAdd          = document.querySelector('#btn-add'),
      // $btnSubtract     = document.querySelector('#btn-subtract'),
      // $btnMultiply     = document.querySelector('#btn-multiply'),
      // $btnDivide       = document.querySelector('#btn-divide'),
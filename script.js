let previousNum = "";
let currentNum = "";

//cache the dom
let numbersBtn = document.querySelectorAll('.numbers');
let operationBtn = document.querySelectorAll('.operation');
let previousOperationTextElement = document.querySelector('.previous-display');
let currentOperationTextElement = document.querySelector('.current-display');
let equalsBtn = document.querySelector('.equals');
let clearAllBtn = document.querySelector('.clear-all');
let delBtn = document.querySelector('.delete');

//display the numbers
numbersBtn.forEach((btn) =>{
  btn.addEventListener('click', (e) =>{
    updateDisplay(e.target.textContent)
  })
})

//to update the display
function updateDisplay(number){
  if(number == "." && currentNum.includes(".")) return;
  if(currentNum.length <= 11){
  currentNum += number;
  currentOperationTextElement.textContent = currentNum;
  }
 
}

// to add operation

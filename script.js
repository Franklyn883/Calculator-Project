let previousNum = "";
let currentNum = "";
let operator;
let result;

//cache the dom
let numbersBtn = document.querySelectorAll('.numbers');
let operationBtn = document.querySelectorAll('.operation');
let previousOperationTextElement = document.querySelector('.previous-display');
let currentOperationTextElement = document.querySelector('.current-display');
let equalsBtn = document.querySelector('.equals');
let clearAllBtn = document.querySelector('.clear-all');
let delBtn = document.querySelector('.delete');
let toPower = document.querySelector('.power');

//display the numbers
numbersBtn.forEach((btn) =>{
  btn.addEventListener('click', (e) =>{
    updateDisplay(e.target.textContent)
  })
})


//to update the display
function updateDisplay(number){
  if(number == "." && currentNum.includes(".")) return;
  if(previousNum !=="" && currentNum !=="" && operator == undefined){
    previousNum = "";
    currentOperationTextElement.textContent = currentNum;
  }
  if(currentNum.length <= 11){
  currentNum += number;
  currentOperationTextElement.textContent = currentNum;
  }
 
}
//delete function
function del(){
  currentNum = currentNum.slice(0, -1);
  currentOperationTextElement.textContent = currentNum;

}
delBtn.addEventListener('click', del);

// To add operation
operationBtn.forEach((btn) =>{
  btn.addEventListener('click', (e) =>{
    operator = e.target.textContent
    chooseOperation(operator);
  })
})

function chooseOperation(operator){
 
  if(previousNum == ""){
    previousNum = currentNum;
    checkOperation(operator);
  }
  else if(currentNum ==""){
    checkOperation(operator);
  }
  else {
    operate();
    currentOperationTextElement.textContent = "0";
    previousOperationTextElement.textContent = previousNum + " " + operator;

  }
 
}

//to check for operation so you can operate on previous operation.
function checkOperation(operator){
  previousOperationTextElement.textContent = previousNum + " " + operator;
  currentOperationTextElement.textContent = "0";
  currentNum = "";
}

//equals sign
equalsBtn.addEventListener('click', () =>{
  if(currentNum != "" && previousNum !=""){
    operate();
  }
})

function operate (){
  previousNum = parseFloat(previousNum);
  currentNum = parseFloat(currentNum);
  if (operator == "+"){
    previousNum += currentNum;
  } 
  else if (operator == "-"){
    previousNum -= currentNum;
  }
  else if (operator == "÷"){
    if(currentNum == 0){
      previousNum = "Error ";
      displayResult();
      return;

    }
    previousNum /= currentNum;
  }
  else if(operator ="x"){
    previousNum *= currentNum;
  }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResult();

}


//to round numbers up
function roundNumber(num){
  return Math.round(num * 100000)/100000;
}

//to display result
function displayResult(){
 ;
    if(previousNum.length <= 11){
      currentOperationTextElement.textContent = previousNum;
    }
    else{ currentOperationTextElement.textContent = previousNum.slice(0, 15) + "..."
    }

    previousOperationTextElement.textContent = "";
    operator = undefined;
    currentNum = "";
}
//clearAll function
function clearAll(){
  currentNum ="";
  previousNum ="";
  previousOperationTextElement.textContent ="";
  currentOperationTextElement.textContent ="";
  operator = undefined;
 
}
clearAllBtn.addEventListener('click', clearAll)
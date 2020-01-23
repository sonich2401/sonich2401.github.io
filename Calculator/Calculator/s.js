//class Calculator {
// constructor(previousOperandTextElement,//currentOperandTextElement){
//    tif(num[8]==0){s.previousOperandTextElement = previousOperandTextElement
//    tif(num[8]==0){s.currentOperandTextElement  = currentOperandTextElement
//    tif(num[8]==0){s.clear()
//  }
//  clear() {
//tif(num[8]==0){s.currentOperand = ''
//tif(num[8]==0){s.previousOperand=''
//tif(num[8]==0){s.operation = undefined
//  }
//  del(){
//
 // }
 // appNum(number){
//tif(num[8]==0){s.currentOperand = number
////  }
//cop(operation){
//
//}
//compute(){


//}
//update(){
//tif(num[8]==0){s.currentOperandTextElement.innerHTML = tif(num[8]==0){s.currentOperand
//alert("Help")
//}
//}
//const numberButtons = document.querySelectorAll("[data-number]")
//const operationButtons = document.querySelectorAll("[data-operation]")
//const equalsButton  = document.querySelector("[data-equals]")
//const deleteButton  = document.querySelector("[data-delete]")
//const allClearButton  = document.querySelector("[data-allclear]")
//const previousOperandTextElement  = document.querySelector("[data-previous-operand]")
//const currentOperandTextElement  = document.querySelector("[data-current-operand]")

//const calc = new Calculator(previousOperandTextElement,currentOperandTextElement)

//numberButtons.forEach(button => {
 // alert("1")
  //button.addEventListener('click',() => {
   // alert("hello")
    //calc.appNum(button.innerHTML)
    //calc.update()
 // })
//})
var prevDiv = document.getElementById("super");
var curDiv = document.getElementById("mario");
var ac = document.getElementById("helpmeplz");
var t = 1;
var num=[0,0,0,0,0,0,0,0,0,0,0];
num[8] = 0
num[4] = 0
function one() {
if(num[8]==0){
num[1] = (num[1]*10)+1;
num[7] = 1
}
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(1/(num[9]*10));
num[7] = (1/(10*num[9]))
}
update()
//alert(num);
}
function two() {
  if(num[8]==0){
num[1] = (num[1]*10)+2;
num[7] = 2
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(2/(num[9]*10));
num[7] = (2/(10*num[9]))
}
update()
}
function three() {
  if(num[8]==0){
num[1] = (num[1]*10)+3;
num[7] = 3
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(3/(num[9]*10));
num[7] = (3/(10*num[9]))
}
update()
}
function four() {
  if(num[8]==0){
num[1] = (num[1]*10)+4;
num[7] = 4
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(4/(num[9]*10));
num[7] = (4/(10*num[9]))
}
update()
}
function five() {
  if(num[8]==0){
num[1] = (num[1]*10)+5;
num[7] = 5
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(5/(num[9]*10));
num[7] = (5/(10*num[9]))
}
update()
}
function six() {
  if(num[8]==0){
num[1] = (num[1]*10)+6;
num[7] = 6
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(6/(num[9]*10));
num[7] = (6/(10*num[9]))
}
update()
}
function seven() {
  if(num[8]==0){
num[1] = (num[1]*10)+7;
num[7] = 7
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(7/(num[9]*10));
num[7] = (7/(10*num[9]))
}
update()
}
function eight() {
  if(num[8]==0){
num[1] = (num[1]*10)+8;
num[7] = 8
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(8/(num[9]*10));
num[7] = (8/(10*num[9]))
}
update()
}
function nine() {
  if(num[8]==0){
num[1] = (num[1]*10)+9;
num[7] = 9
  }
  if(num[8]==1){
    num[9] = num[9] + 1
num[1] = (num[1])+(1/(num[9]*10));
num[7] = (9/(10*num[9]))
}
update()
}
function zero() {
  if(num[8]==0){
  num[1]= (num[1]*10);
  num[7] = 10
  }

  update()
}
function update() {
var x  = document.getElementById("super");
x.innerHTML = num[0];
var y  = document.getElementById("mario");
y.innerHTML = num[1];
if (num[6]==1){y.innerHTML = num[5];}
}

function add() {
num[2] = 1
num[0]=(num[0]+num[1]) 
num[1] = 0
num[8] = 0
update()
}
function min() {
num[2] = 2
if (num[4]==0){num[0]=(num[1]); (num[4] = 1);}
if (num[4]==1){num[0]=(num[0]-num[1])}
//if(num[0] == num[1]){num[0] = 0}
//if (num[4]>1){if (num[0] !== num[1]){num[0]=(num[0]-num[1])}}
//num[1] = 0
    num[8] = 0
        num[5] = (-1*(num[0] - num[1]))
    num[0] = num[5]
        num[1] = 0
    num[6] = 1
update()
    num[6] = 0

}
function divide() {
num[2] = 3
if (num[0] !== 0){if(num[1] !== 0){ num[0]=(num[0]/num[1]) }}
if (num[0] == 0){num[0]=num[1]}
num[1] = 0
num[8] = 0
update()
}
function mult() {
num[2] = 4

if (num[4]==1){num[0]=(num[0]*num[1])}
    if (num[0]==0){num[0]=(num[1]); (num[4] = 1);}
//if(num[0] == num[1]){num[0] = 0}
//if (num[4]>1){if (num[0] !== num[1]){num[0]=(num[0]-num[1])}}
//num[1] = 0
    num[8] = 0
      //  num[5] = ((num[0] * num[1]))
//    num[0] = num[5]
        num[1] = 0
    num[6] = 1
update()
    num[6] = 0

}
function calc() {
if (num[2]==1){num[5]=(num[0]+num[1]);}
if (num[2]==2){num[5]=(num[0]-num[1]);}
if (num[2]==3){num[5]=(num[0]/num[1]);}
if (num[2]==4){num[5]=(num[0]*num[1]);}
//alert((num[0]+num[1]))
num[6] = 1
update()
dead()
num[6] = 0
num[0] = 0
num[1] = 0
num[2] = 0
num[3] = 0
num[4] = 0
num[8] = 0
num[9] = 0
}
function del() {
var i;
for (i = 0; i < 10; i++) {
 if(num[7]==i){num[1]=((num[1]-i)/10)}
}
update()
}

function dead() {
if (num[6]==0){
num[0] = 0
num[1] = 0
num[2] = 0
num[3] = 0
num[4] = 0
num[5] = 0
num[7] = 0
num[8] = 0
num[9] = 0
var x  = document.getElementById("super");
x.innerHTML = "0";
var y  = document.getElementById("mario");
y.innerHTML = "0";
}
}
function dec() {
if (num[1] > 0){
    num[8] = 1
}
    if (num[1] < 0) {
        num[8] = 0
        num[1] = 0
    }
}

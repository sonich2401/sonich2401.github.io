//class Calculator {
// constructor(previousOperandTextElement,//currentOperandTextElement){
//    this.previousOperandTextElement = previousOperandTextElement
//    this.currentOperandTextElement  = currentOperandTextElement
//    this.clear()
//  }
//  clear() {
//this.currentOperand = ''
//this.previousOperand=''
//this.operation = undefined
//  }
//  del(){
//
 // }
 // appNum(number){
//this.currentOperand = number
////  }
//cop(operation){
//
//}
//compute(){

//}
//update(){
//this.currentOperandTextElement.innerHTML = this.currentOperand
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
var num=[0,0,0];
function one() {
num[1] = (num[1]*10)+1;
alert(num);
}
function two() {
num[1] = (num[1]*10)+2;
}
function three() {
num[1] = (num[1]*10)+3;
}
function four() {
num[1] = (num[1]*10)+4;
}
function five() {
num[1] = (num[1]*10)+5;
}
function six() {
num[1] = (num[1]*10)+6;
}
function seven() {
num[1] = (num[1]*10)+7;
}
function eight() {
num[1] = (num[1]*10)+8;
}
function nine() {
num[1] = (num[1]*10)+9;
}
function zero() {
  num[1]= (num[1]*10);
}
//update() {
document.getElementById("helpmeplz").innerHTML="Herer";
//}
//update()
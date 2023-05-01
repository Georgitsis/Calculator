let result = 0;
let lastOperand = "0";
let ongoingCalculation = "";
let operator = "+";

   function buttonClickListener(){
   document.querySelector("#one").addEventListener("click", function() {
      pressOne();
   });
   document.querySelector("#two").addEventListener("click", function() {
      pressTwo();
   });
   document.querySelector("#three").addEventListener("click", function() {
      pressThree();
   });
   document.querySelector("#four").addEventListener("click", function() {
      pressFour();
   });
   document.querySelector("#five").addEventListener("click", function() {
      pressFive();
   });
   document.querySelector("#six").addEventListener("click", function() {
      pressSix();
   });
   document.querySelector("#seven").addEventListener("click", function() {
      pressSeven();
   });
   document.querySelector("#eight").addEventListener("click", function() {
      pressEight();
   });
   document.querySelector("#nine").addEventListener("click", function() {
      pressNine();
   });
   document.querySelector("#zero").addEventListener("click", function() {
      pressZero();
   });
}

function pressOne() {
   if(lastOperand === "0")
      lastOperand = "1";
   else
      lastOperand = lastOperand + "1";
   ongoingCalculation = ongoingCalculation + "1";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressTwo() {
   if(lastOperand === "0")
      lastOperand = "2";
   else
      lastOperand = lastOperand + "2";
   ongoingCalculation = ongoingCalculation + "2";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressThree() {
   if(lastOperand === "0")
      lastOperand = "3";
   else
   lastOperand = lastOperand + "3";
   ongoingCalculation = ongoingCalculation + "3";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressFour() {
   if(lastOperand === "0")
   lastOperand = "4";
   else
   lastOperand = lastOperand + "4";
   ongoingCalculation = ongoingCalculation + "4";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressFive() {
   if(lastOperand === "0")
   lastOperand = "5";
   else
   lastOperand = lastOperand + "5";
   ongoingCalculation = ongoingCalculation + "5";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressSix() {
   if(lastOperand === "0")
   lastOperand = "6";
   else
   lastOperand = lastOperand + "6";
   ongoingCalculation = ongoingCalculation + "6";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressSeven() {
   if(lastOperand === "0")
   lastOperand = "7";
   else
   lastOperand = lastOperand + "7";
   ongoingCalculation = ongoingCalculation + "7";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressEight() {
   if(lastOperand === "0")
   lastOperand = "8";
   else
   lastOperand = lastOperand + "8";
   ongoingCalculation = ongoingCalculation + "8";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressNine() {
   if(lastOperand === "0")
   lastOperand = "9";
   else
   lastOperand = lastOperand + "9";
   ongoingCalculation = ongoingCalculation + "9";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}

function pressZero() {
   if(lastOperand === "0")
   lastOperand = "0";
   else
   lastOperand = lastOperand + "0";
   ongoingCalculation = ongoingCalculation + "0";
   document.querySelector("#result").innerText = lastOperand;
   document.querySelector("#ongoingCalculation").innerText = lastOperand;
}
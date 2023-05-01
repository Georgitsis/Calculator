let ac = true;   //stands for all clear. is true when calculation has not started yet or been reset to the beginning.
let result = 0;
let lastOperand = "";
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
   document.querySelector("#plus").addEventListener("click", function() {
      pressPlus();
   });
   document.querySelector("#minus").addEventListener("click", function() {
      pressMinus();
   });
   document.querySelector("#multiply").addEventListener("click", function() {
      pressMultiply();
   });
   document.querySelector("#divide").addEventListener("click", function() {
      pressDivide();
   });
   document.querySelector("#equal").addEventListener("click", function() {
      pressEqual();
   });
   document.querySelector("#ac").addEventListener("click", function() {
      pressAC();
   });
   
}

function pressOne() {
   lastOperand = lastOperand + "1";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressTwo() {
   lastOperand = lastOperand + "2";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressThree() {
   lastOperand = lastOperand + "3";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressFour() {
   lastOperand = lastOperand + "4";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressFive() {
   lastOperand = lastOperand + "5";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressSix() {
   lastOperand = lastOperand + "6";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressSeven() {
   lastOperand = lastOperand + "7";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressEight() {
   lastOperand = lastOperand + "8";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressNine() {
   lastOperand = lastOperand + "9";
   ac = false;
   document.querySelector("#result").innerText = lastOperand;
}

function pressZero() {
   if(!ac){
      lastOperand = lastOperand + "0";
      ac = false;
      document.querySelector("#result").innerText = lastOperand;
   }

}

function pressPlus() {
   ongoingCalculation = ongoingCalculation + lastOperand + " + ";
      switch (operator) {
         case "+":
            result = result + parseFloat(lastOperand);
            break;
         case "-":
            result = result - parseFloat(lastOperand);         
            break;
       case "*":
            result = result * parseFloat(lastOperand);         
            break;
         case "/":
            result = result / parseFloat(lastOperand);         
            break;
         default:
            break;
      }
      lastOperand = "";   
   operator = "+";
   document.querySelector("#result").innerText = result;
   document.querySelector("#ongoingCalculation").innerText = ongoingCalculation;
}

function pressMinus() {
   ongoingCalculation = ongoingCalculation + lastOperand + " - ";
      switch (operator) {
         case "+":
            result = result + parseFloat(lastOperand);
            break;
         case "-":
            result = result - parseFloat(lastOperand);         
            break;
       case "*":
            result = result * parseFloat(lastOperand);         
            break;
         case "/":
            result = result / parseFloat(lastOperand);         
            break;
         default:
            break;
      }
      lastOperand = "";   
   operator = "-";
   document.querySelector("#result").innerText = result;
   document.querySelector("#ongoingCalculation").innerText = ongoingCalculation;
}

function pressMultiply() {
   ongoingCalculation = ongoingCalculation + lastOperand + " * ";
      switch (operator) {
         case "+":
            result = result + parseFloat(lastOperand);
            break;
         case "-":
            result = result - parseFloat(lastOperand);         
            break;
       case "*":
            result = result * parseFloat(lastOperand);         
            break;
         case "/":
            result = result / parseFloat(lastOperand);         
            break;
         default:
            break;
      }
      lastOperand = "";   
   operator = "*";
   document.querySelector("#result").innerText = result;
   document.querySelector("#ongoingCalculation").innerText = ongoingCalculation;
}

function pressDivide() {
   ongoingCalculation = ongoingCalculation + lastOperand + " / ";
      switch (operator) {
         case "+":
            result = result + parseFloat(lastOperand);
            break;
         case "-":
            result = result - parseFloat(lastOperand);         
            break;
       case "*":
            result = result * parseFloat(lastOperand);         
            break;
         case "/":
            result = result / parseFloat(lastOperand);         
            break;
         default:
            break;
      }
      lastOperand = "";   
   operator = "/";
   document.querySelector("#result").innerText = result;
   document.querySelector("#ongoingCalculation").innerText = ongoingCalculation;
}

function pressEqual() {
   ongoingCalculation = ongoingCalculation + lastOperand ;
      switch (operator) {
         case "+":
            result = result + parseFloat(lastOperand);
            break;
         case "-":
            result = result - parseFloat(lastOperand);         
            break;
       case "*":
            result = result * parseFloat(lastOperand);         
            break;
         case "/":
            result = result / parseFloat(lastOperand);         
            break;
         default:
            break;
      }
      lastOperand = "";   
   operator = "+";
   document.querySelector("#result").innerText = result;
   document.querySelector("#ongoingCalculation").innerText = ongoingCalculation;
}

function pressAC() {
   ac = true;
   result = 0;
   lastOperand = "";   
   operator = "+";
   ongoingCalculation = "";
   document.querySelector("#result").innerText = "0";
   document.querySelector("#ongoingCalculation").innerText = "";
}
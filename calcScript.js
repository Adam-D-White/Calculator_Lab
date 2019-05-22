
function addition(){

    var userNumber1El = document.getElementById("user1");
    var userNumber1 = userNumber1El.value;
    var userNumber2El = document.getElementById("user2");
    var userNumber2 = userNumber2El.value;
    userNumber1=Number(userNumber1);
    userNumber2=Number(userNumber2);
    var answer = userNumber1 + userNumber2;
    console.log(answer);
    var calcAnswer = document.getElementById("calcAnswer");
    
    //Modify the element
    
    calcAnswer.innerText = answer;
}
function subtraction(){

    var userNumber1El = document.getElementById("user1");
    var userNumber1 = userNumber1El.value;
    var userNumber2El = document.getElementById("user2");
    var userNumber2 = userNumber2El.value;
    userNumber1=Number(userNumber1);
    userNumber2=Number(userNumber2);
    var answer = userNumber1 - userNumber2;
    console.log(answer);
    var calcAnswer = document.getElementById("calcAnswer");
    
    //Modify the element
    
    calcAnswer.innerText = answer;
}

function multiply(){

    var userNumber1El = document.getElementById("user1");
    var userNumber1 = userNumber1El.value;
    var userNumber2El = document.getElementById("user2");
    var userNumber2 = userNumber2El.value;
    userNumber1=Number(userNumber1);
    userNumber2=Number(userNumber2);
    var answer = userNumber1 * userNumber2;
    console.log(answer);
    var calcAnswer = document.getElementById("calcAnswer");
    
    //Modify the element
    
    calcAnswer.innerText = answer;
}

function divide(){

    var userNumber1El = document.getElementById("user1");
    var userNumber1 = userNumber1El.value;
    var userNumber2El = document.getElementById("user2");
    var userNumber2 = userNumber2El.value;
    userNumber1=Number(userNumber1);
    userNumber2=Number(userNumber2);
    var answer = userNumber1 / userNumber2;
    console.log(answer);
    var calcAnswer = document.getElementById("calcAnswer");
    
    //Modify the element
    
    calcAnswer.innerText = answer;
}

function MainCalc(){
    var operators = document.getElementsByName("Equation");
    for(i = 0; i < operators.length; i++)
    {
        if(operators[i].checked)
        {
            var myOperator = operators[i].value;
            break;
        }

    }

    switch(myOperator)
    {

case "Add" :
addition();
break;

case "Subtract" :
subtraction();
break;

case "Multiply" :
multiply();
break;

case "Divide" :
divide();
break;

default :
break;


    }


    

}
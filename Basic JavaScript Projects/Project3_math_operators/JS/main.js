function addition_Function() { //Addition
    var addition = 20 + 20;
    document.getElementById("Addition").innerHTML = "20 + 20 = " + addition;
}

function subtraction_Function() {  //Subtraction
    var Subtraction = 99 - 27;
    document.getElementById("Subtraction").innerHTML = "99 - 27 = " + Subtraction;
}

function multiplication_Function() {  //Multiplication
    var simple_Math = 100 * 100;
    document.getElementById("Multiplication").innerHTML = "100 x 100 = " + simple_Math;
}

function division_Function() {  // Division
    var simple_Math = 120 / 12;
    document.getElementById("Division").innerHTML = "120 / 12 = " + simple_Math;
}

function more_Math() {  //Multiple Number Equation
    var simple_Math = (20 + 30) * 50 / 10 - 10;
    document.getElementById("Maths").innerHTML = "20 plus 30, multiplied by 50, divided by 10 and then subtracted by 10 equals " + simple_Math;
}

function modulus_Operator() {  //Remainder left after equation
    var simple_Math = 25 % 10;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 10 you have a remainer of: " + simple_Math;
}

function negation_Operator() {  //This leaves a negative number
    var X = 777;
    document.getElementById("Negation").innerHTML = -X;
}

function increment_Operator() {  //This increments number
    var X = 24;
    X++;
    document.getElementById("Increment").innerHTML = "The number that follows 24 is " + X;
}

function decrement_Operator() {  //This will show decreasing
    var X = 1001;
    X--;
    document.getElementById("Decrement").innerHTML = "The number that is below 1001 is " + X;
}

window.alert(Math.random());  //Window alert random number

window.alert(Math.random() * 100);  //Window alert another random number

window.alert(Math.round(23.34567));  //Window alert rounded number



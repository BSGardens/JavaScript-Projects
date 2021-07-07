//Typeof Operator

document.write(typeof "Apple");

document.write(typeof 10);

document.write("20" + 5);

//NaN Functions

function my_NaN() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function my_True() {
    document.getElementById("True").innerHTML = isNaN('What could this be?');
}

function my_False() {
    document.getElementById("False").innerHTML = isNaN('999');
}

//Infinity

document.write(5E789);

document.write(-5E789);

//Boolean

document.write(50>10);

document.write(50<10);

console.log(50 + 50);

document.write(100 == 100);

document.write(100 == 200);


Fruit1 = "Apple";
Fruit2 = "Apple";
document.write(Fruit1 === Fruit2);

J = "Cat";
K = "Dog";
document.write(J === K);

Blue = 10;
Red = "10";
document.write(Blue === Red);

X = "Car";
Y = "Truck";
document.write(X === Y);

//And Operators

document.write(6 > 4 && 15 > 8);

document.write(6 > 4 && 15 < 8);

//Or Operators

document.write(6 > 4 || 15 > 8);

document.write(6 < 4 || 15 < 8);

//Not Operators

function not_False() {
    document.getElementById("NF").innerHTML = !(3 > 2);
}

function not_True() {
    document.getElementById("NT").innerHTML = !(2 > 3);
}

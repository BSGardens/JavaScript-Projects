function Ride_Function() {  //Ternary Operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote":"You are able to vote";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Cat(Age, Location, Food, Color) {  //Constructor Function
    this.Cat_Age = Age;
    this.Cat_Location = Location;
    this.Cat_Food = Food;
    this.Cat_Color = Color;
}

var Yoshi = new Cat(13, "Indoor", "Dry", "Black");
var MadMax = new Cat(12, "Indoor", "Dry", "White and Cream");
var Latte = new Cat(10, "Outdoor", "Dry", "White and Orange");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "Yoshi is a " + Yoshi.Cat_Color + "-colored cat who lives " + Yoshi.Cat_Location + 
    " born " + Yoshi.Cat_Age + " years ago.";
}

//Nested Function

function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 99;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
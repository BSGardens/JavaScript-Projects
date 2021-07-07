function my_Dictionary() { //Key/Value Pairs
    var Animal = {
        Species:"Rabbit",
        Color1:"Black",
        Color2:"White",
        Age:2,
        Sound:"Grunt!",
    };
    delete Animal.Sound; //Delete Animal Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
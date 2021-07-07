function My_First_Function() { //variable string function
    var str = "Game over man!";
    var result = str.fontcolor("purple");
    document.getElementById("Purple_Text").innerHTML = result;
}

function myFunction() { //concatenated function
    var sentence = "This should be good,";
    sentence += " but maybe it won't be...";
    document.getElementById("Concatenate").innerHTML = sentence;
}
//callback function
//use a function as a parameter in a another function

/*
function explainCallback(name, age, task){
    console.log("Hello", name);
    console.log("Your", age);
    task();
}

function washHand(){
    console.log("U wash hand");
}
function takeShower(){
    console.log("U take shower");
}

//call
explainCallback("Pranab", 21, washHand);
explainCallback("Rajav", 22, takeShower);
*/

/*
setTimeout(function(){
    console.log("Hello programmer");
}/, 5000);
*/

//when and how to use javascript callback function
function welComeGuest(name, greetHandler){
    //console.log(name);
    greetHandler(name);
}

const actorName = "Rittik Roshan";

function greetMorning(name){
    console.log("Good morning!", name);
}
function greetEvening(name){
    console.log("Good evening!", name);
}
function greetAfternoon(name){
    console.log("Good afternoon!", name);
}
function greetSpc(name){
    console.log("Good afternoon!", name);
}

welComeGuest(actorName, greetAfternoon);
greetMorning("Pranav", greetMorning);
greetEvening("Pranav", greetEvening);
greetAfternoon("Pranav", greetAfternoon);
//just pass function as parameter different way
welComeGuest("Pranav", function(name){
    console.log("Special welcome", name);
});
//inchToFeet

// var inch = 156;
// var feet = inch/12
// console.log(feet); *// 13 feet

//or do by function
// function inchtoFeet(inch){
//     var feet = inch/12;
//     return feet;
// }
// var result = inchtoFeet(156); //13
// var result2 = inchtoFeet(180); //15
// var result3 = inchtoFeet(288); //24
// console.log(result);

//or do by loop
//output will be 13 15 24
var inchList = [156, 180, 288];
var len = inchList.length;

for(var i = 0; i < len; i++){
    var result = inchList[i] / 12;
    console.log(result);
}

// var name = "Pranav";
// if(name.length > 5){
//     name = "Sarkar";
//     //console.log(name);
// }
// console.log(name);
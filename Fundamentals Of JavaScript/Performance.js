//Code Performance

//01 - Looping
/*let arr = [1,2,3,4,5,6,7];

for(let i = 0; i<arr.length; i++){ //time by time length cal.
    let element = arr[i];
    console.log(element);
}
*/
/*
//best way
let arr = [1,2,3,4,5,6,7];
let len = arr.length

for(let i = 0; i<len; i++){
    let element = arr[i];
    console.log(element);
}
*/

//Reduce Dom access
//avoid unneccesary variables name
//write js end of body
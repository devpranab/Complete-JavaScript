//break statement - out of code block
//Terminates the current loop, switch, or label
//statement and transfers
//program control to the statement following the terminated statement.

//after print 1, then can`t repeat code
/*
for(let i = 1; i<=5; i++){
    console.log(i); //print just for first time
    break;
}
*/

//after print 2, then can`t repeat code
/*
for(let i = 1; i<=5; i++){
    if(i == 3){
        break;
    }
    console.log(i); //here before check then checking
}
*/
//after print 3, then can`t repeat code
/*
for(let i = 1; i<=5; i++){
    console.log(i); //here before print then checking
    if(i == 3){
        break;
    }
}
*/

//continue statement - skip
/*
for(let i = 1; i<=5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}//skip 3

//i%2 = 0(odd number)
//i%2 = 1(even number)

for(let i = 1; i<=10; i++){
    if(i%2 == 1){
        continue;
    }
    console.log(i);
}//will be print without even number
*/
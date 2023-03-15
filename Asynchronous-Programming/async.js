//Synchronous Programming, by default js works Synchronously

//Asynchronous Programming - it's need for api system

//callback function
//use function as a parameter in a another function

/*
setTimeout(function(){
    console.log("Hello programmer");
}/, 5000);
*/

/*
//data from extrl[server]
let cars = [
    {brand: "toyta", price: 3000000},
    {brand: "bmw", price: 3500000},
    {brand: "audi", price: 5500000}
]

function createCars(car){
    setTimeout(function(){
        cars.push(car);
    },6000);
}

function getCar(){
    setTimeout(function(){
        let output = "";
        cars.forEach(function(car){
            output += `<li>${car.brand} ${car.price}</li>`
        })
        document.getElementById("output").innerHTML = output;
        
    },1000);
}
createCars({name: "Suvon", title: "Mali"});//it`s sync so can`t output creatCars();
getCar(); //here can't get new pushed value bcz it's print after 1s, but needed time to push 6s, so this problem solved by callback
*/

//---------------------------------------------------------------------------------------------------
//Covert synchronous process to asynchronous process to take helps callback function
/*
step1:add a parameter for callback work in createCars function
step2:call to getCar()-as-callback(); in createCars function
step3:pass as argu to getCar in calling createCars()

//data from extr[server]
let cars = [
    {brand: "toyta", price: 3000000},
    {brand: "bmw", price: 3500000},
    {brand: "audi", price: 5500000},
]

function createCars(car, callback){
    setTimeout(function(){
        cars.push(car);
        callback();
    },4000);
}

function getCar(){
    setTimeout(function(){
        let output = "";
        cars.forEach(function(car){
            output += `<li>${car.brand} ${car.price}</li>`
        })
        document.getElementById("output").innerHTML = output;
        
    },1000);
}
createCars({name: "Suvon", title: "Malik"}, getCar);//2 argu. pass
*/

//-------------------------------------------------------------------------------------------------
//Use Promises as a alternative callback
//Promises-es-6(resolve - success, reject - error)
//Promises returns .then

//data from extr[server]
let cars = [
    {brand: "toyta", price: 3000000},
    {brand: "bmw", price: 3500000},
    {brand: "audi", price: 5500000},
]

function creatCars(car){
   let prom = new Promise(function(resolve, reject){
       cars.push(car);
       //resolve();
       //take into cond. resolved() for err. message
         let error = false;
        if(!error){
          resolve();
       }else{
           reject(`Error!: something wrong!`);
       }
   });
   return prom;
}

function getCar(){
    setTimeout(function(){
        let output = "";
        cars.forEach(function(car){
            output += `<li>${car.brand} ${car.price}</li>`
        })
        document.getElementById("output").innerHTML = output;
        
    },1000);
}

//object call and - .then .catch
creatCars({name: "Suvon", title: "Malik"})
.then(getCar)
.catch(function(err){
    console.log(err);
});
//factory function
function homeAddress(state, city, zipcode){
    return{
        state: state, 
        city: city,
        zipcode: zipcode
    }
}
const home1 = homeAddress("WB", "kolkata", 7665);
console.log(home1);
const home2 = homeAddress("WB", "dumdum", 7660);
console.log(home2);

//now after comming es-6 constructor don't use factory function
//use constructor function which included class
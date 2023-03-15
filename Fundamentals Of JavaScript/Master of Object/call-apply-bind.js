//call-apply-bind
//working is same but have different uses

//bind - use object method from another object
//here used method of normalPerson in heroPerson function for example
const normalPerson = {
    fname: "pranab",
    lname: "malik",
    salary: 40000,
    getFullName: function(){
        console.log(this.fname, this.lname);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

//console.log(normalPerson);
//console.log(normalPerson.fname);

//normalPerson.chargeBill(150);
// normalPerson.chargeBill(5000);
// console.log(normalPerson.salary);


const heroPerson = {
    fname: "alik",
    lname: "malik",
    salary: 30000,
}

const fdPerson = {
    fname: "asikh",
    lname: "malik",
    salary: 35000,
}

// const heroPersonBill = normalPerson.chargeBill.bind(heroPerson); 
// heroPersonBill(1200);
// console.log(heroPersonBill(1200));
// console.log(heroPerson);

// const fdPersonBill = normalPerson.chargeBill.bind(fdPerson); 
// fdPersonBill(400);


//call
//direct action- but same thing like bind
// normalPerson.chargeBill.call(heroPerson, 1000);
// normalPerson.chargeBill.call(heroPerson, 1400);//for more argu. use apply for better
// console.log(heroPerson.salary);


//apply
//arguments pass as array
// normalPerson.chargeBill.apply(heroPerson, [1400]);//possible to give more para
// console.log(heroPerson.salary);

// normalPerson.chargeBill.apply(fdPerson, [500, 1000, 30]);//so have to change chargeBill method
// console.log(fdPerson.salary);
//nested array and accessing

// let arr1 = [10, 12, ["a", "b"], 8, 9];
// let access_b = arr1[2][1];
// console.log(access_b); //b

// let arr2 = [10, 12, ["a", ["hi", "hello"], "b"], 8, 9];
// let access_hi = arr2[2][1][0];
// console.log(access_hi); //hi

// let arrObj = [1, 2, ["a", "b"], {prop1: "item 1", prop2: "item 2"}];
// let access_item1 = arrObj[3]["prop1"];
//or
// let access_item1 = arrObj[3].prop1;
// console.log(access_item1); //item 1

// let arrObj2 = ["item1", "item2", {prop1: "item 1", prop2: [1, 2, ["a", "b"]]}];
// let access_a = arrObj2[2]["prop2"][2][0];
// console.log(access_a); //a

// let obj = {obj1: "object 1", obj2: "object 2", obj3: ["a", "b"]};
// let acces_b = obj["obj3"][1];
// console.log(acces_b); //b
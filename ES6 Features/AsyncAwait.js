//async-await-es6

//fetch
/*
fetch('http://api.icndb.com/jokes/random/5000')
.then(response => response.json())
.then(data => console.log(data));

console.log("i`m after promises, random codes"); //async by fetch
*/

//or better way
//async-await
//covert into promise using async keyword in function
async function getJokes(){
    let response = await fetch('http://api.icndb.com/jokes/random/5000');
    let data = await response.json();
    return data;
}

getJokes().then(jokes => console.log(jokes));

//async convert to promises
//async keyword for async process
//await keyword for wait

//2nd example
/*
async function loadData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}
loadData().then(data => {
    displayData(data);
});

function displayData(data){
    const parentNode = document.getElementById("myList");
    for(let i = 0; i<data.length; i++){
        const user = data[i];
        const item = document.createElement("li");
        item.innerText = user.name;
        parentNode.appendChild(item);
    }
}
*/
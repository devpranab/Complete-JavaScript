//Don`t run these code , use for notes with reference, if you want to run you need a html file
//Add
/*
//create the element
const ul = document.createElement("Giftlist");
let li = document.createElement("li");
li.innerHTML = "item 5";
ul.appendChild(li);

let olItem = document.createElement("li");
//create class 
olItem.className = "new-li";
//create id
olItem.id = "newLi";
//add attribute
olItem.setAttribute("title", "title to new li");
//appendChild means, add in element
olItem.appendChild(document.createTextNode("JS"));
console.log(olIem);
//ad in ol
document.querySelector("ol").appendChild(olitem);

//make this: <li><a href="https://www.fb.com">Click</a></li>
let ulItem = document.createElement("li");
let link = document.createElement("a");

link.appendChild(document.createTextNode("Facebook"));
link.setAttribute("href", "https://www.fb.com");

ulItem.appendChild(link);

document.querySelector("ul").appendChild(ulitem);
*/


/*
//Replace
//before create then replace
let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("New Heading"));
newHeading.className = "simple-class";

let oldHeading = document.querySelector("h3");

let parent = document.querySelector(".container");
//or
//let parent = oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);
*/

/*
//Remove
let listItems = document.querySelectorAll("li");
let lists = document.querySelector("ul");

listItems[0].remove();
listItems[1].remove();
listItems[4].remove();
*/

//removeChild
/*
let listItems = document.querySelectorAll("li");

listItems[0].remove();
listItems[3].remove();
console.log(listItems);

let ulItem = document.querySelectorAll("ul");

ulItem.removeChild(listItems[4]);

//new add class no overwrite if use with add
ulItem.classList.add("add-class-new")

ulItem.classList.remove("simple-class");

//check attribute have or not
let val = list.hasAttribute("title"); //return true or false
console.log(val);
*/
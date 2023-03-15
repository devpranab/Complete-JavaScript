/*Events of Javascript

Events object
multiple ways to set DOM event handler
4 ways of writing events in javascript
  1. using inline event alert();
  onclick="alert('onClick event triggered');"

  2. by calling a function
  onclick="handleClick();"

  function handleClick(){
  console.log("handleClick function cliked");
  }

  3. using inline events(HTML onclick="" property and element.onclick)
  <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

  4. using Event Listeners
  const demo = document.getElementById("demo");

  demo.addEventListener("click", displayDate);

  function displayDate() {
  document.getElementById("demo").innerHTML = Date();
  }

  //or
  demo.addEventListener("click", function(){});

  5. in html
  const btnTwo = document.getElementById("btnTwo");

  btnTwo.onClick = function(){
    console.log("");
  }
  //or
  function handleFunc(console.log("");){}
  const btnTwo = document.getElementById("btnTwo");

  btnTwo.onClick = handleFunc;

  MouseEvent | KeyboardEvent | InputEvent

 Timing based events
 setTimeout() - executes a function after waiting a specified number of milliseconds.
 setInterval() - same as setTimeout() but repeats the execution of the function continuously.
 clearTimeout() 
 clearInterval()

 Events lists: w3schools.com/JS/js_events
*/
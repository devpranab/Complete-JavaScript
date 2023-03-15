/*Ajax - asynchronous programming and xml
step1:new XMLHttpRequest();
step2:open
step3:onload/onprogress/onreadystatechange

get data without loading the page
   HTTP Statuses
    200:
    403: "Forbidden"
    404: "Not Found"
*/

document.getElementById("get_data").addEventListener("click", loadData);

function loadData(){
    //create XHR object (Xml Http Request)
    let xhr = new XMLHttpRequest();
    //open
    xhr.open("GET", "data.txt", true);
    //onload
    xhr.onload = function(){
}
    xhr.onload = function(){
        if(this.status === 200){
         // console.log(this.status);
          console.log(this.responseText);
          document.getElementById("output").innerHTML = `<p>${this.responseText}</p>`;
        }
    }
    
    xhr.send();
    console.log(xhr);
}

/*
//readystatechange and onprogress is alternative way of xhr.onload, same uses
xhr.onprogress = function(){ //use for loader
   //console.log(xhr.readyState);//3 no.
}

xhr.onreadystatechange = function(){
//console.log(xhr.readyState);
if(this.status === 200 && this.readyState === 4){
   console.log(this.responseText);
    //readyState Values
    //0: request not initialize
    //1: server connection established
    //2: request received
    //3: processing request
    //4: request finished & response is ready
}
*/
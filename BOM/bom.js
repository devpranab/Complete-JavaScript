//BOM - Browser Object Module
/*
Window--Navigator, Document, History, Screen, Location

console.log(navigator);
navigator.geolocation.getCurrentPosition((d) => {
    console.log(d);
},(e) => console.log(e));

console.log(history);
console.log(history.back());
console.log(Location);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.port);
console.log(location.href);
console.log(location.protocol);
*/

//back to previous page
function goBack() {
    window.history.back();
}

//replace site
const replaceSite = () => location.replace("https://yt.com");
/* Enter the code to remove the main node element under this comment */

var main = document.getElementById('main')
main.remove();

/* Create your new element here and assign it to newHeader */

const newHeader = document.createElement('h1');
newHeader.innerText = "Fiola is the champion!";
newHeader.setAttribute("id", "victory")
// next: find the body element
var body = document.querySelector('body')
// next: append the newHeader to the body
body.appendChild(newHeader)
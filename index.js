/* Enter the code to remove the main node element under this comment */
main.remove();
/* Create your new element here and assign it to newHeader */
var newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.innerText = "YOUR-NAME is the champion";

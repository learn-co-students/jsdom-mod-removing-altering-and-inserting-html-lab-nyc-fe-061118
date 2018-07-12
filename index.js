/* Enter the code to remove the main node element under this comment */

document.body.removeChild(document.querySelector('main'));


/* Create your new element here and assign it to newHeader */
let newHeader = document.createElement('h1')

newHeader.setAttribute("id", "victory");

newHeader.innerText = 'Hans is the champion';

document.body.appendChild(newHeader);



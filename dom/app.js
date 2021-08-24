'use strict';
var firstName,btn,handleClick;
firstName = document.getElementById("txtFirstName");
btn = document.getElementById("btn");

console.log(firstName.type);
console.log(firstName.id);
console.log(firstName.value);
firstName.className ="xyz";
firstName.type="text";
firstName.value="Kiran";

handleClick = function(){
    console.log("I am clicked");
}

btn.addEventListener("click",handleClick);


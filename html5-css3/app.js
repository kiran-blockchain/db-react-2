'use strict';
function first(){
    console.log("I am first")
}

var main = function (y){
   console.log(typeof y);
   y();
};

main(first);

function handleClick(){

    console.log("hey I am clicked");
}
/*
 x=30
function counter() {
   var x = 20;
    x++;
    if(true){
        let x=40;
        console.log("Inside block",x);
    }
    console.log("Inside Function",x);
}
counter();
console.log("Outside Func",x);
*/
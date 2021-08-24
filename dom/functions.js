var person = {
    firstName:"Kiran",
    lastName:"Paturi",
    languages :["English","Hindi","Telugu","abc"]
};

//accessing the props of an object;
// var x= person.firstName;
// var y=person["firstName"];
// var z = person["languages"];
// console.log(z);
// console.log(z[3]);

//Destructuring of an object.
let {firstName,lastName} = person;
console.log(firstName);
console.log(lastName);

//creating an object

let x ,y ,z;
x=10;
y=20;
z={x,y};
console.log(z);

//spread operator
let a = {...person,age:30};
console.log(a);
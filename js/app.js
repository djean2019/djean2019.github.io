/*
* filename: app.js
*/
"use strict";
//The way to use js is to use a host (an html page).
var firstName; //No block scope

/**
 * Linter (to do compiler check in js code)
 */
function doSomething(){
    for(var i=0; i<0; i++){
        var firstName;
    }
}

//const and let support block scope
const pi=3.14;
let lastName;
console.log("Hello CS472-WAP, welcome to JavaScript");
console.log(lastName);
lastName="HYPPOLITE  JEAN";
console.log(lastName);
// alert("Trying alert");

//losely type= dynamically type vs strongly type =statically type
// losely type means that type can change inside a program
let i;
i=0; // typeof i= number
i = "Hello"; // type inference

// Quirks - very many in JavaScript

let someVar = 1 + "1";
console.log(someVar);
someVar=1*"1";
console.log(someVar);

// == means compare using type-coercion
let one = 1;
let strOne = "1";
console.log(one == strOne);

// === means compare without using type-coercion

console.log(one === strOne);
// middleName="HAHAHA";         // works without use strict
// console.log(middleName);

//DOM = Document Object Model
const numbers =[];
numbers.push(1);
numbers.push(2);
numbers.push(3);
console.log(numbers);
//console.log(numbers.pop());
//console.log(numbers);

//Iteration in an array 
// 1- Imperative Programming style/paradigm
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
console.log("");
// 2- Functional Style
numbers.forEach(numb=>console.log(numb));
console.log("");
numbers.map(numb=>numb*2).forEach(n => console.log(n));
// numbers.sort()
// More info ---> MDN JavaScript
/**
 * personprof.js
 * @author O. Kalu
 */

 "use strict";
 
 // Object Litteral
 // all attributes are public. To make private, we should create module pattern 
const person={
    name:"",
    dateOfBirth:"",

    getName:function(){
        return this.name;
    },
    setName:function(value){
        this.name=value;
    },
    toString: function(){
        return `{name: ${this.name}, dateofBirth: ${this.dateOfBirth}}`;
    }
};
// ``(backtick)=> Template String expression
// Inheritance using Object.create(...)
const john = Object.create(person);  // person is the prototype for which john want to inherit
// john.name="John";
john.setName("John");
const date =new Date("1998-12-10");
const shortDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getUTCDate();
john.dateOfBirth=shortDate;

console.log("Inside Person");
console.log("=======================================");
// console.log(john.toString());
console.log(`The person's name is ${john.getName()}`);
console.log(`${john.name} was born on ${john.dateOfBirth}`);

// First way not good
let employee={
    salary:0.0,
    hireDate: new Date(),

    __proto__:person,
    doJob:function(title){
        console.log("========================================");
        console.log("Inside Employe");
        console.log("========================================");
        console.log(`${this.name} is a ${title} who earns $ ${this.salary}`);
    }
};

const anna = Object.create(employee);
anna.name="Anna";
anna.salary=249295.50;
anna.doJob("Programmer");

// Second way - Good
const employee1 = Object.create(person);
employee1.salary=0.0;
employee1.hireDay=new Date();
employee1.doJob = function(title){
    console.log("========================================");
    console.log("Inside Employe");
    console.log("========================================");
    console.log(`${this.getName()} is a ${title} who earns $ ${this.salary}`);
}

const anna1 = Object.create(employee1);
anna1.setName("Anna");
anna1.salary=249295.50;
anna1.doJob("Programmer");
// console.log(person); //to view that every object has a __proto__
// var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });
// console.log(formatter.format(this.salary));

// third way - good
const employee2 = Object.create(
    person,
    {
        salary:{value: 0.0},
        hireDay: {value: new Date()},
        doJob:{value: function(){
                console.log(`${this.getName()} is a ${title} who earns $ ${this.salary}`);
            }
        }
    }
);

// Constructor function
function Person(name, dateOfBirth) { //const Person =function(name, dateOfBirth){ //}
    this.name=name;
    this.dateOfBirth =dateOfBirth;
}
const peter = new Person("Peter", new Date(1985-11-10));
Person.prototype.toString = function(){
    return `{name: ${this.name}, dateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()}-${this.dateOfBirth.getUTCDate()}}`;
}
console.log("==========================")
console.log("Constructor Function")
console.log(peter.toString());

// // Module pattern
// const personModule = (function(){
//     let name="";
//     let dateOfDate="";
//     const getName= function(){
//         return name;
//     }
//     const setName= function(value){
//         name = value;
//     }
//     const getDateOfBirth= function(){
//         return name;
//     }
//     const setDateOfBirth= function(value){
//         dateOfBirth = value;
//     }
//     return{
//         getName:getName,
//         setName:setName,
//         getDateOfBirth:getDateOfBirth,
//         setDateOfBirth:setDateOfBirth
//     };
// })();

// const person1 = personModule;
// person1.setName("John");
// console.log("===============================");
// console.log("Inside Person Module");
// console.log("===============================");
// console.log(`Person's name is ${person1.getName()}`);

// Other ressources
// //Question 1
// console.log("---------------Q1 Answer------------------------");
// const person={
//     name:"",
//     dateOfBirth:"",
//     getName:()=>this.name,
//     setName:(newName)=>this.name=newName
// }
// const john=Object.create(person);
// john.setDateOfBirth=(dob)=>this.dateOfBirth=dob;
// john.getDateOfBirth=()=>{
//         const dob=new Date(this.dateOfBirth);
//             return (dob.getFullYear()+"-"+(dob.getMonth()+1)+"-"+dob.getDate());
// }
// john.setName("John");
// john.setDateOfBirth(new Date("December 10 1998"));
// console.log("The person's name is ${john.getName()}");
// console.log(john.getName()+ " was born "+john.getDateOfBirth());
// //Question 2
// console.log("---------------Q2 Answer------------------------");
// const employee=Object.create(person);
// employee.salary=0.0;
// employee.setSalary=(sal)=>employee.salary=sal;
// employee.hireDate=new Date();
// employee.doJob=(jobTitle)=>employee.getName()+" is a "+jobTitle+" who earns $"+employee.salary;
// const annaemp=Object.create(employee);
// annaemp.setName("Anna");
// annaemp.setSalary(249995.50);
// console.log(annaemp.doJob("Programmer"));
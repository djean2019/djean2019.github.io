/**
 * car.js
 * @author D. HYPPOLITE JEAN
 */

"use strict";
 
// Object Litteral
const car={
   make:"default",
   model:"default",
   color:"default",

   drive:function(speed){
       console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed}`);
   },
   stop:function(){
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);
    },
};

// Inheritance using Object.create(...)
const redHondaAccord = Object.create(car);  // person is the prototype for which john want to inherit
redHondaAccord.make="Honda";
redHondaAccord.model="Accord";
redHondaAccord.color="red";

console.log("==================");
console.log("Object Literal");
console.log("==================");
redHondaAccord.drive(200);

;

// Constructor function
const Car=function(make,model,color){
    this.make=make;
    this.model=model;
    this.color=color;

    let drive=function(speed){
        console.log(`The ${color} ${make} ${model} is driving at ${speed}`);
    };
    let stop=function(){
         console.log(`The ${color} ${make} ${model} is stopping`);
     };
     return{
         drive:drive,
         stop:stop
     }
 };
 
console.log("==================");
console.log("Constructor Function");
console.log("==================");

const redHondaAccord1=new Car("Honda","Accord","red");
redHondaAccord1.drive(300);

// Module pattern
const arraUtils = (function(){

    const multiplesCount=function(nums,b){
         return (nums.filter(a=>(a%b)===0)).length;
    }
    const reverseInPlace = function(nums){
        let num=[];
        let index=0;
        for(let i=nums.length-1;i>=0;i--){
            num[index]=nums[i];
            index++;
        }
        return num;
    }
    const nameArray = [];
    const printTheName = function(name) { 
        nameArray.push(name);
        console.log(nameArray);
    }; 
    
   return{
        reverseInPlace:reverseInPlace,
        multiplesCount:multiplesCount,
        printTheName: printTheName 
    
   };
})();
let a=[1,2,3,4,5,6];
console.log("====================");
console.log("Coding Part");
console.log("====================");
const count=arraUtils.multiplesCount(a,3);
console.log(count);
const rev = arraUtils.reverseInPlace(a);
console.log(rev);

arraUtils.printTheName("Anna H. Smith");
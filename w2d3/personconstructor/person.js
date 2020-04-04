const Person=function(name, dateOfBirth){
    this.name=name;
    this.dateOfBirth=dateOfBirth;
    constructor:Person;
         getName=function(){
            return this.name;
        },
        setName=function(value){
            this.name=value;
        }
};
const date =new Date("2018-12-10");
const shortDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();

const peter=new Person("Peter",shortDate);

peter.toString = function(){
    return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`;
}
console.log("==================================");
console.log("Person with constructor Function");
console.log("==================================");
console.log(peter.toString());
let person={
    name:"",
    dateOfBirth:"",

        getName:function(){
            return this.name;
         },
        setName:function(value){
            this.name=value;
        }
};
let john = Object.create(person);
john.name="John";
const date =new Date("2018-12-10");
const shortDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
john.dateOfBirth=shortDate;

console.log("Inside Person");
console.log("==============");
console.log(`The person's name is ${john.getName()}`);
console.log(`${john.name} was born on ${john.dateOfBirth}`);

let Employee={
    salary:0.0,
    hireDate: new Date(),

    getName:function(){
        return this.name;
        },
    setName:function(value){
        this.name=value;
    },
    __proto__:person,
    doJob:function(title){
        console.log("==============");
        console.log("Inside Employe");
        console.log("==============");
        console.log(`${this.name} is a ${title} who earns $ ${this.salary}`);
    }
};

const anna = Object.create(Employee);
anna.name="Anna";
anna.salary=249295.50;
anna.doJob("Programmer");

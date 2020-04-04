//ANSWER 10

const employee= (function(){
   let name='';
   let age=0;
   let salary=0.0;

    //Private methods
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }

   //Public methods
   return{
        setAge: function(newAge){
              age=newAge
        },
       setSalary: function(newSalary){
              salary=newSalary;
       },
       setName: function(newName){
              name=newName;
       },
       increaseSalary: function(percentage){
            let newSalary=  getSalary() * (1 + percentage/100);
            this.setSalary(newSalary);
       },
       incrementAge: function(){
           let newAge=getAge()+1;
           this.setAge(newAge);
       },
       getName:getName,

       getEmpInfo: function(){
           return `\nName: ${getName()}, \nAge: ${getAge()}, \nSalary: ${getSalary()}`
       }
   };
 
})();

employee.setAge(25);
employee.setName('John Smith');
employee.setSalary(125000.00);
console.log(`Employee Information is: ${employee.getEmpInfo()}`);
employee.incrementAge();
employee.increaseSalary(10);
console.log(`Updated Employee Information is: ${employee.getEmpInfo()}`);

//Q. 11
employee.address = "123 North Court Stree";
employee.getAddress = function(){
    return this.address;
}
employee.setAddress=function(newAddr){
    this.address = newAddr;
}
// New address
console.log(`${employee.getName()}'s address is ${employee.getAddress()}`);
// change their address to a new one
employee.setAddress("124 Southfield Drive");
console.log(`${employee.getName()}'s new address is ${employee.getAddress()}`);

//Employee.address  // does not add new property
// Employee.prototype.address = "new value"    // add new property
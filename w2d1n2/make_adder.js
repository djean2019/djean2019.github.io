const make_adder = function(inc){
    let counter = 0;
    return function(){
        counter+=inc;
        console.log(counter);
    }
};

const add5=make_adder(5);
add5();
add5();
add5();

let a="Physiology";
let conso=a.charAt(0).toLowerCase();
let i=1;
let nextChar=a.charAt(i);
while("aeiou".indexOf(nextChar) == -1) {
    conso += nextChar.toLowerCase();
    i++;
    nextChar=a.charAt(i);
    alert(conso);
}
let newText="";
newText = newText.concat(a.charAt(i).toUpperCase(), a.substring(i+1), conso, "ay", " ");
                  
alert(newText);
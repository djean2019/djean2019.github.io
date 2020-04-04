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

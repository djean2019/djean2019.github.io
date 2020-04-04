var count = (function() {
    var counter = 0;    
    // function make_adder(inc){
    //     return counter+=inc;
    // }
    return {
        // add1: function(inc) {
        //   return make_adder(inc); // q. 8
        // },
  
        add: function() {
            return counter+=1; // counter is a free varaible
          },
        
      reset: function() {
        return counter=0;
      },
  
      value: function() {
        return counter;
      }
    };
  })();

  console.log(count.value());  // 0.
 
  count.add();
  count.add();
  count.add();
  console.log(count.value());  // 3.
  
  count.reset();
  console.log(count.value());  // 0.

//   count.add1(5);
//   count.add1(5);
//   count.add1(5);
//   console.log(count.value());  // 15.
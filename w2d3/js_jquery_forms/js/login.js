
// $("#loginForm").submit((evt)=>{
//         evt.preventDefault();
//         console.log("Email: "+ $('#emailAddress').prop('value'));
//         console.log("Password: "+ $("#password").prop('value'));
//         console.log("Web site: " + $("#website").prop('value'));
//         console.log("Cheked: " + $("#checkout").prop('checked'));

//     }
// );

// Other way
$(document).ready(
    function(){
        $("#loginForm").submit(
            function(evt){
                evt.preventDefault();
                console.log("Email: "+ $('#emailAddress').val());
                console.log("Password: "+ $("#password").val());
                console.log("Web site: " + $("#website").val());
                console.log("Cheked: " + $("#checkout").prop('checked'));
        
            }
        );
    }
)
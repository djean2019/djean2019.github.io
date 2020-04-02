
$("#loginForm").submit((evt)=>{
        evt.preventDefault();
        console.log("Email: "+ $('#emailAddress').prop('value'));
        console.log("Password: "+ $("#password").prop('value'));
        console.log("Web site: " + $("#website").prop('value'));
        console.log("Cheked: " + $("#checkout").prop('checked'));

    }
);

// With input, button type and onclik function

// function onConsole()
// {
//     let emailA = document.getElementById('emailAddress').value;
//     let pwd = document.getElementById('password').value;
//     let web = document.getElementById('website').value;
//     let check = document.getElementById('checkout').checked;
    
//     console.log("Email: " + emailA);
//     console.log("Password: " + pwd);
//     console.log("Web site: " + web);
//     console.log("Checking: " + check);
    
// }
// $(function(){
//     $("#bthSubmit").on('click',function(){
//         console.log(documet.getElementById("website").value);
//     })
// });

// with input and submit type
document.getElementById("loginForm").addEventListener(
    "submit",
    function(event){
        event.preventDefault();
        console.log(`Email: ${document.getElementById("emailAddress").value}`);
        console.log(`Password: ${document.getElementById("password").value}`);
        console.log(`Web site: ${document.getElementById("website").value}`);
        console.log(`Cheked: ${document.getElementById("checkout").checked}`);
        // console.log(event.target);
    }
);
function onConsole()
{
    let emailA = document.getElementById('emailAddress').value;
    let pwd = document.getElementById('password').value;
    let web = document.getElementById('website').value;
    let check = document.getElementById('checkout').checked;
    
    console.log("Email: " + emailA);
    console.log("Password: " + pwd);
    console.log("Web site: " + web);
    console.log("Checking: " + check);
    
}
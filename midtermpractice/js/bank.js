/**
 * bank.js
 * 
 * @Author : Darphe HYPPOLITE JEAN
 */
"use strict"

// $(document).ready(
//     function(){
//         let account=[];
//         let index=0;
//         $(bankForm).submit(
//             function(evt){
//                 evt.preventDefault();
//                 let num=$("#accountNum").val()
//                 let find=false;
//                 for(let i=0;i<account.length;i++){
//                     if(account[i]===num){
//                         find=true;
//                         alert("Account creation impossible. Duplicate account number!");
//                         $("#accountNum").select();
//                         return;
//                     }
//                 }
//                 if(find===false){
//                     account[index]=num;
//                     index++;
//                     let newAccount= $("#accountNum").val() +" | "+ $("#custName").val() + " | " + $("#acctType").val();
//                     $("#listAccount").append('<li>'+newAccount+'</li>');

//                     $("<p>", { "id": "myid", "class": "special", "text": "My paragraph is awesome!" });
//                }
//             }
//         )
//     }
// );

$(listSubmit).click(getAccounts);

function getAccounts(){
    fetch("accounts.json")
    .then((response) => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject({status: response.status, statusText: response.statusText});
        }
    })
    .then(accounts => {
        let content = "";
        accounts.forEach(function(account, i) {
            content +=`
                <tr>
                    <th scope="row">${i+1}.</th>
                    <td>${account.accountNumber}</td>
                    <td>${account.cutomerName}</td>
                    <td>${account.accountType}</td>
                   
                </tr>
            `            
        });
        document.querySelector("#tbody").innerHTML = content;
    })
    .catch(err => {
        console.log("Error message: ",err.statusText);
        document.getElementById("#accountList").innerHTML="<p style='color:red'>"+err.statusText+"</p>";
    })
}

document.getElementById("bankForm").addEventListener("submit",
    function(evt){
        evt.preventDefault();
        const accountNumber = document.querySelector("#accountNum").value;
        const customerName = document.querySelector("#custName").value;
        const accountType = document.querySelector("#acctType").value;

        const newAccount = {
            "accountNumber": accountNumber,
            "cutomerName": customerName,
            "accountType": accountType,
        };

        fetch("accounts.json",
            {
                method: "post",
                body: JSON.stringify(newAccount),
                headers:{
                    "Content-Type": "application/json"
                }
        }).then(function(response){
            return response.json();
        }).then(function(jsonReponse){
            console.log(jsonReponse);
            document.querySelector("#accountNum").value="";
            document.querySelector("#custName").value="";
            document.querySelector("#acctType").value="";
            document.querySelector("#accountNum").focus();
            alertMessageBox.style.display = "inline-block";
        }).catch(function(e){
            console.error(e);
            alertMessageBox.classList.remove("alert-success");
            alertMessageBox.classList.add("alert-danger");
            alertMessageBox.style.display = "inline-block";
        })
    }
);
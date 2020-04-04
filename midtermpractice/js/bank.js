$(document).ready(
    function(){
        let account=[];
        let index=0;
        $(bankForm).submit(
            function(evt){
                evt.preventDefault();
                let num=$("#accountNum").val()
                let find=false;
                for(let i=0;i<account.length;i++){
                    if(account[i]===num){
                        find=true;
                        alert("Account creation impossible. Duplicate account number!");
                        $("#accountNum").select();
                        return;
                    }
                }
                if(find===false){
                    account[index]=num;
                    index++;
                    let newAccount= $("#accountNum").val() +" | "+ $("#custName").val() + " | " + $("#acctType").val();
                    $("#listAccount").append('<li>'+newAccount+'</li>');
               }
            }
        )
    }
);
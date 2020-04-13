/**
 * census.js
 * 
 * @Author : Darphe HYPPOLITE JEAN
 */
"use strict"

setInterval(() => {
    let today = new Date();
    let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        let day = weekdays[today.getDay()];

    let date = day+", "+today.getDate()+" "+today.toLocaleString('default', { month: 'long' })+' '+today.getFullYear();
    let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
   
    let dateTime=date+'-'+time;
    document.getElementById("dat").innerHTML=dateTime;
}, 1000);

$(document).ready(
    function(){
        
        $(censusForm).submit(
            function(evt){
                evt.preventDefault();
                    let fullName= $("#fullname").val();
                    let idCitizen= $("#citizenId").val();
                    let socialSec = $("#ssn").val();
                    let stat = $("#state").val();
                    let senior = $("input[name='seniorcitizen']:checked").val();
                     if(stat===""){
                        alert("Select a state.");
                        return;
                    }
                    if(!senior){
                        alert("Select a value for the senior citizen.");
                        return;
                    }
                    
                    $('#myTable').append('<tr><td>'+fullName+'</td><td>'+idCitizen+'</td><td>'+socialSec+'</td><td>'+stat+'</td><td>'+senior+'</td></tr>');

            }
        )
    }
);

// (function(){
//     //Display ticking DateTime clock using JS timer
//     const p = document.getElementById("currDateTime");
//     setInterval(
//         function(){
//             p.textContent
//         }
//     )
// }()
// );
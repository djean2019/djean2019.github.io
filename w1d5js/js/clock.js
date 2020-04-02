setInterval(() => {
    let today = new Date();
    let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    let dateTime=date+' '+time;
    document.getElementById("dat").innerHTML=dateTime;
}, 1000);

/**
 * 
 */
//setTimout example
 function readTime(){
     let n =new Date();
     let t=`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()} ${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`;

     document.getElementById('dat').innerHTML = t;
     setTimeout(readTime,1000);
 }

 //setInterval example
(function(){
    //Display ticking DateTime clock using JS timer
    const p = document.getElementById("currDateTime");
    setInterval(
        function(){
            p.textContent
        }
    )
}()
);
 //setTimeout vs setInterval
 //setTimeout is called only one time, so, you should call it inside a function
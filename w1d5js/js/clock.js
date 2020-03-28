setInterval(() => {
    let today = new Date();
    let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    let dateTime=date+' '+time;
    document.getElementById("dat").innerHTML=dateTime;
}, 1000);
// AUTHOR: Darphe HYPPOLITE JEAN

window.onload = function () {
    const okButton1 = document.getElementById("ok1");
    okButton1.onclick = timer;

    const checkB = document.getElementById("bling");
    checkB.onchange = onChange;
   
    let changeFont = false ;

    //Pop up message and fonsize changing
    function okayClick() {
        // alert("Hello, world!");
        const changeText = document.getElementById("tArea");
        
        if (!changeFont) {
            changeText.style.fontSize = "24pt" ;
            changeFont = true ;
        }
        else {
            changeText.style.fontSize = "100%" ;
            changeFont = false ;
        }
    }
    // Function Timer
    function timer(){
        setInterval(increaseFontSizeBy2px,500);
    }

    function increaseFontSizeBy2px() {
        const changeText = document.getElementById('tArea');
        const style = window.getComputedStyle(changeText, null).getPropertyValue('font-size');
        currentSize = parseInt(style);
        changeText.style.fontSize = (currentSize + 2) + 'px';
    }
    //Pop up message and text changing on checked
    function onChange(){
        // alert("The text value is about changing.")
        const changeText = document.getElementById("tArea");
     
        if (checkB.checked==true) {
            document.body.style.backgroundImage="url('hundred-dollar-bill.jpg')";
            changeText.style.fontWeight="bold";
            changeText.style.color ="green";
            changeText.style.textDecoration="underline";
        }
        else {
            document.body.style.backgroundImage="url('')";
        changeText.style.fontWeight="normal";
            changeText.style.color="black";
            changeText.style.textDecoration="none";
        }
    }

     // Pig Latin
    const okButton2 = document.getElementById("ok2");
        okButton2.onclick=igpayAtinlay;

    // const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let visited = false;
    function igpayAtinlay(){
        let igPay;
        if(visited===false){
            let words = document.getElementById('tArea').innerHTML;
            igPay=words.trim().split(/\s+/);
            visited =true;
        }
        else{
            let words = document.getElementById('tArea').innerHTML;
            igPay=words.trim().split(',');
        }
        for(let i=0;i<igPay.length;i++){
            let w=igPay[i];
            for(let i=0;i<w.length;i++){
                let c=w.charAt(0);
                if(c==='a'||c==='e'||c==='i'||c==='o'||c==='u'||c==='A'||c==='E'||c==='I'||c==='O'||c==='U'){
                    
                }
                else{
                    w=w.substring(1)+c.toLocaleLowerCase();
                }
            }
            igPay[i]=w+"ay";  
        }
        document.getElementById('tArea').innerHTML=igPay;
    }

    const btnOk3=document.getElementById("ok3")
    btnOk3.onclick =malkov;

    function malkov() {
        let wordsArray
        if(visited===false){
            let words = document.getElementById('tArea').innerHTML;
            wordsArray=words.trim().split(/\s+/);
            visited=true;
        }
        else{
            let words = document.getElementById('tArea').innerHTML;
            wordsArray=words.trim().split(',');
        }
        let malkovArray=[];

        for(let i=0;i<wordsArray.length;i++){
           
            if(wordsArray[i].length>=5){
                malkovArray[i]='Malkovich';
            }
            else{
                malkovArray[i]=wordsArray[i];
            }
        }
        document.getElementById('tArea').innerHTML=malkovArray;
    }

};


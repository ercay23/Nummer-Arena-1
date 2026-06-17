let lang="tr";
let score=0;
let combo=1;
let target=0;
let numbers=[];

function setLang(l){
    lang=l;
    document.getElementById("langScreen").style.display="none";
    document.getElementById("game").style.display="block";
    newRound();
}

function randomSmall(){
    return Math.floor(Math.random()*9)+1;
}

function randomBig(){
    let arr=[];
    for(let i=25;i<=100;i+=5) arr.push(i);
    return arr[Math.floor(Math.random()*arr.length)];
}

function newRound(){

    numbers=[];
    for(let i=0;i<5;i++) numbers.push(randomSmall());
    numbers.push(randomBig());

    target=Math.floor(Math.random()*900)+100;

    document.getElementById("targetNumber").innerText=target;

    let box=document.getElementById("numbers");
    box.innerHTML="";

    numbers.forEach(n=>{
        let d=document.createElement("div");
        d.innerText=n;
        box.appendChild(d);
    });
}

function checkAnswer(){

    let expr=document.getElementById("expression").value;

    if(!/^[0-9+\-*/().\s]+$/.test(expr)){
        alert("Hatalı karakter");
        return;
    }

    try{
        let result=eval(expr);
        let diff=Math.abs(target-result);

        let gain=0;

        if(diff==0){gain=20*combo;combo++;}
        else if(diff==1){gain=10;combo=1;}
        else if(diff==2){gain=5;combo=1;}
        else combo=1;

        score+=gain;

        document.getElementById("score").innerText=score;

        document.getElementById("result").innerText=
        "Sonuç:"+result+" Fark:"+diff+" +"+gain;

    }catch{
        alert("Hata");
    }
}

newRound();

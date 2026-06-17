const mainContainer = document.getElementById("balls");
const resultContainer = document.getElementById("results");

let numbers = [2,4,7,8,9,75];
let results = [];

let selected = null;
let operation = null;

/* 🌍 LANGUAGE SYSTEM */
let texts = {
    tr:{title:"NUMBER ARENA", sub:"SAVAŞA HAZIR MISIN?"},
    en:{title:"NUMBER ARENA", sub:"ARE YOU READY?"},
    de:{title:"NUMBER ARENA", sub:"BIST DU BEREIT?"},
    fr:{title:"NUMBER ARENA", sub:"ES-TU PRÊT?"}
};

function setLang(l){
    document.getElementById("title").innerText = texts[l].title;
    document.getElementById("subtitle").innerText = texts[l].sub;
}

/* 🎬 START GAME */
function startGame(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    render();
}

/* 🎮 GAME */
function render(){

    mainContainer.innerHTML="";
    resultContainer.innerHTML="";

    numbers.forEach(n=>{
        let b=document.createElement("div");
        b.className="ball";
        b.innerText=n;
        b.onclick=()=>select(n);
        mainContainer.appendChild(b);
    });

    results.forEach(r=>{
        let b=document.createElement("div");
        b.className="ball result";
        b.innerText=r;
        b.onclick=()=>select(r);
        resultContainer.appendChild(b);
    });
}

function select(v){

    if(!selected){
        selected=v;
        return;
    }

    if(!operation){
        alert("Select operation!");
        return;
    }

    let a=selected,b=v,res=0;

    if(operation==="+")res=a+b;
    if(operation==="-")res=a-b;
    if(operation==="*")res=a*b;
    if(operation==="/")res=a/b;

    numbers=numbers.filter(x=>x!==a&&x!==b);
    results=results.filter(x=>x!==a&&x!==b);

    results.push(res);

    selected=null;
    operation=null;

    render();
}

window.setOp=function(op){
    operation=op;
};

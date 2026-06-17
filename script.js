let numbers=[2,4,7,8,9,75];
let results=[];

let selected=null;
let op=null;
let score=0;

let lang="tr";

/* 🌍 LANG */
function setLang(l){
    lang=l;

    const text={
        tr:"SAVAŞA HAZIR MISIN?",
        en:"READY FOR BATTLE?",
        de:"BIST DU BEREIT?",
        fr:"PRÊT POUR LE COMBAT?"
    };

    document.getElementById("speech").innerText=text[l];
}

/* 🎬 START */
function startGame(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    render();
}

/* 🎮 RENDER */
function render(){

    let m=document.getElementById("main");
    let r=document.getElementById("res");

    m.innerHTML="";
    r.innerHTML="";

    document.getElementById("score").innerText="Score: "+score;

    numbers.forEach(v=>{
        let d=document.createElement("div");
        d.className="ball";
        d.innerText=v;
        d.onclick=()=>select(v);
        m.appendChild(d);
    });

    results.forEach(v=>{
        let d=document.createElement("div");
        d.className="ball result";
        d.innerText=v;
        d.onclick=()=>select(v);
        r.appendChild(d);
    });
}

/* 🧠 GAME */
function select(v){

    if(!selected){
        selected=v;
        return;
    }

    if(!op) return;

    let a=selected,b=v,res=0;

    if(op==="+")res=a+b;
    if(op==="-")res=a-b;
    if(op==="*")res=a*b;
    if(op==="/")res=a/b;

    numbers=numbers.filter(x=>x!==a&&x!==b);
    results.push(res);

    score+=10;

    selected=null;
    op=null;

    render();
}

/* ➕ OP */
function setOp(o){
    op=o;
}

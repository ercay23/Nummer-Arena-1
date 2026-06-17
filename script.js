let numbers=[2,4,7,8,9,75];
let results=[];
let selected=null;
let op=null;

let score=0;
let lb=JSON.parse(localStorage.getItem("lb")||"[]");
let premium=false;

/* 🔊 SOUND */
function beep(f){
    let ctx=new (window.AudioContext||window.webkitAudioContext)();
    let o=ctx.createOscillator();
    let g=ctx.createGain();
    o.frequency.value=f;
    g.gain.value=0.1;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime+0.1);
}

/* 👨‍🏫 SPEECH */
function speak(t){
    document.getElementById("speech").innerText=t;
}

/* 🎬 START */
function startGame(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    speak("Arena başladı!");
    render();
}

/* 💰 UPGRADE */
function upgrade(){
    premium=true;
    document.getElementById("user").innerText="PREMIUM USER";
}

/* 🎮 RENDER */
function render(){
    let b=document.getElementById("balls");
    let r=document.getElementById("results");
    b.innerHTML=""; r.innerHTML="";
    document.getElementById("score").innerText=score;

    numbers.forEach(n=>{
        let d=document.createElement("div");
        d.className="ball";
        d.innerText=n;
        d.onclick=()=>select(n);
        b.appendChild(d);
    });

    results.forEach(n=>{
        let d=document.createElement("div");
        d.className="ball result";
        d.innerText=n;
        d.onclick=()=>select(n);
        r.appendChild(d);
    });
}

/* 🧠 LOGIC */
function select(v){
    beep(200);

    if(!selected){selected=v;return;}
    if(!op){speak("Önce işlem seç!");return;}

    let a=selected,b=v,res=0;

    if(op==="+")res=a+b;
    if(op==="-")res=a-b;
    if(op==="*")res=a*b;
    if(op==="/")res=a/b;

    numbers=numbers.filter(x=>x!==a&&x!==b);
    results.push(res);

    score+=10;
    selected=null; op=null;

    render();
}

/* ➕ OP */
function setOp(o){
    op=o;
    beep(350);
}

/* 🏁 FINISH */
function finish(){
    lb.push(score);
    lb.sort((a,b)=>b-a);
    lb=lb.slice(0,10);
    localStorage.setItem("lb",JSON.stringify(lb));
    openScores();
}

/* 🏆 SCORES */
function openScores(){
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("scoreScreen").classList.remove("hidden");

    let l=document.getElementById("list");
    l.innerHTML="";

    lb.forEach((s,i)=>{
        let d=document.createElement("div");
        d.innerText=(i+1)+". "+s;
        l.appendChild(d);
    });
}

function back(){
    location.reload();
}

/* 💬 CHAT */
function send(){
    let i=document.getElementById("input");
    let m=document.getElementById("msgs");

    let d=document.createElement("div");
    d.innerText="You: "+i.value;
    m.appendChild(d);

    i.value="";
}

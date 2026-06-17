let numbers = [2,4,7,8,9,75];
let results = [];

let selected = null;
let op = null;
let score = 0;

/* 🎯 TARGET (3 basamaklı artık var) */
let target = generateTarget();

/* 🎯 TARGET ÜRET */
function generateTarget(){
    return Math.floor(100 + Math.random() * 900); // 100–999
}

/* 🎮 RENDER */
function render(){

    const main = document.getElementById("main");
    const res = document.getElementById("res");

    main.innerHTML = "";
    res.innerHTML = "";

    document.getElementById("score").innerText =
        "Score: " + score + " | Target: " + target;

    numbers.forEach(n=>{
        let d = document.createElement("div");
        d.className = "box";
        d.innerText = n;
        d.onclick = ()=>select(n);
        main.appendChild(d);
    });

    results.forEach(n=>{
        let d = document.createElement("div");
        d.className = "box result";
        d.innerText = n;
        d.onclick = ()=>select(n);
        res.appendChild(d);
    });
}

/* 🧠 SELECTION */
function select(v){

    if(selected === null){
        selected = v;
        return;
    }

    if(!op) return;

    let a = selected;
    let b = v;
    let r = 0;

    if(op==="+") r = a + b;
    if(op==="-") r = a - b;
    if(op==="*") r = a * b;
    if(op==="/") r = a / b;

    numbers = numbers.filter(x=>x!==a && x!==b);
    results.push(r);

    score += 10;

    selected = null;
    op = null;

    /* 🎯 WIN CHECK */
    if(Math.round(r) === target){
        setTimeout(()=>{
            alert("🎉 TARGET HIT!");
            resetGame();
        },100);
    }

    render();
}

/* ➕ OP */
function setOp(o){
    op = o;
}

/* 🔁 RESET ROUND */
function resetGame(){
    numbers = [2,4,7,8,9,75];
    results = [];
    selected = null;
    op = null;
    target = generateTarget();
    render();
}

/* 🚀 INIT */
render();

let numbers = [2,4,7,8,9,75];
let results = [];

let selected = null;
let op = null;
let score = 0;

function render(){
    const main = document.getElementById("main");
    const res = document.getElementById("res");

    main.innerHTML = "";
    res.innerHTML = "";

    document.getElementById("score").innerText = "Score: " + score;

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

    render();
}

function setOp(o){
    op = o;
}

render();

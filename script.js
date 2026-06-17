const mainContainer = document.getElementById("balls");
const resultContainer = document.getElementById("results");

let numbers = [2,4,7,8,9,75];
let results = [];

let selected = null;
let operation = null;

/* 🎬 FLOW CONTROL */
function startGame(){
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("tutorialScreen").classList.remove("hidden");
}

function goGame(){
    document.getElementById("tutorialScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    render();
}

/* 🎮 GAME ENGINE */
function render(){

    mainContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    numbers.forEach(n=>{
        const ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = n;
        ball.onclick = ()=>select(n);
        mainContainer.appendChild(ball);
    });

    results.forEach(r=>{
        const ball = document.createElement("div");
        ball.className = "ball result";
        ball.textContent = r;
        ball.onclick = ()=>select(r);
        resultContainer.appendChild(ball);
    });
}

function select(value){

    if(!selected){
        selected = value;
        return;
    }

    if(!operation){
        alert("Önce işlem seç!");
        return;
    }

    let a = selected;
    let b = value;
    let res = 0;

    if(operation==="+") res = a+b;
    if(operation==="-") res = a-b;
    if(operation==="*") res = a*b;
    if(operation==="/") res = a/b;

    numbers = numbers.filter(x=>x!==a && x!==b);
    results = results.filter(x=>x!==a && x!==b);

    results.push(res);

    selected = null;
    operation = null;

    render();
}

window.setOp = function(op){
    operation = op;
};

render();

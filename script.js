const mainContainer = document.getElementById("balls");
const resultContainer = document.getElementById("results");

let numbers = [2,4,7,8,9,75];
let results = [];

let selected = null;
let operation = null;

function render(){

    mainContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    // 🔵 MAIN
    numbers.forEach((n)=>{

        const ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = n;

        if(n >= 10) ball.classList.add("big");

        ball.onclick = () => select(n);

        mainContainer.appendChild(ball);
    });

    // 🟣 RESULTS
    results.forEach((r)=>{

        const ball = document.createElement("div");
        ball.className = "ball result";
        ball.textContent = r;

        ball.onclick = () => select(r);

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
    let result = 0;

    if(operation === "+") result = a + b;
    if(operation === "-") result = a - b;
    if(operation === "*") result = a * b;
    if(operation === "/") result = a / b;

    numbers = numbers.filter(x => x !== a && x !== b);
    results = results.filter(x => x !== a && x !== b);

    results.push(result);

    selected = null;
    operation = null;

    render();
}

window.setOp = function(op){
    operation = op;
};

render();

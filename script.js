const container = document.getElementById("balls");

let numbers = [2,4,7,8,9,75];
let results = []; // 🟣 ARA SONUÇ HAVUZU

let selected = null;
let operation = null;

function render(){

    container.innerHTML = "";

    // 🔵 ANA HAVUZ
    numbers.forEach((n)=>{

        const ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = n;

        if(n >= 10) ball.classList.add("big");

        ball.onclick = () => handleClick(n, ball, "main");

        container.appendChild(ball);
    });

    // 🟣 ARA SONUÇ HAVUZU
    results.forEach((r)=>{

        const ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = r;

        // farklı renk
        ball.style.background = "radial-gradient(circle at 30% 30%, #a855f7, #6b21a8)";
        ball.style.boxShadow = "0 0 20px rgba(168,85,247,0.8)";

        ball.onclick = () => handleClick(r, ball, "result");

        container.appendChild(ball);
    });
}

function handleClick(value, el, type){

    if(!selected){
        selected = value;
        el.style.transform = "scale(1.2)";
        el.style.boxShadow = "0 0 30px #00e5ff";
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

    // ❌ SADECE KULLANILANLARI SİL (hangi havuzdan geldiğine göre)
    numbers = numbers.filter(x => x !== a && x !== b);
    results = results.filter(x => x !== a && x !== b);

    // 🟣 SONUÇ HER ZAMAN ARA HAVUZA
    results.push(result);

    selected = null;
    operation = null;

    render();
}

// işlem seçimi
window.setOp = function(op){
    operation = op;
};

render();

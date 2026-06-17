const container = document.getElementById("balls");

let numbers = [2,4,7,8,9,75];

let selected = null;
let operation = null;

function createBalls(){

    container.innerHTML = "";

    numbers.forEach((n)=>{

        const ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = n;

        if(n >= 10) ball.classList.add("big");

        ball.onclick = () => {

            // 1. seçim
            if(!selected){
                selected = n;
                ball.style.transform = "scale(1.2)";
                ball.style.boxShadow = "0 0 30px #00e5ff";
                return;
            }

            // işlem yoksa dur
            if(!operation){
                alert("Önce işlem seç (+ - × ÷)");
                return;
            }

            let a = selected;
            let b = n;
            let result = 0;

            if(operation === "+") result = a + b;
            if(operation === "-") result = a - b;
            if(operation === "*") result = a * b;
            if(operation === "/") result = a / b;

            // eski sayıları sil
            numbers = numbers.filter(x => x !== a && x !== b);

            // sonucu ekle
            numbers.push(result);

            // reset
            selected = null;
            operation = null;

            createBalls();
        };

        container.appendChild(ball);
    });
}

// ➕➖✖️➗ seçimi
window.setOp = function(op){
    operation = op;
};

createBalls();

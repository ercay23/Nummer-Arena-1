const container = document.getElementById("balls");

let selected = null;
let numbers = [2,4,7,8,9,75];

function createBalls(){

    container.innerHTML = "";

    numbers.forEach((n,i)=>{

        const ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = n;

        if(n >= 10) ball.classList.add("big");

        // 🎯 DRAG START
        ball.draggable = true;

        ball.ondragstart = (e)=>{
            selected = n;
            e.dataTransfer.setData("text", n);
        };

        // 🟢 DROP ZONE
        ball.ondragover = (e)=>{
            e.preventDefault();
        };

        ball.ondrop = (e)=>{
            e.preventDefault();

            const a = selected;
            const b = n;

            console.log("drag:", a, b);
        };

        container.appendChild(ball);
    });
}

createBalls();

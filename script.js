const numbers = [2,4,7,8,9,75];

const container = document.getElementById("balls");

numbers.forEach(number => {

    const ball = document.createElement("div");

    ball.className = "ball";

    ball.textContent = number;

    container.appendChild(ball);

});

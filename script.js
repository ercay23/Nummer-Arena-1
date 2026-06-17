const container = document.getElementById("balls");

// 🎲 OYUN SAYILARI
const numbers = [2, 4, 7, 8, 9, 75];

function createBalls() {

    container.innerHTML = "";

    numbers.forEach((number, i) => {

        const ball = document.createElement("div");

        ball.className = "ball";

        ball.textContent = number;

        // 🟠 büyük sayı kontrolü
        if (number >= 10) {
            ball.classList.add("big");
        }

        // ⬇️ başlangıç (ekrana gelmeden önce yukarıda)
        ball.style.opacity = "0";
        ball.style.transform = "translateY(-300px) scale(0.5)";

        // 🎯 tıklama efekti
        ball.onclick = () => {
            ball.style.transform = "scale(1.2)";
            setTimeout(() => {
                ball.style.transform = "scale(1)";
            }, 150);
        };

        container.appendChild(ball);

        // ⬇️ DÜŞME ANİMASYONU (GARANTİ)
        setTimeout(() => {
            ball.style.transition = "0.6s ease-out";
            ball.style.opacity = "1";
            ball.style.transform = "translateY(0) scale(1)";
        }, i * 120);
    });
}

createBalls();

console.log("Number Arena: balls loaded");

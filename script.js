const container = document.getElementById("balls");

// 🎲 sayılar
const numbers = [2, 4, 7, 8, 9, 75];

function createBalls() {

    container.innerHTML = "";

    numbers.forEach(number => {

        const ball = document.createElement("div");

        ball.className = "ball";

        ball.textContent = number;

        // 🔶 büyük sayılar (2-3 basamaklı)
        if (number >= 10) {
            ball.classList.add("big");
        }

        // 🎯 tıklama efekti
        ball.onclick = () => {
            ball.style.transform = "scale(1.2)";
            setTimeout(() => {
                ball.style.transform = "scale(1)";
            }, 150);
        };

        container.appendChild(ball);
    });
}

createBalls();

console.log("Number Arena script çalışıyor");

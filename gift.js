const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", () => {
    const toast = document.querySelector(".toast");
    toast.style.display = "block";
    confetti({
        particleCount: 100,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 100,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });
    const msgBtn = document.getElementById("msgBtn");
    msgBtn.addEventListener("click", () => {
        window.location.href = "lastMsg.html";
    })
}));
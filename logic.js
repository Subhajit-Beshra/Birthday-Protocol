function startProtocol() {
    document.querySelector(".start-screen").style.display = "none"; // ✅
    document.querySelector(".intro").style.display = "flex";        // flex, not inline-block
    typeWriter();
}
const messages = [          // ✅ consistent name
    "HI, It's Subhajit!\n\n",
    "Hope you're well\n\n",
    "I don't know whether you'll like it or not\n\n",
    "But....I hope you'll like it!🙂"
];

let msgIndex = 0;
let charIndex = 0;
let currentMsg = "";

function typeWriter() {
    if (msgIndex < messages.length) {
        if (charIndex < messages[msgIndex].length) {   // ✅ fixed
            currentMsg += messages[msgIndex].charAt(charIndex);
            document.getElementById("intro-text").innerText = currentMsg;
            playTypeSound();
            charIndex++;
            setTimeout(typeWriter, 80);
        } else {
            msgIndex++;
            charIndex = 0;
            // currentMsg = "";      // optional: clears text between messages
            setTimeout(typeWriter, 1000);
        }
    } else {
        document.getElementById("nextBtn").style.display = "block";
        document.getElementById("nextBtn").addEventListener("click", () => {
            window.location.href = "world.html";
        })
    }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTypeSound() {

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // random click variation
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(
        700 + Math.random() * 200,
        audioCtx.currentTime
    );

    // make it sharper
    filter.type = "highpass";
    filter.frequency.setValueAtTime(500, audioCtx.currentTime);

    // quick punch
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.03
    );

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.03);
}
const messages = [
    "Lastly I wanna say\n\n",
    "Your happiness matters a lot\n\n",
    "But there will be somedays when you feel like you're alone\n\n",
    "And then you should not break down\n\n",
    "Cause, everything has a limit\n\n",
    "So, it is valid for your bad times too!\n\n",
    "I don't know what you think about me...\n\n",
    "But, all I can do is pray for you\n\n",
    "Pray for your happiness\n\n",
    "So, stay wealthy and happy💝"
];

let msgIndex = 0;
let charIndex = 0;
let displayText = "";

function typeWriter() {
    if (msgIndex < messages.length) {

        if (charIndex < messages[msgIndex].length) {
            displayText += messages[msgIndex].charAt(charIndex);

            charIndex++;

            document.getElementById("finalMsg").innerText = displayText;

            setTimeout(typeWriter, 50); // typing speed
        } else {
            // move to next message
            msgIndex++;
            charIndex = 0;

            // small pause between messages
            setTimeout(typeWriter, 500);
        }

    } else {
        // all messages done - show input container with button
        document.querySelector(".inputContainer").style.display = "flex";
        const sendBtn = document.getElementById("sendBtn");
        sendBtn.addEventListener("click", () => {
            const finalMsg = document.querySelector(".msgBox").value;
            let url = "https://wa.me/916297432203?text=" + encodeURIComponent(finalMsg);
            window.open(url,'_blank');
        })
    }
}

// start
typeWriter();
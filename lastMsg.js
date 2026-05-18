const messages = [
    "I hope you like it!\n\n",
    "Write a message for me!"
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
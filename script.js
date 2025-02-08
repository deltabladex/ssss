function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const errorMessage = document.getElementById("error-message");
    const catGif = document.getElementById("cat-gif");
    const loveConfetti = document.getElementById("confetti");
    
    if (answer === "reshu") {
        document.body.innerHTML = `<h1>💖 Redirecting with Love... 💖</h1>
                                   <p>Get ready for a surprise! 😍</p>
                                   <div id='confetti'></div>`;

        // Play romantic sound
        const loveSound = new Audio("https://www.myinstants.com/media/sounds/romantic.mp3");
        loveSound.play();

        // Start confetti effect
        startConfetti();

        setTimeout(() => {
            window.location.href = "https://deltabladex.github.io/val2025/"; // Replace with actual URL
        }, 3000);
    } else {
        // Array of funny messages
        const funnyMessages = [
            "Wrong answer! Try again. 💔",
            "Nope! But nice try! 😹",
            "Are you even trying? 🙀",
            "Oh no! Reshu will be sad! 😭",
            "Think about love! 💕"
        ];
        
        // Array of funny cat GIFs
        const catGifs = [
            "https://c.tenor.com/1l3NQ4R8lfoAAAAC/funny-cat.gif",
            "https://c.tenor.com/9dFRMABJzJkAAAAC/cat-smash.gif",
            "https://c.tenor.com/U1S1HSo19h4AAAAC/cat-crying.gif"
        ];
        
        errorMessage.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        catGif.src = catGifs[Math.floor(Math.random() * catGifs.length)];
        catGif.classList.remove("hidden");
    }
}

// Typing effect for question
document.addEventListener("DOMContentLoaded", function() {
    const questionText = "💘 Who is the most important person in Sush's life? 💘";
    const questionElement = document.getElementById("question");
    let i = 0;
    function typeWriter() {
        if (i < questionText.length) {
            questionElement.innerHTML += questionText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    questionElement.innerHTML = ""; // Clear existing text
    typeWriter();
});

// Confetti effect function
function startConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);
    for (let i = 0; i < 50; i++) {
        let confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti");
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
    setTimeout(() => confettiContainer.remove(), 5000);
}

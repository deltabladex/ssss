function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const errorMessage = document.getElementById("error-message");
    const catGif = document.getElementById("cat-gif");
    
    if (answer === "reshu") {
        showLoadingScreen();
        setTimeout(() => {
            window.location.href = "https://deltabladex.github.io/val2025/"; // Replace with actual URL
        }, 3000);
    } else {
        errorMessage.textContent = "Wrong answer! Try again.";
        catGif.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"; // Funny cat GIF
        catGif.classList.remove("hidden");
    }
}

function showLoadingScreen() {
    document.body.innerHTML += `
        <div class="loading-screen">
            <p class="loading-text">Loading with Love ❤️...</p>
            <p class="heart-loader">💖</p>
        </div>
    `;
    document.querySelector(".loading-screen").style.display = "flex";
}

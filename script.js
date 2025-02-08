function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const errorMessage = document.getElementById("error-message");
    
    if (answer === "reshu") {
        window.location.href = "https://deltabladex.github.io/val2025/"; // Replace with your actual URL
    } else {
        errorMessage.textContent = "Wrong answer! Try again.";
    }
}

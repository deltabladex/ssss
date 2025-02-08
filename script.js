function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const errorMessage = document.getElementById("error-message");
    
    if (answer === "reshu") {
        window.location.href = "https://your-destination-site.com"; // Replace with your actual URL
    } else {
        errorMessage.textContent = "Wrong answer! Try again.";
    }
}

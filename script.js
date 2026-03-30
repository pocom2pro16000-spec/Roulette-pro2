let balance = 5000;
let currentBet = 0;
let isSpinning = false;

// 1. Wheel Ghumane ka Logic
function spinWheel() {
    if (isSpinning) return; // Agar pehle se ghoom raha hai toh ruko
    
    isSpinning = true;
    const wheel = document.getElementById('wheel-img');
    const resultDisplay = document.getElementById('result-screen');
    
    // Yahan hum decide kar rahe hain ki wheel kitna ghoome (Random Deg)
    // Professional Tip: 3600 degree matlab 10 chakkar
    const extraDegree = Math.floor(Math.random() * 360); 
    const totalRotation = 3600 + extraDegree; 
    
    wheel.style.transition = "transform 4s cubic-bezier(0.1, 0, 0.1, 1)";
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    resultDisplay.innerText = "SPINNING...";

    // 4 second baad result dikhao
    setTimeout(() => {
        isSpinning = false;
        
        // Winning Number nikalne ka math (37 numbers hote hain roulette mein)
        const winningNumber = Math.floor(Math.random() * 37); 
        
        resultDisplay.innerText = "WINNING NUMBER: " + winningNumber;
        alert("Ball landed on: " + winningNumber);
        
        // Reset wheel position taaki agli baar phir ghoom sake
        wheel.style.transition = "none";
        wheel.style.transform = `rotate(${extraDegree}deg)`;
    }, 4000);
}

// 2. Bet lagane ka logic
function placeBet(number) {
    if (isSpinning) return;
    alert("Bet placed on number: " + number);
    // Yahan aap apna balance minus karne ka logic daal sakte hain
}

// 3. Chip select karne ka logic
function selectChip(amount) {
    currentBet = amount;
    document.getElementById('bet').innerText = currentBet;
    // Spin trigger karne ke liye button bhi de sakte hain ya timer se
    spinWheel(); 
}

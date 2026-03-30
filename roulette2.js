const wheelNumbers = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

function processResult() {
    let allNumbers = Array.from({length: 37}, (_, i) => i);
    
    // Sabse kam bet wala number dhundhna
    let minBet = Infinity;
    let safeNumbers = [];

    allNumbers.forEach(num => {
        let betOnThis = betsOnNumbers[num] || 0;
        if (betOnThis < minBet) {
            minBet = betOnThis;
            safeNumbers = [num];
        } else if (betOnThis === minBet) {
            safeNumbers.push(num);
        }
    });

    // Final result (Kam bet walon mein se ek random)
    let finalResult = safeNumbers[Math.floor(Math.random() * safeNumbers.length)];
    
    spinWheel(finalResult);
}

function spinWheel(number) {
    const wheel = document.getElementById('wheel-img');
    const index = wheelNumbers.indexOf(number);
    const degPerNum = 360 / 37;
    
    // Rotation Calculation: Full spins + the number's position
    const rotation = (3600) + (index * degPerNum); 
    
    wheel.style.transform = `rotate(${rotation}deg)`;

    document.getElementById('result-screen').innerText = "SPINNING...";

    setTimeout(() => {
        let color = (number === 0) ? "GREEN" : (redNumbers.includes(number) ? "RED" : "BLACK");
        document.getElementById('result-screen').innerText = `WINNER: ${number} ${color}`;
        
        // Reset after 5 seconds
        setTimeout(resetRound, 5000);
    }, 5000);
}

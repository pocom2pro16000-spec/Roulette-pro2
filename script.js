const grid = document.getElementById('numbers-grid');
const redNums = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let isSpinning = false;

// Numbers create karna
for (let i = 1; i <= 36; i++) {
    let div = document.createElement('div');
    div.innerText = i;
    div.className = 'num ' + (redNums.includes(i) ? 'red' : 'black');
    div.onclick = () => placeBet(i);
    grid.appendChild(div);
}

function spinWheel() {
    if (isSpinning) return;
    isSpinning = true;
    
    const wheel = document.getElementById('wheel-img');
    const result = document.getElementById('result-screen');
    
    // 5-10 chakkar + random stop
    const randDeg = Math.floor(Math.random() * 360) + 3600; 
    wheel.style.transform = `rotate(${randDeg}deg)`;
    result.innerText = "SPINNING...";

    setTimeout(() => {
        isSpinning = false;
        const winNum = Math.floor(Math.random() * 37);
        result.innerText = "WINNER: " + winNum;
        // Reset rotation for next spin
        wheel.style.transition = "none";
        wheel.style.transform = `rotate(${randDeg % 360}deg)`;
        setTimeout(() => { wheel.style.transition = "transform 5s cubic-bezier(0.1, 0, 0.1, 1)"; }, 50);
    }, 5000);
}

function placeBet(n) { if(!isSpinning) alert("Bet on " + n); }
function selectChip(v) { document.getElementById('bet').innerText = v; }

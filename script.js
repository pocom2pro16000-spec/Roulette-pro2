const grid = document.getElementById('grid');
const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

// 1 se 36 tak numbers grid mein dalna
for (let i = 1; i <= 36; i++) {
    let div = document.createElement('div');
    div.innerText = i;
    div.className = 'num-btn';
    
    if (redNumbers.includes(i)) {
        div.classList.add('red');
    } else {
        div.classList.add('black');
    }
    
    div.onclick = () => placeBet(i);
    grid.appendChild(div);
}

function selectChip(val) {
    console.log("Selected Chip: " + val);
    // Yahan chip selection ka logic aayega
}

function placeBet(num) {
    alert("Bet placed on: " + num);
}

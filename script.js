const numbersContainer = document.getElementById('numbers');
const redNums = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

for (let i = 1; i <= 36; i++) {
    let n = document.createElement('div');
    n.innerText = i;
    n.className = 'num ' + (redNums.includes(i) ? 'red' : 'black');
    n.onclick = () => alert("Bet on " + i);
    numbersContainer.appendChild(n);
}

function selectChip(v) { console.log("Chip:", v); }

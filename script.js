// click yes btn
function clickYesButton() {
    alert('I love you too <3');
}

// move button on hover (desktop) or touch (mobile)
function moveNoButton() {
    const noBtn = document.getElementById('no-button');
    let x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    let y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

document.getElementById('no-button').addEventListener('mouseover', moveNoButton);
document.getElementById('no-button').addEventListener('touchstart', moveNoButton);

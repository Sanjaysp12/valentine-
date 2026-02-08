// Countdown to Valentine's Day
const countdown = document.getElementById("countdown");
const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = valentineDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Happy Valentine's Day! 💕";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Hidden Valentine Special unlock
let clicks = 0;
document.getElementById("heartBtn").addEventListener("click", () => {
  clicks++;
  if (clicks === 3) {
    alert("💖 Secret Valentine Page Unlocked!");
    window.location.href = "valentine-special.html";
  }
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Timer
const timerEl = document.getElementById('timer-time');
let time = 15 * 60;

function updateTimer() {
  if (time < 0) {
    timerEl.textContent = "EXPIROU";
    return;
  }
  const min = String(Math.floor(time / 60)).padStart(2, '0');
  const sec = String(time % 60).padStart(2, '0');
  timerEl.textContent = `${min}:${sec}`;
  time--;
}

updateTimer();
setInterval(updateTimer, 1000);
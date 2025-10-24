const timerEl = document.getElementById('timer-time');
let time = 15 * 60; // 15 minutos em segundos

function updateTimer() {
  if (time < 0) {
    timerEl.textContent = "🔥 TEMPO ESGOTADO! 🔥";
    return;
  }
  const min = String(Math.floor(time / 60)).padStart(2, '0');
  const sec = String(time % 60).padStart(2, '0');
  timerEl.textContent = `${min}:${sec}`;
  time--;
}

updateTimer();
setInterval(updateTimer, 1000);

// FORMULÁRIO DE CAPTAÇÃO (caso queira reaproveitar)
document.getElementById('leadForm').onsubmit = function (e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();

  if (!nome || !email) {
    alert('⚠️ Preencha todos os campos corretamente!');
    return;
  }
  alert(`🔥 Obrigado, ${nome}! Seu acesso será enviado para: ${email} !!!`);
  this.reset();
};

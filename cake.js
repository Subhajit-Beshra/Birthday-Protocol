const blowBtn    = document.getElementById('blowBtn');
const relightBtn = document.getElementById('relightBtn');
const hint       = document.getElementById('hint');
const confetti   = document.getElementById('confettiContainer');

const candles = [
  document.getElementById('c1'),
  document.getElementById('c2'),
  document.getElementById('c3'),
];

const CONFETTI_COLORS = [
  '#e05a8a','#5ab4e0','#7ed87a','#f5a623',
  '#f7e04a','#c084fc','#fb923c','#34d399'
];

/* ── Blow candles ── */
function blowCandles() {
  blowBtn.disabled = true;
  blowBtn.style.opacity = '0.6';
  hint.textContent = '💨 Whoooosh...';

  candles.forEach((candle, i) => {
    setTimeout(() => {
      candle.classList.add('blown');
      addSmoke(candle);
      if (i === candles.length - 1) {
        setTimeout(onAllBlown, 400);
      }
    }, i * 250);
  });
}

function addSmoke(candle) {
  const flameWrap = candle.querySelector('.flame-wrap');
  for (let s = 0; s < 3; s++) {
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = (s * 4 - 4) + 'px';
    smoke.style.animationDelay = (s * 0.15) + 's';
    flameWrap.appendChild(smoke);
    smoke.addEventListener('animationend', () => smoke.remove());
  }
}

function onAllBlown() {
  hint.textContent = '🎉 Make a wish!';
  blowBtn.style.display = 'none';
  relightBtn.style.display = 'flex';
  launchConfetti();
}

/* ── Relight candles ── */
function relightCandles() {
  candles.forEach(c => c.classList.remove('blown'));
  blowBtn.disabled = false;
  blowBtn.style.opacity = '1';
  blowBtn.style.display = 'flex';
  relightBtn.style.display = 'none';
  hint.textContent = 'Click the button to blow out the candles!';
  confetti.innerHTML = '';
}

/* ── Confetti ── */
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left       = Math.random() * 100 + 'vw';
      el.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      el.style.width      = (Math.random() * 8 + 6) + 'px';
      el.style.height     = (Math.random() * 8 + 6) + 'px';
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      el.style.animationDelay   = Math.random() * 0.5 + 's';
      confetti.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 18);
  }
}

/* ── Events ── */
blowBtn.addEventListener('click', () => {
  document.querySelector(".toast").style.display = "none";
  blowCandles();
  setTimeout(() => {
    document.getElementById("nextToast").style.display = "block";
  }, 4000)
});
relightBtn.addEventListener('click', () => {
  document.querySelector(".toast").style.display = "inline-block";
  relightCandles();
});
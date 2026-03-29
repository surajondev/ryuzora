const pad = (value) => String(value).padStart(2, '0');

const getNextMidnight = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight;
};

const updateCountdown = (element) => {
  const now = new Date();
  const target = getNextMidnight();
  const diff = Math.max(target - now, 0);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  element.textContent = `${pad(days)} d : ${pad(hours)} h : ${pad(minutes)} m : ${pad(seconds)} s`;
};

const initCountdowns = () => {
  const clocks = document.querySelectorAll('[data-countdown-clock]');
  if (!clocks.length) return;

  clocks.forEach((clock) => updateCountdown(clock));

  setInterval(() => {
    clocks.forEach((clock) => updateCountdown(clock));
  }, 1000);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountdowns);
} else {
  initCountdowns();
}

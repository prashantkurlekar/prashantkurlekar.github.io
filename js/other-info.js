function updateExperience() {
  const yearStarted = 2003;
  const currentYear = new Date().getUTCFullYear();

  document.getElementById('experience').innerHTML = currentYear - yearStarted;
}

function updateCopyright() {
  const currentYear = new Date().getUTCFullYear();
  document.getElementById('currentYear').innerHTML = currentYear;
}

window.onload = () => {
  updateExperience();
  updateCopyright();
};

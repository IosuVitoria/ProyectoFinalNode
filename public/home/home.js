document.addEventListener("DOMContentLoaded", () => {
  const infoMessageElement = document.getElementById('infoMessage');
  const urlParams = new URLSearchParams(window.location.search);
  const infoMessage = urlParams.get('info');

  if (infoMessage) {
    infoMessageElement.textContent = decodeURIComponent(infoMessage);
    infoMessageElement.style.display = 'block';
  }
});
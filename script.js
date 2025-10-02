let deButton = document.querySelector('button[aria-label="toggle menu"]');

deButton.addEventListener("click", toggleButton);

function toggleButton() {
  deButton.classList.toggle("is-open");
}
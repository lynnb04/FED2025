// hamburgermenu
let deButton = document.querySelector('button[aria-label="toggle menu"]');

deButton.addEventListener("click", toggleButton);

function toggleButton() {
  deButton.classList.toggle("is-open");
}
// bron: hamburgermenu uit de les


const btn = document.querySelector("header nav > ul:first-of-type button");
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
  });
// Smooth button click feedback
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Added ✓";
    btn.style.background = "#0f0";
    btn.style.color = "#000";

    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "";
      btn.style.color = "";
    }, 1500);
  });
});

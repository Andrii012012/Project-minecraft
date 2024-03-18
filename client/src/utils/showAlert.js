export default function showAlert(text, time = 4000) {
  const alert = document.querySelector(".app__error");
  const errorText = alert.children[1];
  errorText.innerHTML = `${text}`;
  alert.style.right = "10px";
  document.querySelector(".app__error").classList.add("app__error-active");

  setTimeout(() => {
    alert.style.right = "-100%";
  }, time);
}

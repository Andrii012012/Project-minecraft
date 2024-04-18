export default function showAlert(text: string, time: number = 4000) {
  const alert: HTMLDivElement = document.querySelector(".error")!;
  const errorText = alert.children[1];
  errorText.innerHTML = `${text}`;
  alert.style.right = "10px";
  alert.classList.add("errorActive");

  setTimeout(() => {
    alert.style.right = "-200%";
  }, time);
}

export default function clearClass(className: string) {
  if (typeof className === "string") {
    document
      .querySelectorAll<HTMLElement>(`.${className}`)
      .forEach((item) => item.classList.remove(`${className}`));
  }
}

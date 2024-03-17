export default function clearClass(className) {
   if(typeof className === 'string'){
     document
     .querySelectorAll(`.${className}`)
     .forEach((item) => item.classList.remove(`${className}`));
   }
}

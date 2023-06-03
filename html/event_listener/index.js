const header = document.querySelector("header");
const counter_tag = document.querySelector("span");
const button = document.querySelector("button");
let counter = 0;
header.textContent = "Event Listener";

/**
 * addEventListener acepta como primer parametro el nombre del evento que vamos a escuchar
 * en este caso el click, como segundo parametro es una funcion que recibe por defecto un evento
 * este puede ser omitido pero esta vez lo he puesto para ver lo que obtengo en consola
 */
button.addEventListener("click", (event) => {
  counter++;
  counter_tag.textContent = counter;
});

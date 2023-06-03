const header = document.querySelector("header");
const counter_tag = document.querySelector("span");
const button = document.querySelector("button");
const input = document.querySelector("input");
const dynamic_text = document.getElementById("dynamic_text");

let counter = 0;
header.textContent = "Event Listener";

/**
 * addEventListener acepta como primer parametro el nombre del evento que vamos a escuchar
 * en este caso el click, como segundo parametro es una funcion que recibe por defecto un evento
 */
button.addEventListener("click", () => {
  counter++;
  counter_tag.textContent = counter;
});

input.addEventListener("keyup", (event) => {
  /**
   * alguna solucion que podrias pensar es obtener primero el valor de input desde el queryselector
   * dynamic_text.textContent = input.value
   * pero ya el evento nos da el valor del input asi que no necesitamos traerlo de nuevo
   */
  dynamic_text.textContent = event.target.value;
});

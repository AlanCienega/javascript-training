let user_name = prompt("nombre");
const fact_num = prompt("numero para factorial");
let hello = document.querySelector("h1");
hello.textContent = `¡Hola ${user_name}!`;

let fact = function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
};

let answer = fact(parseInt(fact_num));
document.write(`El factorial de ${fact_num} es ${answer}`);

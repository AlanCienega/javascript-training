/**
 * dada una cadena "cadena" y un número n = 2
 * rotar la cadena => denaca
 * 6:40
 * + 1:37 (validación)
 *
 */

function rotate(string, num) {
  if (num > string.length) {
    num = num % string.length;
  }
  let rotated = "";
  for (let i = num; i < string.length; i++) {
    rotated += string[i];
  }
  for (let i = 0; i < num; i++) {
    rotated += string[i];
  }
  return rotated;
}
console.log(rotate("javascript", 4));

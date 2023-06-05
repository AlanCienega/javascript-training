const nums = [3, 4, 6, ...["z", "b"]];
const strings = ["uno", "ocho"];
const uno = 1;

console.log([...nums, ...strings, uno]);

/**
 * como podemos ver los elementos ahora son tomados como elementos unitarios
 * la podemos usar donde se nos ocurra, incluso al declarar una constante
 */

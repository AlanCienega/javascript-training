function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
let my_array = ["a", "b", "c"];

let reversed = reverseArray(my_array);

console.log(reversed);

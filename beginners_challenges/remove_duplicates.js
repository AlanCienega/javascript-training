/**
 * remove duplicates from array
 * 8:46
 */
function removeDuplicates(array) {
  let no_duplicates = [];
  for (let i = 0; i < array.length; i++) {
    if (!no_duplicates.includes(array[i])) {
      no_duplicates.push(array[i]);
    }
  }
  return no_duplicates;
}

let my_array = [2, 3, 5, 1, 5, 2, 5];

console.log(removeDuplicates(my_array));

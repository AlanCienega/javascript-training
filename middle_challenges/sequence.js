/**
 * given an array of nums [1, 3, 2] by removing just one element
 * we should have a increment sequence one by one -> [1, 2] (true) because just removing 3
 */

function sequence(array) {
  let spaces = 0;
  let removed = 0;
  for (let i = 0; i < array.length; i++) {
    spaces = array[i + 1] - array[i];
    if (spaces > 1) {
      removed++;
      array.splice(i + 1, 1);
      break;
    } else if (spaces <= 0) {
      removed++;
      array.splice(i + 1, 1);
      break;
    }
  }
  console.log(array);
  if (removed > 1) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      return false;
    }
  }
  return true;
}

let array = [1, 2, 3, 4, 3, 6];

console.log(sequence(array));

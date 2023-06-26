const string_array = ["this", "is", "crazy"];

function reverseWithSort(array) {
  return array.sort(() => -1);
}

console.log(reverseWithSort(string_array));

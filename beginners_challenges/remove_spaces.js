let my_string = "remove spaces from this string";

function removeSpaces(string) {
  let no_spaces_array = [];
  let new_string = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] != " ") {
      no_spaces_array.push(string[i]);
    }
  }
  for (let i = 0; i < no_spaces_array.length; i++) {
    new_string += no_spaces_array[i]
  }
  return new_string;
}

console.log(removeSpaces(my_string));

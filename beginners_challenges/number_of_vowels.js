let my_string = "murcielago";

function getNumberOfVowels(string) {
  let vowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    ) {
      vowels++;
    }
  }
  return vowels;
}

console.log(getNumberOfVowels(my_string));

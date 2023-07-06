/**
 * panda -> pxndx
 * 6:03
 */

function replaceLetters(word) {
  let second_word = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "a") {
      second_word += "x";
    } else {
      second_word += word[i];
    }
  }
  return second_word;
}

console.log(replaceLetters("panda"));

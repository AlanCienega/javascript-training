/**
 * Anagram: when 2 words has the same letters in different order
 * 6:06
 */
function anagram(first_word, second_word) {
  let first_word_letters = [];
  if (first_word.length != second_word.length) {
    return false;
  }

  for (let i = 0; i < first_word.length; i++) {
    first_word_letters.push(first_word[i]);
  }
  for (let i = 0; i < second_word.length; i++) {
    if (!first_word.includes(second_word[i])) {
      return false;
    }
  }

  return true;
}

console.log(anagram("lola", "lalo"));

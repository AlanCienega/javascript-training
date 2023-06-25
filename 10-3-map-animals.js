let animals = ["elephant", "giraffe", "lion", "monkey", "tiger"];
let initial = function getInitial(array) {
  return array.map((element) => element[0].toUpperCase());
};

console.log(initial(animals));

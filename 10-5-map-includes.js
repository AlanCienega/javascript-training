// array of super heroes
const superHeroes = ["spiderman", "batman", "superman", "wonder woman"];

let sufix = function getSufix(array) {
  return array.map((hero) => {
    if (hero.includes("woman")) {
      return hero + "|woman";
    } else if (hero.includes("man")) {
      return hero + "|man";
    }
  });
};
console.log(sufix(superHeroes));

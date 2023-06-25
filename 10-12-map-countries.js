const countries = [
  {
    name: "Mexico",
    capital: "Mexico City",
  },
  {
    name: "USA",
    capital: "Washington D.C.",
  },
  {
    name: "Spain",
    capital: "Madrid",
  },
  {
    name: "Italy",
    capital: "Rome",
  },
];

let newObjects = function setValues(array) {
  return array.map(({ name, capital }) => {
    return { [capital]: name };
  });
};

console.log(newObjects(countries));

/**
 * form an array of objects, extract tha name
 * [{name: 'alan', age : 20, country: 'Mexico'}]
 * ['alan']
 * 2:18
 * also can solve with map
 */
const people = [
  {
    name: "Alan",
    age: 20,
    country: "Mexico",
  },
  {
    name: "Juan",
    age: 40,
    country: "Colombia",
  },
  {
    name: "María",
    age: 28,
    country: "Mexico",
  },
  {
    name: "Luisa",
    age: 30,
    country: "Mexico",
  },
];

function extractName(array) {
  let names = [];
  array.forEach((element) => {
    names.push(element.name);
  });
  return names;
}

console.log(extractName(people));

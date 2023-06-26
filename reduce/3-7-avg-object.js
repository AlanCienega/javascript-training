function averageAge(people) {
  const sum = people.reduce((prev, curr) => (prev += curr.edad), 0);
  return sum / people.length;
}

const people = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 20 },
];
console.log(averageAge(people));
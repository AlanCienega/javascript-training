import { students } from "../data.js";

let topStudents = function filterStudents(array) {
  return array.filter((element) => element.note >= 90);
};

console.log(topStudents(students));

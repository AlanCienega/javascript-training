let people = { alan: 10, dun: 3, mau: 8 };
let scores = { 3: 500, 10: 100, 8: 50 };
function toObjects(obj) {
  return Object.keys(obj).map((key) => {
    return { [key]: obj[key] };
  });
}

people = toObjects(people);
scores = toObjects(scores);

let peopleScores = [];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  for (let j = 0; j < scores.length; j++) {
    const score = scores[j];
    if (Object.values(person)[0] == Object.keys(score)[0]) {
      let theName = Object.keys(person)[0];
      let itsScore = Object.values(score)[0];

      let scoredPerson = {};
      scoredPerson.name = theName;
      scoredPerson.score = itsScore;
      peopleScores.push(scoredPerson);
    }
  }
}
peopleScores.sort((a, b) => {
  return b.score - a.score;
});
console.log(peopleScores);

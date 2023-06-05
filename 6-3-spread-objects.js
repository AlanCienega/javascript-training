const people = { juan: 2, maria: 3, pedro: 20, lucia: 21 };
const scores = { 3: 12, 20: 999, 21: 499, 2: 500 };

function groupPeopleScores(peopleObject, scoresObject) {
  const people_ids = Object.values(peopleObject);
  const score_ids = Object.keys(scoresObject);
  return score_ids;
}

console.log(groupPeopleScores(people, scores));

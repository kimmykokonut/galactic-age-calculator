export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  yearsToDays() {
    return this.age * 365;
  }
}
export function earthToMercury(person) {
  let mercuryAge = person.yearsToDays() / 88;
  let mercuryAgeRound = Math.round(mercuryAge*100)/100;
  return mercuryAgeRound;
}
export function earthToVenus(person) {
  let venusAge = person.yearsToDays() / 225;
  let venusAgeRound = Math.round(venusAge * 100) / 100;
  return venusAgeRound;
}
export function earthToMars(person) {
  let marsAge = person.yearsToDays() / 687;
  let marsAgeRound = Math.round(marsAge * 100) / 100;
  return marsAgeRound;
}
export function earthToJupiter(person) {
  // let marsAge = person.yearsToDays() / 687;
  // let marsAgeRound = Math.round(marsAge * 100) / 100;
  // return marsAgeRound;
}
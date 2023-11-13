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
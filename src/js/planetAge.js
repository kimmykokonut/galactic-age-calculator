export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  yearsToDays() {
    return this.age * 365;
  }
  earthToMercury() {
    let mercuryAge = parseInt(this.age) / 0.24;
    let mercuryAgeRound = Math.round(mercuryAge * 100) / 100;
    return mercuryAgeRound;
  }
  earthToVenus(person) {
    let venusAge = parseInt(this.age) / 0.62;
    let venusAgeRound = Math.round(venusAge * 100) / 100;
    return venusAgeRound;
  }
  earthToMars(person) {
    let marsAge = parseInt(this.age) / 1.88;
    let marsAgeRound = Math.round(marsAge * 100) / 100;
    return marsAgeRound;
  }
  earthToJupiter(person) {
    let jupiterAge = parseInt(this.age) / 11.86;
    let jupiterAgeRound = Math.round(jupiterAge * 100) / 100;
    return jupiterAgeRound;
  }
} 
export function yearsFromLastBday(person, pastAge) {
  const earthTime = (person.age - pastAge);
  const mercTime = Math.round(((person.age - pastAge) / 0.24) * 100) /100;
  return [earthTime, mercTime];
}
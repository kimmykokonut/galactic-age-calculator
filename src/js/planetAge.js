export class Person {
  constructor(name, age, pastBday) {
    this.name = name;
    this.age = age;
    this.pastBday = pastBday;
  }
  convertAge(solarYear) {
    const agePlanet = parseInt(this.age) / solarYear;
    return Math.round(agePlanet * 100) / 100;
  }

  earthToMercury() {
    let mercuryAge = this.convertAge(0.24);
    return mercuryAge;
  }
//   earthToVenus() {
//     let venusAge = parseInt(this.age) / 0.62;
//     let venusAgeRound = Math.round(venusAge * 100) / 100;
//     return venusAgeRound;
//   }
//   earthToMars() {
//     let marsAge = parseInt(this.age) / 1.88;
//     let marsAgeRound = Math.round(marsAge * 100) / 100;
//     return marsAgeRound;
//   }
//   earthToJupiter() {
//     let jupiterAge = parseInt(this.age) / 11.86;
//     let jupiterAgeRound = Math.round(jupiterAge * 100) / 100;
//     return jupiterAgeRound;
//   }
//   yearsFromPastBday() {
//     const earthTime = parseInt(this.age - this.pastBday);
//     return earthTime;
//   }
//   yearsFromMercury() {
//     const mercTime = Math.round(((this.yearsFromPastBday()) / 0.24) * 100) / 100;
//     return mercTime;
//   }
// } 

// function mercuryFactor() {

}
export class Person {
  constructor(name, age, pastBday, futureBday) {
    this.name = name;
    this.age = age;
    this.pastBday = pastBday;
    this.futureBday = futureBday;
  }
  convertAge(solarYear) {
    const agePlanet = parseInt(this.age) / solarYear;
    return Math.round(agePlanet * 100) / 100;
  }
  earthToMercury() {
    let mercuryAge = this.convertAge(0.24);
    return mercuryAge;
  }
  earthToVenus() {
    let venusAge = this.convertAge(0.62);
    return venusAge;
  }
  earthToMars() {
    let marsAge = this.convertAge(1.88);
    return marsAge;
  }
  earthToJupiter() {
    let jupiterAge = this.convertAge(11.86);
    return jupiterAge;
  }
  yearsFromPastBday() {
    const earthTimePast = parseInt(this.age - this.pastBday);
    return earthTimePast;
  }
  yearsFromMercury() {
    this.age = this.yearsFromPastBday();
    const mercTimePast = this.earthToMercury();
    //reset this.age?
    return mercTimePast;
  }
  yearsFromVenus() {
    this.age = this.yearsFromPastBday();
    const venusTimePast = this.earthToVenus();
    return venusTimePast;
  }
  yearsFromMars() {
    this.age = this.yearsFromPastBday();
    const marsTimePast = this.earthToMars();
    return marsTimePast;
  }
  yearsFromJupiter() {
    this.age = this.yearsFromPastBday();
    const jupiterTimePast = this.earthToJupiter();
    return jupiterTimePast;
  }
  yearsToFutureBday() {
    const earthTimeFuture = parseInt(this.futureBday - this.age);
    return earthTimeFuture;
  }
  yearsToMercury() {
    this.age = this.yearsToFutureBday();
    const mercuryTimeFuture = this.earthToMercury();
    return mercuryTimeFuture;
  }
  yearsToVenus() {
    this.age = this.yearsToFutureBday();
    const venusTimeFuture = this.earthToVenus();
    return venusTimeFuture;
  }
  yearsToMars() {
    this.age = this.yearsToFutureBday();
    const marsTimeFuture = this.earthToMars();
    return marsTimeFuture;
  }
  yearsToJupiter() {
    this.age = this.yearsToFutureBday();
    const jupiterTimeFuture = this.earthToJupiter();
    return jupiterTimeFuture;
  }
} 
export function isEmpty(testString) {
  return (testString.trim().length === 0);
}
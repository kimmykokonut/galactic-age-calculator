import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person, isEmpty } from './js/planetAge';

function handleAgeForm(e) {
  e.preventDefault();
  document.querySelector('#responseCurrent').innerText = null;
  document.querySelector('#responsePast').innerText = null;
  document.querySelector('#responseFuture').innerText = null;
  const name = document.querySelector('#nameInput').value;
  const ageCurrent = document.querySelector('#ageInput').value;
  const agePast = document.querySelector('#agePast').value;
  const ageFuture = document.querySelector('#ageFuture').value;
  const person = new Person(name, ageCurrent, agePast, ageFuture);

  const divIntro = document.getElementById("intro");
  const pError = document.createElement("p");
  if ((isEmpty(ageCurrent)) || (isEmpty(agePast)) || (isEmpty(ageFuture))) {
    divIntro.append(pError);
    pError.innerText = "Form not complete, Try again";
  }

  const responseMerc = person.earthToMercury();
  const responseVenus = person.earthToVenus();
  const responseMars = person.earthToMars();
  const responseJupiter = person.earthToJupiter();

  const divDisplayCurrent = document.querySelector("#responseCurrent");
  const h3Name = document.createElement("h3");
  const ul = document.createElement("ul");
  const liMe = document.createElement("li");
  const liVe = document.createElement("li");
  const liMa = document.createElement("li");
  const liJu = document.createElement("li");
  h3Name.append(`${name}: age ${ageCurrent} (Earth years)`);
  liMe.append(`Your age on Mercury: ${responseMerc}`);
  liVe.append(`Your age on Venus: ${responseVenus}`);
  liMa.append(`Your age on Mars: ${responseMars}`);
  liJu.append(`Your age on Jupiter: ${responseJupiter}`);
  divDisplayCurrent.append(h3Name, ul);
  ul.append(liMe, liVe, liMa, liJu);

  const responseEarthPast = person.yearsFromPastBday();
  const responseMercPast = person.yearsFromMercury();
  const responseVenusPast = person.yearsFromVenus();
  const responseMarsPast = person.yearsFromMars();
  const responseJupiterPast = person.yearsFromJupiter();
  const divDisplayPast = document.querySelector("#responsePast");
  const h3Past = document.createElement("h3");
  const ulPast = document.createElement("ul");
  const liEaPast = document.createElement("li");
  const liMePast = document.createElement("li");
  const liVePast = document.createElement("li");
  const liMaPast = document.createElement("li");
  const liJuPast = document.createElement("li");
  h3Past.append(`Number of years that have past since you were ${agePast} on Earth`);
  liEaPast.append(`${responseEarthPast} Earth years`);
  liMePast.append(`${responseMercPast} Mercury years`);
  liVePast.append(`${responseVenusPast} Venus years`);
  liMaPast.append(`${responseMarsPast} Mars years`);
  liJuPast.append(`${responseJupiterPast} Jupiter years`);
  ulPast.append(liEaPast, liMePast, liVePast, liMaPast, liJuPast);
  divDisplayPast.append(h3Past, ulPast);
  ulPast.append(liMePast, liVePast, liMaPast, liJuPast);

  const responseEarthFuture = person.yearsToFutureBday();
  const responseMercFuture = person.yearsToMercury();
  const responseVenusFuture = person.yearsToVenus();
  const responseMarsFuture = person.yearsToMars();
  const responseJupiterFuture = person.yearsToJupiter();
  const divDisplayFuture = document.querySelector("#responseFuture");
  const h3Future = document.createElement("h3");
  const ulFuture = document.createElement("ul");
  const liEaFuture = document.createElement("li");
  const liMeFuture = document.createElement("li");
  const liVeFuture = document.createElement("li");
  const liMaFuture = document.createElement("li");
  const liJuFuture = document.createElement("li");

  h3Future.append(`Number of years to pass until you are ${ageFuture} on Earth`);
  liEaFuture.append(`${responseEarthFuture} Earth years`);
  liMeFuture.append(`${responseMercFuture} Mercury years`);
  liVeFuture.append(`${responseVenusFuture} Venus years`);
  liMaFuture.append(`${responseMarsFuture} Mars years`);
  liJuFuture.append(`${responseJupiterFuture} Jupiter years`);
  divDisplayFuture.append(h3Future, ulFuture);
  ulFuture.append(liEaFuture, liMeFuture, liVeFuture, liMaFuture, liJuFuture);
}

window.addEventListener("load", function () {
  document.querySelector("#age-form").addEventListener("submit", handleAgeForm);
});
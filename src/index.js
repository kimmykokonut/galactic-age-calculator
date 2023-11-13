import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/planetAge';

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
  liMe.append(`Your age on Mercury: ${ responseMerc }`);
  liVe.append(`Your age on Venus: ${ responseVenus }`);
  liMa.append(`Your age on Mars: ${ responseMars }`);
  liJu.append(`Your age on Jupiter: ${ responseJupiter }`);
  
  divDisplayCurrent.append(h3Name, ul);
  ul.append(liMe, liVe, liMa, liJu);

  const responseEarthPast = person.yearsFromPastBday();
  // const responseMerc = person.earthToMercury();
  // const responseVenus = person.earthToVenus();
  // const responseMars = person.earthToMars();
  // const responseJupiter = person.earthToJupiter();

  const divDisplayPast = document.querySelector("#responsePast");
  const h3Past = document.createElement("h3");
  const ulPast = document.createElement("ul");
  const liEaPast = document.createElement("li");
  // const liMePast = document.createElement("li");
  // const liVePast = document.createElement("li");
  // const liMaPast = document.createElement("li");
  // const liJuPast = document.createElement("li");

  h3Past.append(`Number of years have past since you were ${ agePast } on Earth`);
  liEaPast.append(`${ responseEarthPast } Earth years have past`);
  // liMe.append(`Your age on Mercury: ${responseMerc}`);
  // liVe.append(`Your age on Venus: ${responseVenus}`);
  // liMa.append(`Your age on Mars: ${responseMars}`);
  // liJu.append(`Your age on Jupiter: ${responseJupiter}`);
  ulPast.append(liEaPast);
  divDisplayPast.append(h3Past, ulPast);
  

}

window.addEventListener("load", function () {
  document.querySelector("#age-form").addEventListener("submit", handleAgeForm);
});
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

  // const divDisplayPast = 


}

window.addEventListener("load", function () {
  document.querySelector("#age-form").addEventListener("submit", handleAgeForm);
});
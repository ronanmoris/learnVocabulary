import _ from "lodash";
import './style.css';
import Foto from './foto.jpg';

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  var myFoto = new Image();
  myFoto.src = Foto;

  element.appendChild(myFoto);

  return element;
}

document.body.appendChild(component());

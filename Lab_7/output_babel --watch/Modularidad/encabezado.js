"use strict";

import * as constantes from '../assets/constantes/constantes.js';
export const newEncabezado = (titulo, menu1, menu2, link1, link2) => {
  var encabezado = document.createElement('header');
  encabezado.setAttribute('class', 'encabezado');
  var tituloH = document.createElement('h1');
  tituloH.setAttribute('class', 'titulo');
  tituloH.innerHTML = titulo;
  tituloH.style.color = constantes.textColor;
  encabezado.appendChild(tituloH);
  if (menu1 != null) {
    var menuLink1 = document.createElement('a');
    menuLink1.setAttribute('class', 'menu');
    menuLink1.setAttribute('href', link1);
    menuLink1.innerHTML = menu1;
    menuLink1.style.color = constantes.linksColor;
    menuLink1.addEventListener('mouseover', () => {
      menuLink1.style.color = constantes.linksHoverColor;
    });
    menuLink1.addEventListener('mouseout', () => {
      menuLink1.style.color = constantes.linksColor;
    });
    encabezado.appendChild(menuLink1);
  }
  if (menu2 != null) {
    var span = document.createElement('span');
    span.innerHTML = ' | ';
    var menuLink2 = document.createElement('a');
    menuLink2.setAttribute('class', 'menu');
    menuLink2.setAttribute('href', link2);
    menuLink2.textContent = menu2;
    menuLink2.style.color = constantes.linksColor;
    menuLink2.addEventListener('mouseover', () => {
      menuLink2.style.color = constantes.linksHoverColor;
    });
    menuLink2.addEventListener('mouseout', () => {
      menuLink2.style.color = constantes.linksColor;
    });
    encabezado.appendChild(span);
    encabezado.appendChild(menuLink2);
  }
  return encabezado;
};
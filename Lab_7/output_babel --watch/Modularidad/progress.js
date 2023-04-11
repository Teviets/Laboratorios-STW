import * as constantes from '../assets/constantes/constantes.js';
export const newProgress = porcent => {
  var div = document.createElement('div');
  div.setAttribute('class', 'progress');
  var br = document.createElement('br');
  var span = document.createElement('span');
  span.setAttribute('class', 'porcent');
  span.innerHTML = 'Progreso del sitio';
  span.style.color = constantes.textColor;
  var spanPercent = document.createElement('span');
  spanPercent.setAttribute('class', 'porcent');
  var progress = document.createElement('progress');
  if (porcent != null) {
    progress.setAttribute('value', porcent);
    progress.setAttribute('max', '100');
    spanPercent.innerHTML = porcent + '%';
  } else {
    spanPercent.innerHTML = '?%';
  }
  spanPercent.style.color = constantes.textColor;
  div.appendChild(br);
  div.appendChild(span);
  div.appendChild(br);
  div.appendChild(progress);
  div.appendChild(br);
  div.appendChild(spanPercent);
  return div;
};
import * as constantes from '../assets/constantes/constantes.js';

export const newProgress = (porcent) => {
    var div = document.createElement('div');
    div.setAttribute('class', 'progress');

    var br = document.createElement('br');
    
    var span = document.createElement('span');
    span.setAttribute('class', 'porcent');
    span.innerHTML = 'Progreso del sitio';
    span.style.color = constantes.textColor;

    var progress = document.createElement('progress');
    progress.setAttribute('value', porcent);
    progress.setAttribute('max', '100');

    var spanPercent = document.createElement('span');
    spanPercent.setAttribute('class', 'porcent');
    spanPercent.innerHTML = porcent + '%';
    spanPercent.style.color = constantes.textColor;

    div.appendChild(br);
    div.appendChild(span);
    div.appendChild(br);
    div.appendChild(progress);
    div.appendChild(br);
    div.appendChild(spanPercent);



    return div;
};
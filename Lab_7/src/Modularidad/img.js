import * as constantes from '../assets/constantes/constantes.js';

export const newImg = (src, alt) => {
    var div = document.createElement('div');
    div.setAttribute('class', 'img');

    var img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('height', constantes.imgHeight);
    img.setAttribute('width', constantes.imgWidth);

    div.appendChild(img);

    return div;
};
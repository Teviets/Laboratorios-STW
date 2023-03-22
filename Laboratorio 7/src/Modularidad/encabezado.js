import * as constantes from '../assets/constantes/constantes.js';

export const newEncabezado = (titulo, menu1, menu2, link1, link2) => {
    var encabezado = document.createElement('header');
    encabezado.setAttribute('class', 'encabezado');

    var titulo = document.createElement('h1');
    titulo.setAttribute('class', 'titulo');
    titulo.innerHTML = titulo;
    titulo.style.color = constantes.colorTitulo;

    if (menu1 != null) {
        var menu1 = document.createElement('a');
        menu1.setAttribute('class', 'menu');
        menu1.setAttribute('href', link1);
        menu1.innerHTML = menu1;
        menu1.style.color = constantes.linksColor;
        menu1.addEventListener('mouseover', function() {
            menu1.style.color = constantes.linksColorHover;
          }
        );
        encabezado.appendChild(menu1);
    }
    if(menu2 != null) {
        var span = document.createElement('span');
        span.innerHTML = ' | ';
        var menu2 = document.createElement('a');
        menu2.setAttribute('class', 'menu');
        menu2.setAttribute('href', link2);
        menu2.innerHTML = menu2;
        menu2.style.color = constantes.linksColor;
        menu2.addEventListener('mouseover', function() {
            menu2.style.color = constantes.linksColorHover;
          }
        );
        encabezado.appendChild(span);
        encabezado.appendChild(menu2);
    }

    encabezado.appendChild(titulo);

    return encabezado;
};
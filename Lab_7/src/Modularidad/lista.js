import * as constantes from '../assets/constantes/constantes.js';

export const newList = (elementos,links,ordenada) => {
    var lista;
    // True es ordenada (OL), false es desordenada (UL)
    if (ordenada) {
        lista = document.createElement('ol');
    }else{
        lista = document.createElement('ul');
    }
    lista.setAttribute('id', 'lista');

    for (let i = 0; i < elementos.length; i++) {
        var elemento = document.createElement('li');
        elemento.setAttribute('class', 'elemento');
        elemento.innerHTML = elementos[i];
        elemento.style.color = constantes.textColor;

        
        if(links[i] != null) {
            var br = document.createElement('br');

            var descripcion = document.createElement('a');
            descripcion.setAttribute('class', 'descripcion');
            descripcion.setAttribute('href', links[i]);
            descripcion.innerHTML = 'Ver más';
            descripcion.style.color = constantes.linksColor;
            descripcion.addEventListener('mouseover', () => {
                descripcion.style.color = constantes.linksHoverColor;
            });
              
            descripcion.addEventListener('mouseout', () => {
                descripcion.style.color = constantes.linksColor;
            });
            elemento.appendChild(br);
            elemento.appendChild(descripcion);

        }
        

        lista.appendChild(elemento);
    }

    return lista;
};
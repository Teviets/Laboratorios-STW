import { newAudio } from "../modularidad/audios.js";
import { newEncabezado } from "../modularidad/encabezado.js";
import { newImg } from "../modularidad/img.js";
import { newProgress } from "../modularidad/progress.js";
import { newList } from "../modularidad/lista.js";
import { styleSheet } from "../Modularidad/link.js";
import imagen1 from "../assets/img/Milib.png";
import imagen2 from "../assets/img/LibrosPop.png";
import imagen3 from "../assets/img/NuevLanz.png";
import audio1 from "../assets/sonidos/Bienvenida.wav";
import audio2 from "../assets/sonidos/LibrosPop.wav";
import audio3 from "../assets/sonidos/NuevosLanzamientos.wav";

export const indexApp = () => {
    document.getElementById('audio').appendChild(newAudio([audio1]));
    document.getElementById('header').appendChild(newEncabezado('Menu principal', 'Libros populares', 'Nuevos libros', './libros-populares.html', './nuevos-lanzamientos.html'));
    document.getElementById('img').appendChild(newImg([imagen1], 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress('0'));
    document.head.appendChild(styleSheet('./index.css'));
};

export const librosPopularesApp = () => {
    
    document.getElementById('audio').appendChild(newAudio([audio2]));
    document.getElementById('header').appendChild(newEncabezado('Libros Populares', null, null, null, null));
    document.getElementById('list').appendChild(newList(['Harry Potter: el pricionero de Azcaban, J.K. Rowling',
        'The witcher: el ultimo deseo, Andrzej Sapkowski',
        'Los juegos del hambre: Sinsajo, Suzanne Collins',
        'Divergente, Veronica Roth'
    ],['https://quelibroleo.com/harry-potter-y-el-prisionero-de-azkaban-edicion-ilustrada',
    'https://www.goodreads.com/book/show/11661389-el-ltimo-deseo-la-espada-del-destino',
    'https://quelibroleo.com/sinsajo-los-juegos-del-hambre-3',
    'https://quelibroleo.com/divergente'],false));
    document.getElementById('img').appendChild(newImg([imagen2], 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress('50'));
    document.head.appendChild(styleSheet('./libros-populares.css'));
};

export const nuevosLanzamientosApp = () => {
    document.getElementById('audio').appendChild(newAudio([audio3]));
    document.getElementById('header').appendChild(newEncabezado('Nuevos lanzamientos', null, null, null, null));
    document.getElementById('list').appendChild(newList(['Dune, Frank Herbert','Diario de greg, Jeff Kinney',
        'Juego de tronos, George R. R. Martin','El hobbit, J. R. R. Tolkien','El gran gatsby, F. Scott Fitzgerald',
        'Comentario de articulo, Sebastian Estrada','Mi historia, Sebastian Estrada'],
        [null,null,null,null,null,null,null],true));
    document.getElementById('img').appendChild(newImg([imagen3], 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress(null));
    document.head.appendChild(styleSheet('./nuevos-lanzamientos.css'));
}
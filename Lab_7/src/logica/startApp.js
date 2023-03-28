import { newAudio } from "../modularidad/audios.js";
import { newEncabezado } from "../modularidad/encabezado.js";
import { newImg } from "../modularidad/img.js";
import { newProgress } from "../modularidad/progress.js";
import { newArticle } from "../modularidad/articulo.js";
import { newList } from "../modularidad/lista.js";
import { styleSheet } from "../Modularidad/link.js";

export const indexApp = () => {
    
    document.getElementById('audio').appendChild(newAudio('../assets/sonidos/Bienvenida.wav'));
    document.getElementById('header').appendChild(newEncabezado('Menu principal', 'Libros populares', 'Nuevos libros', '../DOM/libros-populares.html', '../DOM/nuevos-lanzamientos.html'));
    document.getElementById('img').appendChild(newImg('../assets/img/Milib.png', 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress('0'));
    document.head.appendChild(styleSheet('../estilos/index.css'));
};

export const librosPopularesApp = () => {
    
    document.getElementById('audio').appendChild(newAudio('../assets/sonidos/LibrosPop.wav'));
    document.getElementById('header').appendChild(newEncabezado('Libros Populares', null, null, null, null));
    document.getElementById('list').appendChild(newList(['Harry Potter: el pricionero de Azcaban, J.K. Rowling',
        'The witcher: el ultimo deseo, Andrzej Sapkowski',
        'Los juegos del hambre: Sinsajo, Suzanne Collins',
        'Divergente, Veronica Roth'
    ],['https://quelibroleo.com/harry-potter-y-el-prisionero-de-azkaban-edicion-ilustrada',
    'https://www.goodreads.com/book/show/11661389-el-ltimo-deseo-la-espada-del-destino',
    'https://quelibroleo.com/sinsajo-los-juegos-del-hambre-3',
    'https://quelibroleo.com/divergente'],false));
    document.getElementById('img').appendChild(newImg('../assets/img/LibrosPop.png', 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress('50'));
    document.head.appendChild(styleSheet('../assets/css/libros-populares.css'));
};

export const nuevosLanzamientosApp = () => {
    document.getElementById('audio').appendChild(newAudio('../assets/sonidos/NuevosLanzamientos.wav'));
    document.getElementById('header').appendChild(newEncabezado('Nuevos lanzamientos', null, null, null, null));
    document.getElementById('list').appendChild(newList(['Dune, Frank Herbert','Diario de greg, Jeff Kinney',
        'Juego de tronos, George R. R. Martin','El hobbit, J. R. R. Tolkien','El gran gatsby, F. Scott Fitzgerald',
        'Comentario de articulo, Sebastian Estrada','Mi historia, Sebastian Estrada'],
        [null,null,null,null,null,null,null],true));
    document.getElementById('img').appendChild(newImg('../assets/img/NuevLanz.png', 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress(null));
    document.head.appendChild(styleSheet('../estilos/nuevos-lanzamientos.css'));
}
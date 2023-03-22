import { newAudio } from "../modularidad/audios.js";
import { newEncabezado } from "../modularidad/encabezado.js";
import { newImg } from "../modularidad/img.js";
import { newProgress } from "../modularidad/progress.js";
import { newArticle } from "../modularidad/articulo.js";
import { newList } from "../modularidad/lista.js";

export const indexApp = () => {
    document.getElementById('audio').appendChild(newAudio('../assets/audios/Bienvenida.wav'));
    document.getElementById('header').appendChild(newEncabezado('Menu principal', 'Libros populares', 'Nuevos libros', '../DOM/libros-populares.html', '../DOM/nuevos-libros.html'));
    document.getElementById('img').appendChild(newImg('../assets/img/Milib.png', 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress('0'));
};

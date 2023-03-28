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
        [null,null,null,null,null,null,'../DOM/MiHistoria.html'],true));
    document.getElementById('img').appendChild(newImg('../assets/img/NuevLanz.png', 'Mi libreria'));
    document.getElementById('progress').appendChild(newProgress(null));
    document.head.appendChild(styleSheet('../estilos/nuevos-lanzamientos.css'));
}

export const miHistoriaApp = () => {
    document.getElementById('audio').appendChild(newAudio('../assets/sonidos/IntroHistoria.wav'));
    /*document.getElementById('article').appendChild(newArticle("Mi historia","Una historia interactiva", 
        "../assets/img/FedericoPortada.png","El inicio", "Hace unos años, había un adolescente llamado Federico. Era una persona muy aplicada en sus estudios y en sus\n"+
        "en casa, siempre cumpliendo con los estándares que le ponían sus maestros y su familia. Además, Federico tenía\n"+
        "mucha creatividad para crear historias de superhéroes, por lo que le apasionaba crear cómics de estos personajes.\n"+
        "\n\n"+"Un día, sus padres le hablaron sobre la importancia de escoger una carrera universitaria, ya que él aún no había\n"+
        "tomado una decisión sobre su futuro. En el fondo, Federico quería estudiar diseño gráfico y tomar cursos de \n"+
        "literatura, pero su padre, un reconocido arquitecto, quería que eligiera una carrera con una buena y segura\n"+
        "salida económica, como medicina o leyes. Federico no sabía qué hacer, ya que quería seguir sus sueños, pero\n"+
        "también quería complacer a su padre.\n\n"+
        "Luego de unos días Federico se dirige a los asesores de la universidad a la que quiere entrar y estos le hacen\n"+
        "la pregunta que no quería responder pues no se sentía listo.\n\n"+
        "¿Que quieres estudiar?\n\n"+ "¿Qué deberá hacer federico?"));*/
    document.getElementById('Progress').appendChild(newProgress('25'));
    document.getElementByIde('opciones').appendChild(newList(['Enfrentarse a sus papas y escoger estudiar lo que quiere','Aceptar lo que quieren sus papas y estudiar arquitectura',
        'Esperar un año para poder tomar una decisión y empezar una vida laboral'],
        ['https://www.ucundinamarca.edu.co/images/ucundinamarca/mantenimiento.png','https://www.ucundinamarca.edu.co/images/ucundinamarca/mantenimiento.png',
        'https://www.ucundinamarca.edu.co/images/ucundinamarca/mantenimiento.png'],true));
}
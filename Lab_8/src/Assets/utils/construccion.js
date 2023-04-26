import shuffle from 'lodash.shuffle';
import {images} from './images';

const num_cartas = 16;

export default () => {
    const imagenes = images;
    let cartas = [];

    while (cartas.length < num_cartas){
        const carta = Math.floor(Math.random() * imagenes.length);

        const laCarta = {
            icono: imagenes.splice(carta, 1)[0],
            fueAdivinada: false
        };

        cartas.push(laCarta);
        cartas.push({...laCarta});
    }
    return shuffle(cartas);
}
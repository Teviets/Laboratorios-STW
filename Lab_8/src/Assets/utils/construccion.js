const num_cartas = 20;

export default () => {
    const  cartas = [];

    while (cartas.length < num_cartas){
        const carta = Math.floor(Math.random() * 1000);

        if (cartas.indexOf(carta) === -1){
            cartas.push(carta);
            cartas.push(carta);
        }
    }
}
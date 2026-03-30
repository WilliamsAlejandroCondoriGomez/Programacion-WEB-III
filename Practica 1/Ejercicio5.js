function miFuncion(texto) {
    texto = texto.toLowerCase();
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    if (texto === invertido) {
        return true;
    } else {
        return false;
    }
}
let band1 = miFuncion("oruro");
console.log(band1);
let band2 = miFuncion("hola");
console.log(band2);
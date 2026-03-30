function miFuncion(arreglo) {
    let [primero, segundo, ...resto] = arreglo;
    return resto;
}
let resultado = miFuncion([10, 20, 30, 40, 50]);
console.log(resultado);
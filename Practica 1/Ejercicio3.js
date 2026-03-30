function miFuncion(arreglo) {
    let resultado = {
        pares: [],
        impares: []
    };
    for (let i = 0; i < arreglo.length; i++) {
        let numero = arreglo[i];
        if (numero % 2 === 0) {
            resultado.pares.push(numero);
        } else {
            resultado.impares.push(numero);
        }
    }
    return resultado;
}
let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj);
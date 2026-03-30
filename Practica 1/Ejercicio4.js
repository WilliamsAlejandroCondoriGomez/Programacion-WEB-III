function miFuncion(arreglo) {
    let mayor = arreglo[0];
    let menor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        let numero = arreglo[i];
        if (numero > mayor) {
            mayor = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }
    return {
        mayor: mayor,
        menor: menor
    };
}
let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj);
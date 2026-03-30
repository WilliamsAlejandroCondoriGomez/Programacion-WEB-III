function miFuncion(arreglo) {
    let [primero, segundo] = arreglo;
    return {
        primero: primero,
        segundo: segundo
    };
}
let obj = miFuncion([10, 20, 30, 40]);
console.log(obj);
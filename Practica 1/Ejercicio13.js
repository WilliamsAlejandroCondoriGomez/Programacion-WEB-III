function pag1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Introducción");
        }, 1000);
    });
}
function pag2(dato) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dato + " -> Desarrollo");
        }, 1000);
    });
}
function pag3(dato) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dato + " -> Conclusión");
        }, 1000);
    });
}
async function ejecucion() {
    let res1 = await pag1();
    console.log(res1);
    let res2 = await pag2(res1);
    console.log(res2);
    let res3 = await pag3(res2);
    console.log(res3);
}
ejecucion();
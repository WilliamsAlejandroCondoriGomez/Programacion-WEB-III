function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Paso 1 completado");
        }, 1000);
    });
}
function paso2(mensaje) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje + " -> Paso 2 completado");
        }, 1000);
    });
}
function paso3(mensaje) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje + " -> Paso 3 completado");
        }, 1000);
    });
}
paso1()
    .then((res1) => {
        console.log(res1);
        return paso2(res1);
    })
    .then((res2) => {
        console.log(res2);
        return paso3(res2);
    })
    .then((res3) => {
        console.log(res3);
    })
function dia() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Buenos Días");
        }, 1000);
    });
}
function tarde(dato) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dato + " -> Buenas Tardes");
        }, 1000);
    });
}
function noche(dato) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dato + " -> Buenas Noches");
        }, 1000);
    });
}
async function ejecutar() {
    let res1 = await dia();
    console.log(res1);
    let res2 = await tarde(res1);
    console.log(res2);
    let res3 = await noche(res2);
    console.log(res3);
}
ejecutar();
async function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}
async function verificar() {
    try {
        console.log(await obtenerDatos())
    } finally {
        console.log("Finalizado");
    }
}
verificar();
function miFuncion(callback){
    setTimeout(() => {
        callback();
    }, 2000);
}
const saludo = () => {
    console.log("Hola Mundo");
}
miFuncion(saludo);
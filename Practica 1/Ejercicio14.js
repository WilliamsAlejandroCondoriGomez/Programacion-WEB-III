// CON PROMESA
function miFuncion1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Realizado con Promesa');
        }, 2000);
    })
}
miFuncion1()
    .then((mensaje) => console.log(mensaje))

// CON CALLBACK
function miFuncion2(callback){
    setTimeout(() => {
        callback();
    }, 2000);
}
const saludo = () => {
    console.log("Realizado con Callback");
}
miFuncion2(saludo);
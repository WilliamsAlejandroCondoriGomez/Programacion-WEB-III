// CON CALLBACK
function miFuncion1(callback){
    setTimeout(() => {
        callback();
    }, 2000);
}
const saludo = () => {
    console.log("Realizado con Callback");
}
miFuncion1(saludo);

// CON PROMESA
function miFuncion2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Realizado con Promesa');
        }, 2000);
    })
}
miFuncion2()
    .then((mensaje) => console.log(mensaje))
function miFuncion(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('éxito');
        }, 3000);
    })
}
miFuncion()
    .then((mensaje) => console.log(mensaje))
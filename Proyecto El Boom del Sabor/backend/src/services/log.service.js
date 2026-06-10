const db = require("../config/db");

const registrarLog = async (

    usuario,
    ip,
    browser,
    evento

) => {

    try {

        await db.query(

            `
            INSERT INTO logs_acceso
            (
                usuario,
                ip,
                browser,
                evento,
                fecha_hora
            )
            VALUES
            (
                ?,?,?,?,NOW()
            )
            `,

            [
                usuario,
                ip,
                browser,
                evento
            ]

        );

    }

    catch(error){

        console.log(
            "Error registrando log",
            error
        );

    }

};

module.exports = {

    registrarLog

};
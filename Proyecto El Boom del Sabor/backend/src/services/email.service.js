const nodemailer =
require("nodemailer");

const transporter =
nodemailer.createTransport({

    service: "gmail",

    auth: {

        user:
        process.env.EMAIL_USER,

        pass:
        process.env.EMAIL_PASS

    }

});

const sendReservationEmail =
async (

    email,

    nombre,

    fecha,

    hora

)=>{

    await transporter.sendMail({

        from:
        process.env.EMAIL_USER,

        to:
        email,

        subject:
        "Reserva Confirmada",

        html: `

        <h2>Hola ${nombre}</h2>

        <p>

        Tu reserva fue registrada.

        </p>

        <p>

        Fecha: ${fecha}

        </p>

        <p>

        Hora: ${hora}

        </p>

        `

    });

};

module.exports = {

    sendReservationEmail

};
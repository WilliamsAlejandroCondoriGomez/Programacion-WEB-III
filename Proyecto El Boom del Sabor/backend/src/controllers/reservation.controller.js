const db = require("../config/db");

const getReservations = async (req, res) => {

    try {

        const [reservas] =
        await db.query(

            `
            SELECT

            r.id,

            u.nombre AS cliente,

            r.fecha,

            r.hora,

            r.personas,

            r.estado

            FROM reservas r

            INNER JOIN usuarios u

            ON r.cliente_id = u.id

            ORDER BY r.fecha DESC

            `
        );

        res.json(reservas);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo reservas"

        });

    }

};

const getReservationById = async (req, res) => {

    try {

        const { id } = req.params;

        const [reserva] =
        await db.query(

            `
            SELECT *
            FROM reservas
            WHERE id = ?
            `,

            [id]

        );

        res.json(reserva[0]);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo reserva"

        });

    }

};

const createReservation = async (req, res) => {

    try {

        const {

            cliente_id,

            fecha,

            hora,

            personas

        } = req.body;

        await db.query(

            `
            INSERT INTO reservas
            (
                cliente_id,
                fecha,
                hora,
                personas
            )
            VALUES
            (
                ?,?,?,?
            )
            `,

            [
                cliente_id,
                fecha,
                hora,
                personas
            ]

        );

        res.status(201).json({

            message:
            "Reserva registrada correctamente"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error creando reserva"

        });

    }

};

const updateReservation = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            fecha,

            hora,

            personas,

            estado

        } = req.body;

        await db.query(

            `
            UPDATE reservas
            SET

            fecha = ?,

            hora = ?,

            personas = ?,

            estado = ?

            WHERE id = ?
            `,

            [
                fecha,
                hora,
                personas,
                estado,
                id
            ]

        );

        res.json({

            message:
            "Reserva actualizada"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error actualizando reserva"

        });

    }

};

const deleteReservation = async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(

            `
            UPDATE reservas
            SET estado = 'CANCELADA'
            WHERE id = ?
            `,

            [id]

        );

        res.json({

            message:
            "Reserva cancelada"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error cancelando reserva"

        });

    }

};

module.exports = {

    getReservations,

    getReservationById,

    createReservation,

    updateReservation,

    deleteReservation

};
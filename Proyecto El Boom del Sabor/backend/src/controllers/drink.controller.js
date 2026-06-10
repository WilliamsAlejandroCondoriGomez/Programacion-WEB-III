const db = require("../config/db");

const getDrinks = async (req, res) => {

    try {

        const [bebidas] =
        await db.query(

            `
            SELECT *
            FROM bebidas
            WHERE estado = 'ACTIVO'
            ORDER BY id DESC
            `
        );

        res.json(bebidas);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo bebidas"

        });

    }

};

const getDrinkById = async (req, res) => {

    try {

        const { id } = req.params;

        const [bebida] =
        await db.query(

            `
            SELECT *
            FROM bebidas
            WHERE id = ?
            `,

            [id]

        );

        res.json(bebida[0]);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo bebida"

        });

    }

};

const createDrink = async (req, res) => {

    try {

        const {

            nombre,
            precio,
            stock,
            imagen

        } = req.body;

        await db.query(

            `
            INSERT INTO bebidas
            (
                nombre,
                precio,
                stock,
                imagen
            )
            VALUES
            (
                ?,?,?,?
            )
            `,

            [
                nombre,
                precio,
                stock,
                imagen
            ]

        );

        res.status(201).json({

            message:
            "Bebida creada correctamente"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error creando bebida"

        });

    }

};

const updateDrink = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            nombre,
            precio,
            stock,
            imagen

        } = req.body;

        await db.query(

            `
            UPDATE bebidas
            SET
            nombre = ?,
            precio = ?,
            stock = ?,
            imagen = ?
            WHERE id = ?
            `,

            [
                nombre,
                precio,
                stock,
                imagen,
                id
            ]

        );

        res.json({

            message:
            "Bebida actualizada"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error actualizando bebida"

        });

    }

};

const deleteDrink = async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(

            `
            UPDATE bebidas
            SET estado = 'ELIMINADO'
            WHERE id = ?
            `,

            [id]

        );

        res.json({

            message:
            "Bebida eliminada"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error eliminando bebida"

        });

    }

};

module.exports = {

    getDrinks,

    getDrinkById,

    createDrink,

    updateDrink,

    deleteDrink

};
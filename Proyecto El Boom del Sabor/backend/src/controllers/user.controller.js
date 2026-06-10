const db = require("../config/db");

const getUsers = async (req, res) => {

    try {

        const [usuarios] =
        await db.query(

            `
            SELECT
            id,
            nombre,
            correo,
            rol,
            estado
            FROM usuarios
            WHERE estado = 'ACTIVO'
            `
        );

        res.json(usuarios);

    }

    catch(error){

        console.log(error);

        res.status(500).json({
            message:
            "Error obteniendo usuarios"
        });

    }

};

const getUserById = async (req, res) => {

    try {

        const { id } = req.params;

        const [usuario] =
        await db.query(

            `
            SELECT
            id,
            nombre,
            correo,
            rol,
            estado
            FROM usuarios
            WHERE id = ?
            `,

            [id]

        );

        res.json(usuario[0]);

    }

    catch(error){

        console.log(error);

        res.status(500).json({
            message:
            "Error obteniendo usuario"
        });

    }

};

const updateUser = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nombre,
            correo,
            rol
        } = req.body;

        await db.query(

            `
            UPDATE usuarios
            SET
            nombre = ?,
            correo = ?,
            rol = ?
            WHERE id = ?
            `,

            [
                nombre,
                correo,
                rol,
                id
            ]

        );

        res.json({

            message:
            "Usuario actualizado"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error actualizando usuario"

        });

    }

};

const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(

            `
            UPDATE usuarios
            SET estado = 'ELIMINADO'
            WHERE id = ?
            `,

            [id]

        );

        res.json({

            message:
            "Usuario eliminado"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error eliminando usuario"

        });

    }

};

module.exports = {

    getUsers,

    getUserById,

    updateUser,

    deleteUser

};
const db = require("../config/db");

const getProducts = async (req, res) => {

    try {

        const [productos] =
        await db.query(

            `
            SELECT *
            FROM productos
            WHERE estado = 'ACTIVO'
            ORDER BY id DESC
            `
        );

        res.json(productos);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo productos"

        });

    }

};

const getProductById = async (req, res) => {

    try {

        const { id } = req.params;

        const [producto] =
        await db.query(

            `
            SELECT *
            FROM productos
            WHERE id = ?
            `,

            [id]

        );

        res.json(producto[0]);

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error obteniendo producto"

        });

    }

};

const createProduct = async (req, res) => {

    try {

        const {

            nombre,
            descripcion,
            precio,
            imagen

        } = req.body;

        await db.query(

            `
            INSERT INTO productos
            (
                nombre,
                descripcion,
                precio,
                imagen
            )
            VALUES
            (
                ?,?,?,?
            )
            `,

            [
                nombre,
                descripcion,
                precio,
                imagen
            ]

        );

        res.status(201).json({

            message:
            "Producto creado correctamente"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error creando producto"

        });

    }

};

const updateProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            nombre,
            descripcion,
            precio,
            imagen

        } = req.body;

        await db.query(

            `
            UPDATE productos
            SET
            nombre = ?,
            descripcion = ?,
            precio = ?,
            imagen = ?
            WHERE id = ?
            `,

            [
                nombre,
                descripcion,
                precio,
                imagen,
                id
            ]

        );

        res.json({

            message:
            "Producto actualizado"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error actualizando producto"

        });

    }

};

const deleteProduct = async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(

            `
            UPDATE productos
            SET estado = 'ELIMINADO'
            WHERE id = ?
            `,

            [id]

        );

        res.json({

            message:
            "Producto eliminado"

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error eliminando producto"

        });

    }

};

module.exports = {

    getProducts,

    getProductById,

    createProduct,

    updateProduct,

    deleteProduct

};
const db =
require("../config/db");

const getStats =
async(req,res)=>{

    try{

        const [usuarios] =
        await db.query(
        "SELECT COUNT(*) total FROM usuarios"
        );

        const [productos] =
        await db.query(
        "SELECT COUNT(*) total FROM productos"
        );

        const [bebidas] =
        await db.query(
        "SELECT COUNT(*) total FROM bebidas"
        );

        const [reservas] =
        await db.query(
        "SELECT COUNT(*) total FROM reservas"
        );

        res.json({

            usuarios:
            usuarios[0].total,

            productos:
            productos[0].total,

            bebidas:
            bebidas[0].total,

            reservas:
            reservas[0].total

        });

    }

    catch(error){

        console.log(error);

        res.status(500).json({

            message:
            "Error dashboard"

        });

    }

};

module.exports = {

    getStats

};
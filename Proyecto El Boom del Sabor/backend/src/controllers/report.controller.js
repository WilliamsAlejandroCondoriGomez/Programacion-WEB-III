const PDFDocument =
require("pdfkit");

const db =
require("../config/db");

const generateUsersReport =
async (req,res)=>{

    const [usuarios] =
    await db.query(

        `
        SELECT *
        FROM usuarios
        `
    );

    const doc =
    new PDFDocument();

    res.setHeader(

        "Content-Type",

        "application/pdf"

    );

    doc.pipe(res);

    doc.fontSize(20);

    doc.text(

        "Reporte Usuarios"

    );

    doc.moveDown();

    usuarios.forEach(

        usuario=>{

            doc.text(

                `${usuario.id} - ${usuario.nombre} - ${usuario.correo}`

            );

        }

    );

    doc.end();

};

module.exports = {

    generateUsersReport

};
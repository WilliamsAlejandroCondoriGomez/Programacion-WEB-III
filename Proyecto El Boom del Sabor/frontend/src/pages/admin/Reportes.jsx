function Reportes(){

    const descargarPDF = ()=>{

        window.open(

        "http://localhost:5000/api/reports/usuarios",

        "_blank"

        );

    };

    return(

        <div className="container">

            <h2>

                Reportes

            </h2>

            <button

            className="btn btn-danger"

            onClick={descargarPDF}

            >

                Descargar PDF Usuarios

            </button>

        </div>

    );

}

export default Reportes;
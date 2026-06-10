import {

Bar

}
from "react-chartjs-2";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

}
from "chart.js";

import {

useEffect,

useState

}
from "react";

import api from "../../services/api";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

);

function Dashboard(){

    const [datos,
    setDatos] =
    useState(null);

    useEffect(()=>{

        cargarDashboard();

    },[]);

    const cargarDashboard =
    async()=>{

        const response =
        await api.get(
            "/dashboard"
        );

        setDatos(
            response.data
        );

    };

    if(!datos){

        return <p>Cargando...</p>;

    }

    const data = {

        labels:[

            "Usuarios",

            "Productos",

            "Bebidas",

            "Reservas"

        ],

        datasets:[{

            label:
            "Estadísticas",

            data:[

                datos.usuarios,

                datos.productos,

                datos.bebidas,

                datos.reservas

            ]

        }]

    };

    return(

    <div className="container mt-5">

        <h1 className="text-center text-danger mb-4">

            Dashboard Administrativo

        </h1>

        <div className="row mb-4">

            <div className="col-md-3">

                <div className="card bg-primary text-white">

                    <div className="card-body">

                        Usuarios

                        <h3>

                            {datos.usuarios}

                        </h3>

                    </div>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card bg-success text-white">

                    <div className="card-body">

                        Productos

                        <h3>

                            {datos.productos}

                        </h3>

                    </div>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card bg-warning">

                    <div className="card-body">

                        Bebidas

                        <h3>

                            {datos.bebidas}

                        </h3>

                    </div>

                </div>

            </div>

            <div className="col-md-3">

                <div className="card bg-danger text-white">

                    <div className="card-body">

                        Reservas

                        <h3>

                            {datos.reservas}

                        </h3>

                    </div>

                </div>

            </div>

        </div>

        <Bar data={data}/>

    </div>

    );

}

export default Dashboard;
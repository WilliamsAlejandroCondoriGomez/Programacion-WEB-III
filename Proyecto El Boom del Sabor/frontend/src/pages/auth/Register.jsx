import { useState } from "react";
import api from "../../services/api";

function Register() {

    const [nombre,setNombre] =
    useState("");

    const [correo,setCorreo] =
    useState("");

    const [password,setPassword] =
    useState("");

    const handleSubmit =
    async (e)=>{

        e.preventDefault();

        try{

            const response =
            await api.post(

                "/auth/register",

                {

                    nombre,

                    correo,

                    password

                }

            );

            alert(

                "Contraseña: " +

                response.data.passwordStrength

            );

        }

        catch(error){

            alert(

                error.response?.data?.message

            );

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center mb-4">

                                Registro de Usuario

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e)=>setNombre(e.target.value)}
                                />

                                <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Correo"
                                value={correo}
                                onChange={(e)=>setCorreo(e.target.value)}
                                />

                                <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />

                                <button
                                className="btn btn-success w-100"
                                >

                                    Registrarse

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;
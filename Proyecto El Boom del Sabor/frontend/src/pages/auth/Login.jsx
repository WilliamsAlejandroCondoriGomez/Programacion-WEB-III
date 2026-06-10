import { useState } from "react";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const [num1] = useState(
        Math.floor(Math.random() * 10) + 1
    );

    const [num2] = useState(
        Math.floor(Math.random() * 10) + 1
    );

    const [captcha, setCaptcha] =
    useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            parseInt(captcha)
            !==
            num1 + num2
        ) {

            alert(
                "CAPTCHA incorrecto"
            );

            return;

        }

        try {

            const response =
            await api.post(

                "/auth/login",

                {

                    correo,

                    password

                }

            );

            localStorage.setItem(

                "token",

                response.data.token

            );

            localStorage.setItem(

                "usuario",

                JSON.stringify(
                    response.data.usuario
                )

            );

            alert(
                "Bienvenido"
            );

            if (
                response.data.usuario.rol
                ===
                "ADMIN"
            ) {

                navigate("/admin");

            }
            else {

                navigate("/home");

            }

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Error al iniciar sesión"

            );

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center mt-5">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2
                                className="text-center mb-4 text-danger"
                            >

                                🍽️ EL BOOM DEL SABOR

                            </h2>

                            <form
                                onSubmit={handleSubmit}
                            >

                                <input

                                    type="email"

                                    className="form-control mb-3"

                                    placeholder="Correo"

                                    value={correo}

                                    onChange={(e) =>
                                        setCorreo(
                                            e.target.value
                                        )
                                    }

                                    required

                                />

                                <input

                                    type="password"

                                    className="form-control mb-3"

                                    placeholder="Contraseña"

                                    value={password}

                                    onChange={(e) =>
                                        setPassword(
                                            e.target.value
                                        )
                                    }

                                    required

                                />

                                <div className="alert alert-warning">

                                    Resuelve la operación:

                                    <strong>

                                        {" "}
                                        {num1}
                                        {" + "}
                                        {num2}
                                        {" "}

                                    </strong>

                                </div>

                                <input

                                    type="number"

                                    className="form-control mb-3"

                                    placeholder="Resultado"

                                    value={captcha}

                                    onChange={(e) =>
                                        setCaptcha(
                                            e.target.value
                                        )
                                    }

                                    required

                                />

                                <button

                                    className="btn btn-success w-100"

                                >

                                    Ingresar

                                </button>

                            </form>

                            <div
                                className="text-center mt-3"
                            >

                                <Link
                                    to="/register"
                                >

                                    Registrarse

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;
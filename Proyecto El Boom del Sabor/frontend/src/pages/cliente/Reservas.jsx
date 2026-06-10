import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import api from "../../services/api";

function Reservas() {

    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [personas, setPersonas] = useState("");

    const reservar = async (e) => {

        e.preventDefault();

        try {

            const usuario = JSON.parse(
                localStorage.getItem("usuario")
            );

            await api.post(
                "/reservations",
                {
                    cliente_id: usuario.id,
                    fecha,
                    hora,
                    personas
                }
            );

            alert("✅ Reserva realizada correctamente");

            setFecha("");
            setHora("");
            setPersonas("");

        } catch (error) {

            console.log(error);

            alert(
                "Error al realizar la reserva"
            );

        }

    };

    return (
        <>
            <Navbar />

            <div className="container py-5">

                <div className="row align-items-center">

                    <div className="col-md-6">

                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                            alt="Restaurante"
                            className="img-fluid rounded shadow"
                        />

                    </div>

                    <div className="col-md-6">

                        <div className="card shadow-lg border-0">

                            <div className="card-body p-4">

                                <h2 className="text-center text-danger mb-4">

                                    🍽 Reservar Mesa

                                </h2>

                                <form onSubmit={reservar}>

                                    <label className="form-label">

                                        Fecha

                                    </label>

                                    <input
                                        type="date"
                                        className="form-control mb-3"
                                        value={fecha}
                                        onChange={(e) =>
                                            setFecha(e.target.value)
                                        }
                                        required
                                    />

                                    <label className="form-label">

                                        Hora

                                    </label>

                                    <input
                                        type="time"
                                        className="form-control mb-3"
                                        value={hora}
                                        onChange={(e) =>
                                            setHora(e.target.value)
                                        }
                                        required
                                    />

                                    <label className="form-label">

                                        Número de Personas

                                    </label>

                                    <input
                                        type="number"
                                        className="form-control mb-4"
                                        value={personas}
                                        onChange={(e) =>
                                            setPersonas(e.target.value)
                                        }
                                        min="1"
                                        max="20"
                                        required
                                    />

                                    <button
                                        className="btn btn-danger w-100"
                                    >

                                        Reservar Ahora

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );

}

export default Reservas;
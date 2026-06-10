import { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";

function ReservasAdmin() {

  const [reservas,setReservas] = useState([
    {
      id:1,
      cliente:"Juan Perez",
      fecha:"2026-06-20",
      hora:"19:00",
      personas:4,
      estado:"PENDIENTE"
    }
  ]);

  const cambiarEstado = (id,estado) => {

    setReservas(
      reservas.map(r =>
        r.id === id
        ? {...r,estado}
        : r
      )
    );

  };

  return(

    <div className="d-flex">

      <SidebarAdmin/>

      <div className="container mt-4">

        <h2>Reservas</h2>

        <table className="table table-bordered">

          <thead>

            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Personas</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>

          </thead>

          <tbody>

            {reservas.map(r => (

              <tr key={r.id}>

                <td>{r.cliente}</td>
                <td>{r.fecha}</td>
                <td>{r.hora}</td>
                <td>{r.personas}</td>
                <td>{r.estado}</td>

                <td>

                  <button
                    className="btn btn-success me-2"
                    onClick={() =>
                      cambiarEstado(
                        r.id,
                        "CONFIRMADA"
                      )
                    }
                  >
                    Confirmar
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      cambiarEstado(
                        r.id,
                        "CANCELADA"
                      )
                    }
                  >
                    Cancelar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ReservasAdmin;
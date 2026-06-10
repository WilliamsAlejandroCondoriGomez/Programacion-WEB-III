import { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";

function UsuariosAdmin() {

  const [usuarios,setUsuarios] = useState([]);

  const [usuario,setUsuario] = useState({
    nombre:"",
    correo:"",
    rol:"CLIENTE"
  });

  const agregarUsuario = () => {

    setUsuarios([
      ...usuarios,
      {
        id:Date.now(),
        ...usuario,
        estado:"ACTIVO"
      }
    ]);

    setUsuario({
      nombre:"",
      correo:"",
      rol:"CLIENTE"
    });

  };

  const bloquearUsuario = (id) => {

    setUsuarios(
      usuarios.map(u =>
        u.id === id
        ? {...u,estado:"BLOQUEADO"}
        : u
      )
    );

  };

  return(

    <div className="d-flex">

      <SidebarAdmin/>

      <div className="container mt-4">

        <h2>Usuarios</h2>

        <input
          className="form-control mb-2"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={(e)=>
            setUsuario({
              ...usuario,
              nombre:e.target.value
            })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Correo"
          value={usuario.correo}
          onChange={(e)=>
            setUsuario({
              ...usuario,
              correo:e.target.value
            })
          }
        />

        <select
          className="form-select mb-3"
          value={usuario.rol}
          onChange={(e)=>
            setUsuario({
              ...usuario,
              rol:e.target.value
            })
          }
        >
          <option>CLIENTE</option>
          <option>ADMIN</option>
        </select>

        <button
          className="btn btn-success"
          onClick={agregarUsuario}
        >
          Crear Usuario
        </button>

        <table className="table mt-4">

          <thead>

            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>

          </thead>

          <tbody>

            {usuarios.map(u=>(

              <tr key={u.id}>

                <td>{u.nombre}</td>
                <td>{u.correo}</td>
                <td>{u.rol}</td>
                <td>{u.estado}</td>

                <td>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      bloquearUsuario(u.id)
                    }
                  >
                    Bloquear
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

export default UsuariosAdmin;
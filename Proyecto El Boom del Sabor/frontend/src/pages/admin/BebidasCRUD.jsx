import { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";

function BebidasCRUD() {

  const [bebidas, setBebidas] = useState([]);

  const [formulario, setFormulario] = useState({
    nombre: "",
    precio: "",
    stock: ""
  });

  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const guardar = () => {

    if(editando){

      setBebidas(
        bebidas.map(b =>
          b.id === editando
          ? {...formulario,id:editando,estado:"ACTIVO"}
          : b
        )
      );

      setEditando(null);

    }else{

      setBebidas([
        ...bebidas,
        {
          id:Date.now(),
          ...formulario,
          estado:"ACTIVO"
        }
      ]);

    }

    setFormulario({
      nombre:"",
      precio:"",
      stock:""
    });

  };

  const editar = (bebida) => {

    setFormulario(bebida);
    setEditando(bebida.id);

  };

  const eliminar = (id) => {

    setBebidas(
      bebidas.map(b =>
        b.id === id
        ? {...b,estado:"ELIMINADO"}
        : b
      )
    );

  };

  return (
    <div className="d-flex">

      <SidebarAdmin />

      <div className="container mt-4">

        <h2>CRUD Bebidas</h2>

        <input
          className="form-control mb-2"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="precio"
          placeholder="Precio"
          value={formulario.precio}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="stock"
          placeholder="Stock"
          value={formulario.stock}
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
          onClick={guardar}
        >
          {editando ? "Actualizar" : "Guardar"}
        </button>

        <table className="table mt-4">

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>

            {bebidas.map(b => (

              <tr key={b.id}>

                <td>{b.nombre}</td>
                <td>{b.precio}</td>
                <td>{b.stock}</td>
                <td>{b.estado}</td>

                <td>

                  <button
                    className="btn btn-warning me-2"
                    onClick={() => editar(b)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => eliminar(b.id)}
                  >
                    Eliminar
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

export default BebidasCRUD;
import { useEffect, useState } from "react";
import api from "../../services/api";

function ProductosCRUD() {

    const [productos, setProductos] = useState([]);

    const [formulario, setFormulario] = useState({

        nombre: "",
        descripcion: "",
        precio: "",
        imagen: ""

    });

    const [editando, setEditando] = useState(false);

    const [idEditar, setIdEditar] = useState(null);

    const cargarProductos = async () => {

        try {

            const response =
            await api.get("/products");

            setProductos(response.data);

        }

        catch(error){

            console.log(error);

        }

    };

    useEffect(() => {

        cargarProductos();

    }, []);

    const handleChange = (e) => {

        setFormulario({

            ...formulario,

            [e.target.name]: e.target.value

        });

    };

    const guardarProducto = async (e) => {

        e.preventDefault();

        try {

            if(editando){

                await api.put(

                    `/products/${idEditar}`,

                    formulario

                );

            }

            else{

                await api.post(

                    "/products",

                    formulario

                );

            }

            setFormulario({

                nombre:"",
                descripcion:"",
                precio:"",
                imagen:""

            });

            setEditando(false);

            cargarProductos();

        }

        catch(error){

            console.log(error);

        }

    };

    const editarProducto = (producto) => {

        setFormulario(producto);

        setIdEditar(producto.id);

        setEditando(true);

    };

    const eliminarProducto = async(id)=>{

        if(!window.confirm(
            "¿Eliminar producto?"
        )) return;

        await api.delete(
            `/products/${id}`
        );

        cargarProductos();

    };

    return (

        <div className="container mt-4">

            <h2>
                CRUD Productos
            </h2>

            <form onSubmit={guardarProducto}>

                <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="form-control mb-2"
                value={formulario.nombre}
                onChange={handleChange}
                />

                <textarea
                name="descripcion"
                className="form-control mb-2"
                placeholder="Descripción"
                value={formulario.descripcion}
                onChange={handleChange}
                />

                <input
                type="number"
                name="precio"
                className="form-control mb-2"
                placeholder="Precio"
                value={formulario.precio}
                onChange={handleChange}
                />

                <input
                type="text"
                name="imagen"
                className="form-control mb-2"
                placeholder="URL Imagen"
                value={formulario.imagen}
                onChange={handleChange}
                />

                <button
                className="btn btn-success"
                >

                    {

                        editando

                        ?

                        "Actualizar"

                        :

                        "Guardar"

                    }

                </button>

            </form>

            <hr />

            <table className="table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        productos.map(

                            producto => (

                                <tr
                                key={producto.id}
                                >

                                    <td>
                                        {producto.id}
                                    </td>

                                    <td>
                                        {producto.nombre}
                                    </td>

                                    <td>
                                        Bs. {producto.precio}
                                    </td>

                                    <td>

                                        <button

                                        className="btn btn-warning me-2"

                                        onClick={()=>
                                        editarProducto(producto)
                                        }

                                        >

                                            Editar

                                        </button>

                                        <button

                                        className="btn btn-danger"

                                        onClick={()=>
                                        eliminarProducto(producto.id)
                                        }

                                        >

                                            Eliminar

                                        </button>

                                    </td>

                                </tr>

                            )

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ProductosCRUD;
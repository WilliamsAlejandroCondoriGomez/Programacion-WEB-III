import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

function FoodCard({ plato }) {

  const { addToCart } = useContext(CartContext);

  const agregar = () => {

    addToCart(plato);

    Swal.fire({
      icon: "success",
      title: "Agregado al carrito",
      timer: 1500,
      showConfirmButton: false
    });

  };

  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <img
          src={plato.imagen}
          alt={plato.nombre}
          className="card-img-top"
          style={{height:"250px", objectFit:"cover"}}
        />

        <div className="card-body">

          <h5>{plato.nombre}</h5>

          <p>{plato.descripcion}</p>

          <h4 className="text-success">
            Bs. {plato.precio}
          </h4>

          <button
            className="btn btn-danger w-100"
            onClick={agregar}
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;
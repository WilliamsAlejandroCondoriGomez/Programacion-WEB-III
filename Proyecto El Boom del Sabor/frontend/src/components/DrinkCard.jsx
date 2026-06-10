import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

function DrinkCard({ bebida }) {

  const { addToCart } = useContext(CartContext);

  const agregar = () => {

    addToCart(bebida);

    Swal.fire({
      icon: "success",
      title: "Bebida agregada",
      timer: 1500,
      showConfirmButton: false
    });

  };

  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <img
          src={bebida.imagen}
          alt={bebida.nombre}
          className="card-img-top"
          style={{height:"250px", objectFit:"cover"}}
        />

        <div className="card-body">

          <h5>{bebida.nombre}</h5>

          <h4 className="text-success">
            Bs. {bebida.precio}
          </h4>

          <button
            className="btn btn-warning w-100"
            onClick={agregar}
          >
            Agregar
          </button>

        </div>

      </div>

    </div>
  );
}

export default DrinkCard;
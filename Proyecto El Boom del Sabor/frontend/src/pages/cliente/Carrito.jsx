import { useContext } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { CartContext } from "../../context/CartContext";

function Carrito() {

  const {
    cart,
    removeFromCart,
    clearCart,
    total
  } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="mb-4">

          Mi Carrito

        </h1>

        {
          cart.length === 0 ? (

            <div className="alert alert-warning">

              No existen productos agregados.

            </div>

          ) : (

            <>
              <table className="table table-bordered">

                <thead>

                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acción</th>
                  </tr>

                </thead>

                <tbody>

                  {
                    cart.map((item,index) => (

                      <tr key={index}>

                        <td>{item.nombre}</td>

                        <td>Bs. {item.precio}</td>

                        <td>

                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                          >
                            Eliminar
                          </button>

                        </td>

                      </tr>

                    ))
                  }

                </tbody>

              </table>

              <h3 className="text-success">

                Total: Bs. {total}

              </h3>

              <button
                className="btn btn-warning me-2"
                onClick={clearCart}
              >
                Vaciar Carrito
              </button>

              <button
                className="btn btn-success"
              >
                Confirmar Pedido
              </button>

            </>
          )
        }

      </div>

      <Footer />
    </>
  );
}

export default Carrito;
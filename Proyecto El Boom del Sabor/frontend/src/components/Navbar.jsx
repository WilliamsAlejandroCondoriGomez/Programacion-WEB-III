import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const cerrarSesion = () => {

    localStorage.removeItem("usuario");
    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >

      <div className="container">

        <Link
          className="navbar-brand"
          to="/home"
        >
          El Boom del Sabor
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span
            className="navbar-toggler-icon"
          ></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >

          <ul className="navbar-nav me-auto">

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/home"
              >
                Inicio
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/menu"
              >
                Menú
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/bebidas"
              >
                Bebidas
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/galeria"
              >
                Galería
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/reservas"
              >
                Reservas
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/carrito"
              >
                Carrito
              </Link>

            </li>

          </ul>

          <button
            className="btn btn-warning"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;
import { Link } from "react-router-dom";

function SidebarAdmin() {

  return (

    <div
      className="bg-dark text-white p-3"
      style={{
        minHeight:"100vh",
        width:"250px"
      }}
    >

      <h4 className="text-center">

        ADMIN

      </h4>

      <hr/>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin"
          >
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin/productos"
          >
            Productos
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin/bebidas"
          >
            Bebidas
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin/reservas"
          >
            Reservas
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin/usuarios"
          >
            Usuarios
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin/reportes"
          >
            Reportes
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/admin/estadisticas"
          >
            Estadísticas
          </Link>
        </li>

      </ul>

    </div>

  );
}

export default SidebarAdmin;
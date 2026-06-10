import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/cliente/Home";
import Menu from "../pages/cliente/Menu";
import Bebidas from "../pages/cliente/Bebidas";
import Galeria from "../pages/cliente/Galeria";
import Reservas from "../pages/cliente/Reservas";
import Contacto from "../pages/cliente/Contacto";
import Carrito from "../pages/cliente/Carrito";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* CLIENTE */}

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bebidas"
          element={
            <ProtectedRoute>
              <Bebidas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/galeria"
          element={
            <ProtectedRoute>
              <Galeria />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reservas"
          element={
            <ProtectedRoute>
              <Reservas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contacto"
          element={
            <ProtectedRoute>
              <Contacto />
            </ProtectedRoute>
          }
        />

        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <Carrito />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default AppRoutes;
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Agregar from "./Agregar";
import Register from './CrearCuenta';
import Editar from "./Editar";
import './index.css';
import Login from './IniciarSesion';

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
        {/* Header */}
        <header className="bg-verdeHoja text-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Wild Learning</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link to="/" className="hover:text-verdeNeon transition">Inicio</Link>
          </nav>
          <div className="flex gap-2">
            <Link to="/iniciarsesion" className="bg-naranja hover:bg-orange-700 transition px-4 py-2 rounded-xl text-sm font-semibold shadow">
              Iniciar sesión
            </Link>
            <Link to="/crearcuenta" className="bg-verdeNeon hover:bg-verdeMedio transition px-4 py-2 rounded-xl text-sm font-semibold shadow">
              Crear cuenta
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Buscador */}
              <section className="bg-white shadow-sm py-6 px-6">
                <div className="relative max-w-xl mx-auto">
                  <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-verdeMedio shadow-sm"
                  />
                </div>
              </section>

              {/* Secciones */}
              <main className="flex-grow px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/agregar"
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                      <h2 className="text-xl font-semibold text-verdeHoja mb-2">Agregar especie</h2>
                      <p className="text-sm text-gray-600">
                      Añade nuevas especies a la base de datos.
                    </p>
                </Link>
              <Link to="/editar"
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                      <h2 className="text-xl font-semibold text-verdeHoja mb-2">Editar/Modificar</h2>
                      <p className="text-sm text-gray-600">
                      Modifica información de especies existentes.
                      </p>
              </Link>
              <Link to="/visualizar"
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                    <h2 className="text-xl font-semibold text-verdeHoja mb-2">Visualizar</h2>
                    <p className="text-sm text-gray-600">
                    Explora todas las especies registradas.
                    </p>
              </Link>
              </main>
            </>
          } />
          <Route path="/iniciarsesion" element={<Login />} />
          <Route path="/crearcuenta" element={<Register />} />
          <Route path="/agregar" element={< Agregar/>} />
          <Route path="/editar" element={<Editar/>} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-200 text-center text-sm text-gray-600 py-4 mt-10">
          © {new Date().getFullYear()} Wild Learning. Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
}

export default App;
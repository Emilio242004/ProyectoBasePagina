import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Menu() {
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    fetch('http://localhost:5000/') // Hacer la petición al backend
      .then(response => response.text()) // Obtener la respuesta en texto
      .then(data => setMessage(data)) // Guardar la respuesta en el estado
      .catch(error => setMessage('Error al conectar con el servidor'));
  }, []);

  return (
    <div className="menu-container">
      <h1 className="menu-title">{message}</h1>
      <div className="menu-buttons">
        <Link to="/agregar"><button className="menu-button">Agregar Especie</button></Link>
        <Link to="/modificar"><button className="menu-button">Modificar Especie</button></Link>
        <Link to="/Visualizar"><button className="menu-button">Visualizar</button></Link>
        <Link to="/CerrarSesion"><button className="menu-button">Cerrar Sesión</button></Link>
      </div>
    </div>
  );
}

function AgregarEspecie() {
  return <h2>Pagina Agregar Especie</h2>;
}

function ModificarEspecie() {
  return <h2>Pagina Modificar Especie</h2>;
}

function Visualizar() {
  return <h2>Pagina Principal</h2>;
}

function CerrarSesion() {
  return <h2>Pagina Principal</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/agregar" element={<AgregarEspecie />} />
        <Route path="/modificar" element={<ModificarEspecie />} />
        <Route path="/visualizar" element={<Visualizar />} />
        <Route path="/cerrarsesion" element={<CerrarSesion/>} />
      </Routes>
    </Router>
  );
}

export default App;

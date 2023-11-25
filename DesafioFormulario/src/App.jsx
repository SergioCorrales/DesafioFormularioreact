import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Registro from './components/Registro';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('success'); 
  const manejarRegistro = (exito, mensaje) => {
    setMensaje(mensaje);
    setTipoAlerta(exito ? 'success' : 'danger');
  };

  return (
    <div className="container mt-5 card-container">
      <div className="card card-style">
        <div className="card-body">
          <h1 className="card-title text-center">Crea una cuenta</h1>

          <Registro onRegistro={manejarRegistro} />

          <Formulario onRegistro={manejarRegistro} />
          
          {mensaje && <Alert mensaje={mensaje} tipo={tipoAlerta} />}
        </div>
      </div>
    </div>
  );
}

export default App;
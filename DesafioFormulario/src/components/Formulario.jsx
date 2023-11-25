import React, { useState } from 'react';

const Formulario = ({ onRegistro }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [error, setError] = useState(false);
  const [errorContraseña, setErrorContraseña] = useState(false);
  const validarDatos = (e) => {
    e.preventDefault();

    // Validación
    if (nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '') {
      onRegistro(false, 'Todos los campos son obligatorios');
      setError(true);
      return;
    }

    if (contraseña !== confirmarContraseña) {
      onRegistro(false, 'Las contraseñas no coinciden');
      setErrorContraseña(true);
      return;
    }

    // Registro exitoso
    onRegistro(true, 'Registro exitoso');
    setError(false);
    setErrorContraseña(false);
    setNombre('');
    setEmail('');
    setContraseña('');
    setConfirmarContraseña('');
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmarContraseña"
            className="form-control"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>

        <button type="submit" className="btn btn-success boton-enviar">
          Registrarse
        </button>
      </form>


    </>
  );
};

export default Formulario;
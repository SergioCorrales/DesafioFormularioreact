import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  const alertClass = tipo === 'success' ? 'alert-success' : 'alert-danger';

  return (
    <div className={`alert ${alertClass}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
import React from 'react';
import SocialButton from './SocialButton';

const Registro = () => {
  return (
    <div className="row">
      <div className="col">
        <SocialButton socialMedia="facebook" />
      </div>
      <div className="col">
        <SocialButton socialMedia="github" />
      </div>
      <div className="col">
        <SocialButton socialMedia="linkedin" />
      </div>
      <div>
        <p className='texto-redes'>O usa tu email para registrarte</p>
      </div>
    </div>
  );
};

export default Registro;
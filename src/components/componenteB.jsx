import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ComponenteB(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h3>
       {conectado === false ? 'Usuario Desconectado' : 'Contacto conectado'}
       </h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'en Linea' : 'Desconectado'}</button>
    </div>
  );
}

ComponenteB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponenteB;
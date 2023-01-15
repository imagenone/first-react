import React from 'react';
import PropTypes from 'prop-types';


const Showhello = () => {

    const setConectado ={
        nombre:"jose"
    }

    return (
        <div>
            <h1>
                hola desde componete showhello
            </h1>
            <button onClick={() => setConectado()}>boton

            </button>
        </div>
    );
};


Showhello.propTypes = {

};


export default Showhello;

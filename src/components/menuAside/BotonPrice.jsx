import React from 'react';

const BotonPrice = ({ filtrar, filtro }) => {
    return (
        <div className="buttonFilterContainer">
            <button style={{ color: '#38f' }} onClick={() => filtrar(filtro)}>
                hasta ${filtro}
            </button>
        </div>
    );
};

export default BotonPrice;

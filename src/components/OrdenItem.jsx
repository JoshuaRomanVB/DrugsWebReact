import React, { useContext } from 'react';
import '@styles/OrdenItems.scss';
import AppContext from '../context/AppContext';

const Ordenitem = ({ item, indexValue }) => {

  const { eliminarCarrito } = React.useContext(AppContext)

  const handleRemove = (index) => {
    eliminarCarrito(index)
  }

  return (
    <div className="orden_items">
      <img src={item.image} alt={item.title} className="img_articulo" />
      <div className="descripcion3">
        <p>{item.title}</p>
      </div>
      <div className="total">
        <h2>${item.price}</h2>
      </div>
      <button className="borrar_item" onClick={()=> handleRemove(indexValue)}>
        X
      </button>
    </div>
  );
};

export default Ordenitem;

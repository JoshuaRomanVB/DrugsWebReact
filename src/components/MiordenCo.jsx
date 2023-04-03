import React, { useContext } from "react";
import "@styles/MiOrdenCo.scss";
import Ordenitem from "@Components/OrdenItem";
import AppContext from '../context/AppContext';

const MiOrdenCo = () => {
  const { state } = useContext(AppContext);

  const total = state.carrito.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container_ordenCo">
      <div className="content_ordenCo">
        <h1>Mi orden</h1>

        {state.carrito.map((item, index) => (
          <Ordenitem key={index} item={item} indexValue={index} />
        ))}

        <div className="buttonTotalco">
          <h2 className="textTotalco">Total: {total}</h2>
        </div>
      </div>
    </div>
  );
};

export default MiOrdenCo;

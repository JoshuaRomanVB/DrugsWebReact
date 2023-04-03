import React, { useContext } from "react";
import '@styles/MiOrden.scss';
import Orden from '@Components/Orden';
import Ordenitem from '@Components/OrdenItem';
import AppContext from '../context/AppContext';


 const MiOrden = () => {
    const { state } = useContext(AppContext);
    return (
        <div className="container_orden">
            <div className="content_orden">
                <Orden/>
                {state.carrito.map((item, index) => (
          <Ordenitem key={index} item={item} indexValue={index} />
        ))} 

            </div>              
        </div>

    );
 }

 export default MiOrden;
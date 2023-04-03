import React, { useState } from 'react'

const estadoInicial = {
  carrito: [],
};

const useEstadoInicial = () => {
  const [state, setState] = useState(estadoInicial);

  const agregarCarrito = (payload) => {
    setState({
      ...state,
      carrito: [...state.carrito, payload],
    });
  };

  const eliminarCarrito = (indexValue) => {

    setState({
      ...state,
      carrito: 
      state.carrito.filter((item,index) => index !== indexValue),
    });
  };

  return {
    state,
    agregarCarrito,
    eliminarCarrito,
  };
};

export default useEstadoInicial;

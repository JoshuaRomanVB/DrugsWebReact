import React from "react";
import '../styles/NoEncontrado.scss'

const NoEncontrado = () => {
    return (
    <div className="noencontrado">
        <div className="form-container">
            <h1 className="h1c"> 404</h1>
            <h2>Lo siento, página no encontrada </h2>
            <p>La página que está buscando se movió, quitó renombró o podria no existir nunca</p>
            <button className="boton-principal"> Ir a Casa</button>
        </div>
        
    </div>
       
    );
}

export default NoEncontrado;
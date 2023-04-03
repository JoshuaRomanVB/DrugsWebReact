import React from "react";
import '@styles/CrearCuenta.scss'
const CrearCuenta = () => {
    return (
        <div className="crearcuenta">
        <div className="form-container">
            <form action="" className="formulario-login">
            <h1>Mi cuenta</h1>
                <label htmlFor="text" className="label" >Nombre:</label>
                <input type="text" className="input" placeholder="joshua V"/>
                <label htmlFor="email" className="label" >Correo Electronico:</label>
                <input type="text" className="input" placeholder="tucorreo@dominio.com"/>
                <label htmlFor="email" className="label" >Contraseña:</label>
                <input type="text" className="input" placeholder="**********"/>
            </form>
            <input type="submit" className="boton-principal" value="Guardar"/>
        </div>

    </div>

                        );
}

export default CrearCuenta;
import React from 'react';
import '@styles/NuevoPass.scss'
import logo from '@assets/televisa.png'
const NuevoPass = () => {
    return ( 
        <div className="nuevopass">
            <div className="form-container">
                <img src={logo}  className="logo" />
                <h1 >Crear nueva contraseña</h1>
                <p className="label-p">Ingresa la nueva contraseña</p>
                <form action="/login" className="formulario-nuevopass">
                    <label className="label">Contraseña</label>
                    <input type="password" className="input" placeholder="*********************" />
                    <label className="label">Confirmar contraseña</label>
                    <input type="password" className="input" placeholder="*********************" />
                    <button className="boton-primario" value="Confirmar-contra">Ir a Login</button>
                </form>
            </div>
        </div>
    );
}

export default NuevoPass;
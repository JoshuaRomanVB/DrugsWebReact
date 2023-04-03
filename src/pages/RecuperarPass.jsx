import React from 'react'
import logo from '@assets/televisa.png'
import '@styles/RecuperarPass.scss'
const RecuperarPass = () => {
    return (
        <div className="recuperarpass">
            <div className="recuperar-container">
                <img src={logo} alt="" className="logo" />
                <h1>Recuperar contraseña</h1>
                <p className="p">Ingresa la dirección de correo electronico asociada a tu cuenta</p>
                <form action="/emailenviado" className="formulario-recuperarpass">
                    <label htmlFor="email" className="label" >Correo Electronico</label>
                    <input type="text" className="input" placeholder="tucorreo@dominio.com" />
                    <input href="/home" type="submit" className="boton-principall" value="Confirmar" />
                </form>
            </div>
        </div>
    )
}

export default RecuperarPass
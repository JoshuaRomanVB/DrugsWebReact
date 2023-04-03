import React from 'react';
import '@styles/EmailEnviado.scss';
import logomail from '@assets/email.png';

const EmailEnviado = () => {
    return (
        <div className="emailenviado">
            <div className="form-container">
                <h1>Correo de restablecimiento enviado</h1>
                <p className="p-secundaria">Se ha enviado un mensaje a tu correo electronico para restablecer tu contraseña</p>
                <img src={logomail} alt className="logomail" />
                <form action="/nuevopass" className="formulario-login">
                <input type="submit" className="boton-principal" defaultValue="Login" value="Cambiar"/>
                </form>
                <p className="p-secundaria">¿No te llego? </p>
                <a href="/" className="reenviar">Reenviar</a>
            </div>
        </div>
    );
}

export default EmailEnviado;
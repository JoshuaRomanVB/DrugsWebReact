import React,{useRef} from "react";
import '@styles/Login.scss'
import logo from '@assets/televisa.png'
import axios from "axios";
import { useHref } from "react-router-dom";

const Login = () => {

//crear una constante asignandole el valor de useRef

const formulario = useRef(null)

const handleSubmit = ()=>{

    const formData = new FormData(formulario.current)

    const data = {
        username: formData.get('email'),
        password:formData.get('pass')
    }

    axios.post('https://fakestoreapi.com/auth/login', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      
      console.log(error);
    });
}



    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="" className="logo" />
                {/* Agregar ref y pasar la constante al formulario */}
                <form action="" className="formulario-login" ref={formulario}>
                    <label htmlFor="email" className="label" >Correo Electronico</label>
                    {/* cambiar los id por name */}
                    <input type="text" className="input" name="email" placeholder="tucorreo@dominio.com" />
                    {/* Verificar htmlFor */}
                    <label htmlFor="email" className="label" >Contraseña</label>
                    <input type="text" className="input" name="pass" placeholder="**********" />
                    {/* Evento onclick */}
                    <a href="/home" className="boton-principall">Iniciar Sesión</a>
                </form>
                <a href="/RecuperarPass" className="recuperar">Olvide mi contraseña</a>

                <a href="/crearcuenta" className="boton-secundariol">Registrarse</a>
        
            </div>
        </div>

    );
}

export default Login;
import React from 'react'
import '@styles/MiCuenta.scss'
const MiCuenta = () => {
  return (
    <div className="cuenta">
        <div className="form-container">
            <h1>Mi cuenta</h1>
                <label htmlFor="text" className="label" >Nombre:</label>
                <label type="text" className="label-sub">Joshua Vazquez</label>
                <label htmlFor="email" className="label" >Correo Electronico:</label>
                <label type="text" className="label-sub">tucorreo@dominio.com</label>
                <label htmlFor="email" className="label" >Contraseña:</label>
                <label type="text" className="label-sub">**********</label>
          
            <input type="submit" className="boton-secundario" value="Editar"/>
        </div>

    </div>
  )
}

export default MiCuenta
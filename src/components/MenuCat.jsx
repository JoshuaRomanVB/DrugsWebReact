import React from 'react'
import '@styles/MenuCat.scss';
const MenuCat = () => {
  return (
    <div className='menu-container-nav'>
    <ul>
    <li>
            <h2>Categorias</h2>
        </li>
        <li>
            <a href='/home'>Todos</a>
        </li>
        <li>
            <a href='/home'>Ropa</a>
        </li>
        <li>
            <a href='/home'>Electronica</a>
        </li>

        <li>
            <a href='/home'>Mueble</a>
        </li>

        <li>
            <a href='/micuenta'>Mi cuenta</a>
        </li>

        <li>
            <a href='/login'>Cerrar sesión</a>
        </li>
    </ul>

</div>
  )
}

export default MenuCat
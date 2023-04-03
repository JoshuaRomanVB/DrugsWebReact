import React from 'react';
import '@styles/Menu.scss';
const Menu = () => {
    return (
        <div className='menu-container'>
            <ul>
                <li>
                    <a href='/orden'>Mis ordenes</a>
                </li>
                <li>
                    <a href='/micuenta'>Mi cuenta</a>
                </li>
                <li>
                    <a href='/login'>Cerrar sesion</a>
                </li>
            </ul>

        </div>
    );
}

export default Menu;
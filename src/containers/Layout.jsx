import React from 'react';
import Navbar from '@Components/Navbar';
const Layout = ({children})=>{
    return (
        <div className="Layout">
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;
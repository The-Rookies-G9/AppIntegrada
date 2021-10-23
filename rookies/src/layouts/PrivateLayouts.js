import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React from 'react';

//Este es el layout privado donde solo acceden los roles autorizados como administradores 
//y vendedores.

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main >{children}</main>           
        </div>
    )
}

export default PrivateLayout;
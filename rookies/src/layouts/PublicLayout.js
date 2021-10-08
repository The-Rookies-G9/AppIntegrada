import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';


 //Esta es el layout publico o el landing page, el cual puede acceder todos hasta los clientes
 //esta no se toca es la que va organizar la estructura de fondo de la landing page, 
 //solo si se quiere adicionar un sidebar o eliminar el footer se recomienda tocar

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default PublicLayout;


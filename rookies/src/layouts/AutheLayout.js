import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';

//Este es el layout de autenticación es decir es login y  registro
//jesus tu miras si deseas que tenga  sidebar footer header o no, puse sidebar pero tu decides

const AuthLayout = () => {
    return (
        <div>
            <Sidebar />
            <main></main>
            
        </div>
    )
}

export default AuthLayout;
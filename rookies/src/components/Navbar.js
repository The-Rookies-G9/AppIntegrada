import Logo from './Logo.png';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { React, useState } from 'react';




function Navbar() {

    const clientId = "981132695931-k1p98c8r706c642bth0eiik44u99v736.apps.googleusercontent.com";
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
 
    const onLoginSuccess = (res) => {
        console.log('Login Exitoso:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Algo falló, vuelve a intentarlo:', res);
    };

    const onSignoutSuccess = () => {
        alert("Has cerrado la sesión satisfactoriamente");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };







    return (
        <div>
            <ul className="navbar fixed-top">
                <li>
                    <a className="navbar-brand" href="/pages/indexpage">
                        <img className="imglogo"
                            src={Logo}
                            height="75"
                            alt="" />
                    </a>
                </li>

                <hr />

                <li className="text-uppercase font-weight-bold ">
                    <a class="nav-links" href="/Admin/Admin">ADMIN</a>
                </li>

                <li className="text-uppercase font-weight-bold">
                    <a class="nav-links" href="/Admin/Pdtos">PRODUCTOS</a>
                </li>

                <li className="text-uppercase font-weight-bold">
                    <a class="nav-links" href="/Admin/RolesUsu">ROLES</a>
                </li>

                <li className="text-uppercase font-weight-bold">
                    <a class="nav-links" href="/Admin/Vtas">VENTAS</a>
                </li>

                <hr />

                <li>
                    
                    <div>

                    { showloginButton ?
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Login con Google"
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        /> : null}

                    { showlogoutButton ?
                        <GoogleLogout
                            clientId={clientId}
                            buttonText="Cerrar Sesión"
                            onLogoutSuccess={onSignoutSuccess}
                            
                        >
                        </GoogleLogout> : null
                    }
                    </div>




                </li>

                <hr />

            </ul>
        </div>
    );
}


export default Navbar;
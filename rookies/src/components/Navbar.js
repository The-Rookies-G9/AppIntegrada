import React from 'react';
import Logo from './Logo.png';



const firebaseConfig = {
    apiKey: "AIzaSyDt1RxoybACqJNQXBafGK-zNnu9hR30Bj0",
    authDomain: "oceanic-camera-328004.firebaseapp.com",
    projectId: "oceanic-camera-328004",
    storageBucket: "oceanic-camera-328004.appspot.com",
    messagingSenderId: "663883928009",
    appId: "1:663883928009:web:41ea9fb69ae13fec7f9818",
    measurementId: "G-MP0KM0PW8L"
  };











const Navbar = () => {
    return (
        <div>
            <ul class="navbar fixed-top">
                <li>
                    <a class="navbar-brand" href="#">
                        <img
                            src= {Logo}
                            height="50"
                            alt=""

                        />
                    </a>
                </li>

                <hr/>
 
                <li className="text-uppercase font-weight-bold ">
                <a path ="/Admin/Admin">ADMIN</a>
                </li>         

                <li className="text-uppercase font-weight-bold">
                <a path ="/Admin/Pdtos">PRODUCTOS</a>
                </li> 

                <li className="text-uppercase font-weight-bold">
                <a path ="/Admin/RolesUsu">ROLES</a>
                </li>   

                <li className="text-uppercase font-weight-bold">
                <a path ="/Admin/Vtas">VENTAS</a>
                </li>     

                <hr/>

                <li>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <div class="g_id_signin"
                    data-type="standard"
                    data-shape="rectangular"
                    data-theme="filled_blue"
                    data-text="$ {button.text}"
                    data-size="medium"
                    data-locale="es-419"
                    data-logo_alignment="left">
                        
                </div>
                <div id="g_id_onload"
                    data-client_id="663883928009-htpqqnqu74irl4334peh07b6lve7vj96.apps.googleusercontent.com"
                    data-context="signin"
                    data-ux_mode="popup"
                    data-login_uri="https://localhost:3001"
                    data-native_login_uri="https://localhost:3001">

                </div>



                <div class="g_id_signout"><h7>Cerrar Sesión</h7></div>
      



                </li>     
            </ul>
            
        </div>
    )
}

export default Navbar;
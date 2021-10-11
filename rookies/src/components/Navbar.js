import React from 'react';


const Navbar = () => {
    return (
        <div>
            <ul class="navbar">
                <li className="text-uppercase font-weight-bold">
                    <a href="#!">LOGO</a>
                </li>
 
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

                <li className="text-uppercase font-weight-bold">
                <a href="#">LOGIN</a>
                </li>     
            </ul>
            Este es el navbar o header para las paginas de las secciones 
        </div>
    )
}

export default Navbar;
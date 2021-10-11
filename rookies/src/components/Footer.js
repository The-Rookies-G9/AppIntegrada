import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

<footer class="text-center text-white fixed-bottom" style="background-color: #21081a;"></footer>
const Footer = () => {
  return (
    
    <MDBFooter color="unique-color-dark" >
      <div style={{ backgroundColor: "#2a3f85" }}>
        <MDBContainer>
          <MDBRow className="py-2 d-flex align-items-center">
            <MDBCol>

            </MDBCol>
           </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer fixed-bottom>
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>SOBRE NOSOTROS</strong>
            </h6>
            <hr  style={{ color: "#00D8F5" }} />
            <p>
            Proyecto de Desarrollo de Software del ciclo 3 del programa MisionTic 2022
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>PRODUCTOS</strong>
            </h6>
            <hr  style={{ color: "#00D8F5" }} />
            <p>
              <a href="#!">Damas</a>
            </p>
            <p>
              <a href="#!">Caballeros</a>
            </p>
            <p>
              <a href="#!">Niños</a>
            </p>

          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>ENLACES</strong>
            </h6>
            <hr  style={{ color: "#00D8F5" }} />
            <p>
            <a path ="/Admin/Admin">ADMIN</a>
            </p>
            <p>
            <a path ="/Admin/Pdtos">PRODUCTOS</a>
            </p>
            <p>
            <a path ="/Admin/RolesUsu">ROLES</a>
            </p>
            <p>
            <a path ="/Admin/Vtas">VENTAS</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONTACTO</strong>
            </h6>
            <hr  style={{ color: "#00D8F5" }} />
            <p>
              <i className="fa fa-home mr-3" /> Calle 35 # 8-80 Cali, CO
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> admin@therookies.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 620 318 895 045
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.TheRookies.com"> TheRookies.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
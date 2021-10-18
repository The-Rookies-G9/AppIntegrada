import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Footer = () => {
  return (
    
    <MDBFooter  style={{ backgroundColor: "#0D0F1D" }}>
      <div style={{ backgroundColor: "#2047C5" }}>
        <MDBContainer>
          <MDBRow className="py-2 d-flex ">

           </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer fixed-bottom>
        <MDBRow className="mt-3">
          <MDBCol >
            <h6 className="text-uppercase font-weight-bold">
              <strong>SOBRE NOSOTROS</strong>
            </h6>

            Proyecto de Desarrollo de Software del ciclo 3 del programa MisionTic 2022. Universidad de Antioquia  

          </MDBCol>
          <MDBCol >
            <h6 className="text-uppercase font-weight-bold" colors="blue">
              <strong>PRODUCTOS</strong>
            </h6>

            <p>
              <a class="footer-links" href="#!">DAMAS</a>
            </p>
            <p>
              <a class="footer-links" href="#!">CABALLEROS</a>
            </p>
            <p>
              <a class="footer-links" href="#!">INFANTIL</a>
            </p>

          </MDBCol>
          <MDBCol >
            <h6 className="text-uppercase font-weight-bold">
              <strong>ENLACES</strong>
            </h6>

            <p>
            <a class="footer-links" href="/Admin/Admin">ADMIN</a>
            </p>
            <p>
            <a class="footer-links" href="/Admin/Pdtos">PRODUCTOS</a>
            </p>
            <p>
            <a class="footer-links" href="/Admin/RolesUsu">ROLES</a>
            </p>
            <p>
            <a class="footer-links" href="/Admin/Vtas">VENTAS</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONTACTO</strong>
            </h6>

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
         Copyright • <a class="footer-links" href="https://www.TheRookies.com"> TheRookies.com</a>  • 2021
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
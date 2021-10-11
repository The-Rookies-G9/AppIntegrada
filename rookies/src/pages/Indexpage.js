import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';


import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';
  



const Index = () => {
    return (
        <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
  
          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
  
          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' alt='...' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }

export default Index;
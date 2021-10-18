import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import CRR1 from "./media/CRR1.jpg"
import CRR2 from "./media/CRR2.jpg"
import CRR3 from "./media/CRR3.jpg"
import CRR4 from "./media/CRR4.jpg"
import CRR5 from "./media/CRR5.jpg"

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
  } from 'mdb-react-ui-kit';
  



const Index = () => {
    return (
        <MDBCarousel showIndicators showControls fade position="absolute">
        <MDBCarouselInner>
          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement src={CRR1} alt='...' />
          </MDBCarouselItem>
  
          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement src={CRR2} alt='...' />
          </MDBCarouselItem>
  
          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement src={CRR3} alt='...' />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
            <MDBCarouselElement src={CRR4} alt='...' />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={4}>
            <MDBCarouselElement src={CRR5} alt='...' />
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>

    );
  }

export default Index;
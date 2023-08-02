import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Impressum = () => {
  return (
    <MDBFooter bgColor='light' className='max-w-[1040px] m-auto pl-0 justify-center text-center text-lg-start text-muted'>
      <MDBContainer>
        <MDBRow className='mt-3'>
          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold w-[100px] m-auto text-white bg-black rounded-xl shadow-xl shadow-gray-500 mb-4'>Impressum</h6>
            <p className='text-xs m-auto text-muted'>
              <MDBIcon icon='home' className='me-2' />
              Eching am Ammersee, 82279, DE
            </p>
            <p className='text-xs m-auto text-muted'>
              <MDBIcon icon='envelope' className='me-3' />
              dennisdiepolder@outlook.com
            </p>
            <p className='text-xs m-auto text-muted'>
              <MDBIcon icon='phone' className='me-3' /> +49 160 91208750
            </p>
            <p className='text-xs m-auto text-muted'>
              <MDBIcon icon='cookies' className='me-3' /> This website only uses technically necessary cookies. These cookies are essential for the operation of the website and do not store any personally identifiable information. By continuing to browse the site, you agree to the use of these cookies. The website collects no personal data.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-1 rounded-xl'>
        <p className="mb-0">© 2023 dennisdiepolder.com</p>
        <p className="mb-0">All rights reserved</p>
      </div>
    </MDBFooter>
  );
}

export default Impressum;

/*import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CustomNavbar from './Navbar';

function ResponsiveNavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                Launch
            </Button>

            <Alert variant="info" className="d-none d-lg-block">
                Resize your browser to show the responsive offcanvas toggle.
            </Alert>

            <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CustomNavbar />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ResponsiveNavbar;

*/

// import React, { useState } from 'react';
// import {
//     MDBIcon,
//     MDBBtn,
//     MDBSideNav,
//     MDBSideNavItem,
//     MDBSideNavLink,
//     MDBSideNavMenu,
//     MDBSideNavCollapse
// } from 'mdb-react-ui-kit';

// export default function ResponsiveNavbar() {
//     const [basicOpen, setBasicOpen] = useState(true);
//     const [basicCollapse1, setBasicCollapse1] = useState(true);
//     const [basicCollapse2, setBasicCollapse2] = useState(false);

//     return (
//         <>
//             <MDBSideNav isOpen={basicOpen} absolute getOpenState={(e: any) => setBasicOpen(e)}>
//                 <MDBSideNavMenu>
//                     <MDBSideNavItem>
//                         <MDBSideNavLink>
//                             <MDBIcon far icon='smile' className='fa-fw me-3' />
//                             <span className='sidenav-non-slim'>Link 1</span>
//                         </MDBSideNavLink>
//                     </MDBSideNavItem>
//                     <MDBSideNavItem>
//                         <MDBSideNavLink
//                             icon='angle-down'
//                             shouldBeExpanded={basicCollapse1}
//                             onClick={() => setBasicCollapse1(!basicCollapse1)}
//                         >
//                             <MDBIcon fas icon='grin' className='fa-fw me-3' />
//                             <span className='sidenav-non-slim'>Category 1</span>
//                         </MDBSideNavLink>
//                         <MDBSideNavCollapse show={basicCollapse1}>
//                             <MDBSideNavLink>Link 2</MDBSideNavLink>
//                             <MDBSideNavLink>Link 3</MDBSideNavLink>
//                         </MDBSideNavCollapse>
//                     </MDBSideNavItem>
//                     <MDBSideNavItem>
//                         <MDBSideNavLink
//                             icon='angle-down'
//                             shouldBeExpanded={basicCollapse2}
//                             onClick={() => setBasicCollapse2(!basicCollapse2)}
//                         >
//                             <MDBIcon fas icon='grin' className='fa-fw me-3' />
//                             Category 2
//                         </MDBSideNavLink>
//                         <MDBSideNavCollapse show={basicCollapse2}>
//                             <MDBSideNavLink>Link 4</MDBSideNavLink>
//                             <MDBSideNavLink>Link 5</MDBSideNavLink>
//                         </MDBSideNavCollapse>
//                     </MDBSideNavItem>
//                 </MDBSideNavMenu>
//             </MDBSideNav>

//             <div style={{ padding: '20px' }} className='text-center'>
//                 <MDBBtn onClick={() => setBasicOpen(!basicOpen)}>
//                     <MDBIcon fas icon='bars' />
//                 </MDBBtn>
//             </div>
//         </>
//     );
// }

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';

import '../styles/Navbar.css'

export default function ResponsiveNavbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar className='navbar-container' expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>Claire's Workouts</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)} 
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Arms'>Arms</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Chest'>Chest</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Legs'>Legs</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Back'>Back</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Shoulders'>Shoulders</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Abs'>Abs</MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
                        <MDBBtn color='dark'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

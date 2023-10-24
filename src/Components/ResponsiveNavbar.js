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
    //MDBBtn,
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
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' className='exercise-links' href='/TrainingDiaryPage'>Training Diary</MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>

                    {/* <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
                        <MDBBtn color='dark'>Search</MDBBtn>
                    </form> */}
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

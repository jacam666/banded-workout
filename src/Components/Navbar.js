// import React from 'react'
// import { Link } from 'react-router-dom'
// import "../styles/Navbar.css"

// function Navbar() {
//     return (
//         <nav>
//             <ul className='bg-body-tertiary justify-content-between'>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//             <ul>
//                 <li><Link to="/Arms">Arms</Link></li>
//             </ul>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//         </nav>
//     )
// }

// export default Navbar
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function CustomNavbar() {
    return (
            <Navbar expand="lg" className="bg-body-black justify-content-between">
                <Container className='navbar-container'>
                    <Link className='exercise-links' to="/Home">Home</Link>
                    <Link className='exercise-links' to="/Arms">Arms</Link>
                    <Link className='exercise-links' to="/Chest">Chest</Link>
                    <Link className='exercise-links' to="/Legs">Legs</Link>
                    <Link className='exercise-links' to="/Back">Back</Link>
                    <Link className='exercise-links' id='shoulder-link' to="/Shoulders">Shoulders</Link>
                </Container>
            </Navbar>
    );
}

export default CustomNavbar;
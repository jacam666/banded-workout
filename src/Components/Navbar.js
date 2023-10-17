import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function CustomNavbar() {
    return (
            <Navbar expand="lg" className="bg-body-black justify-content-between">
                <Container className='navbar-container'>
                    <Link className='exercise-links' to="/">Home</Link>
                    <Link className='exercise-links' to="/Arms">Arms</Link>
                    <Link className='exercise-links' to="/Chest">Chest</Link>
                    <Link className='exercise-links' to="/Legs">Legs</Link>
                    <Link className='exercise-links' to="/Back">Back</Link>
                    <Link className='exercise-links' to="/Shoulders">Shoulders</Link>
                    <Link className='exercise-links' id='abs-link' to="/Abs">Abs</Link>
                </Container>
            </Navbar>
    );
}

export default CustomNavbar;



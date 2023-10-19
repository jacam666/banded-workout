import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/LegPage.css'
import { Link } from 'react-router-dom';


function Legs() {
    return (
        <div className='main-page-leg-container'>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Link className='bodyweight-leg-link' to={"/ResistanceBandLegs"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-legs-images' variant="top" src="/images/Legs/legs banded card image.jpg" />
                                <Card.Body>
                                    <Card.Title>Resistance Band Leg Exercises</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Link className='bodyweight-leg-link' to={"/ResistanceBandLegs"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-legs-images' variant="top" src="/images/Legs/legs dumbbell card image.jpg" />
                                <Card.Body>
                                    <Card.Title>Dumbbell Leg Exercises</Card.Title>
                                    <Card.Text>

                                    </Card.Text> 
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Link className='bodyweight-leg-link' to={"/ResistanceBandLegs"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-legs-images' variant="top" src="/images/Legs/legs bodyweight card image.jpg" />
                                <Card.Body>
                                    <Card.Title>BodyWeight Leg Exercises</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Legs
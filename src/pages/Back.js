import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/BackPage.css'
import { Link } from 'react-router-dom';


function Back() {
    return (
        <div className='main-page-leg-container'>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Link className='bodyweight-arm-link' to={"/ResistanceBandBack"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-legs-images' variant="top" src="/images/Back/back banded card image.2jpeg.jpeg" />
                                <Card.Body>
                                    <Card.Title>Resistance Band Back Exercises</Card.Title>
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
                        <Link className='bodyweight-arm-link' to={"/ResistanceBandBack"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-legs-images' variant="top" src="/images/Back/back dumbbell card image.jpeg" />
                                <Card.Body>
                                    <Card.Title>Dumbbell Back Exercises</Card.Title>
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
                        <Link className='bodyweight-arm-link' to={"/ResistanceBandBack"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-legs-images' variant="top" src="/images/Back/back back card image.jpeg" />
                                <Card.Body>
                                    <Card.Title>BodyWeight Back Exercises</Card.Title>
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

export default Back
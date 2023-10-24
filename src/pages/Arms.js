import React from 'react'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Armpage.css';
import { Link } from 'react-router-dom';

function Arms() {
    return (
        <div className='main-page-arm-container'>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Link className='bodyweight-arm-link' to={"/ResistanceBandArms"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-arms-images' variant="top" src="/images/Arms/arms banded card image.jpg" />
                                <Card.Body>
                                    <Card.Title>Resistance Band Arm Exercises</Card.Title>
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
                        <Link className='bodyweight-arm-link' to={"/DumbbellArms"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-arms-images' variant="top" src="/images/Arms/arms dumbbell card image.jpeg" />
                                <Card.Body>
                                    <Card.Title>Dumbbell Arm Exercises</Card.Title>
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
                        <Link className='bodyweight-arm-link' to={"/BodyWeightArms"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-arms-images' variant="top" src="/images/Arms/arms bodyweight card image2.jpg" />
                                <Card.Body>
                                    <Card.Title>BodyWeight Arm Exercises</Card.Title>
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

export default Arms;
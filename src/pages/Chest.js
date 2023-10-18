import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/ChestPage.css'
import { Link } from 'react-router-dom';


function Chest() {
    return (
        <div className='main-page-arm-container'>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Link className='bodyweight-chest-link' to={"/ResistanceBandChest"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-arms-images' variant="top" src="/images/Chest/chest banded card image.jpg" />
                                <Card.Body>
                                    <Card.Title>Resistance Band Chest Exercises</Card.Title>
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
                        <Link className='bodyweight-chest-link' to={"/ResistanceBandChest"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-arms-images' variant="top" src="/images/Chest/chest dumbbell card image2.jpg" />
                                <Card.Body>
                                    <Card.Title>Dumbbell Chest Exercises</Card.Title>
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
                        <Link className='bodyweight-chest-link' to={"/ResistanceBandChest"}>
                            <Card className="flex-fill mt-5" style={{ opacity: 0.9 }} >
                                <Card.Img className='card-arms-images' variant="top" src="/images/Chest/chest bodyweight card image3.jpg" />
                                <Card.Body>
                                    <Card.Title>BodyWeight Chest Exercises</Card.Title>
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

export default Chest
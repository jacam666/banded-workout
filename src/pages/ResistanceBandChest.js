import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import '../styles/ChestPage.css';

function ResistanceBandChest() {
    return (
        <div className='chest-container'>
            <div className='chest-page-header'>Chest</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }} >
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest press.png" />
                            <Card.Body>
                                <Card.Title>Press</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }}>
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest split press.png" />
                            <Card.Body>
                                <Card.Title>Split Press</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }}>
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest chest fly.png" />
                            <Card.Body>
                                <Card.Title>Fly</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }}>
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest split fly.png" />
                            <Card.Body>
                                <Card.Title>Split Fly</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }}>
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest resisted push up.png" />
                            <Card.Body>
                                <Card.Title>Resisted Push Up</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }}>
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest bodyweight push ups.png" />
                            <Card.Body>
                                <Card.Title>BodyWeight Push Up</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-2" style={{ opacity: 0.9 }}>
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest split fly.png" />
                            <Card.Body>
                                <Card.Title>Split Fly</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='chest-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResistanceBandChest


import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import '../styles/ShoulderPage.css'


function ResistanceBandShoulders() {
    return (
        <div className='shoulders-container'>
            <div className='shoulder-page-header'>Shoulders</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders reverse fly2.png" />
                            <Card.Body>
                                <Card.Title>Reverse Fly</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders lying front shoulder raise.png" />
                            <Card.Body>
                                <Card.Title>Lying Front Raise</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders high row2.png" />
                            <Card.Body>
                                <Card.Title>High Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders front raises.png" />
                            <Card.Body>
                                <Card.Title>Front Raise</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders lateral raises2.png" />
                            <Card.Body>
                                <Card.Title>Lateral Raises</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders lying lateral raise.png" />
                            <Card.Body>
                                <Card.Title>Lying Lateral Raise</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders seated high row.png" />
                            <Card.Body>
                                <Card.Title>Seated High Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='abs-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResistanceBandShoulders;
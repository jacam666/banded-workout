import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/ShoulderPage.css'


function Shoulders() {
    return (
        <div className='shoulders-container'>
            <div className='shoulder-page-header'>Shoulders</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders face pull.png" />
                            <Card.Body>
                                <Card.Title>Face Pull</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders reverse fly.png" />
                            <Card.Body>
                                <Card.Title>Reverse Fly</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders kneeling lift.png" />
                            <Card.Body>
                                <Card.Title>Kneeling Lift</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders high row.png" />
                            <Card.Body>
                                <Card.Title>High Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders front raise.png" />
                            <Card.Body>
                                <Card.Title>Front Raise</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='shoulder-images' variant="top" src="/images/Shoulders/shoulders lateral raises2.png" />
                            <Card.Body>
                                <Card.Title>Lateral Raises</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoulders
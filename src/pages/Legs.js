import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/LegPage.css'


function Legs() {
    return (
        <div className='leg-container'>
            <div className='leg-page-header'>Legs</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" style={{ opacity: 0.9 }}>
                            <Card.Img className='leg-images' variant="top" src="/images/Legs/legs pull through.png" />
                            <Card.Body>
                                <Card.Title>Pull-through</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" style={{ opacity: 0.9 }}>
                            <Card.Img className='leg-images' variant="top" src="/images/Legs/legs abduction.png" />
                            <Card.Body>
                                <Card.Title>Abduction</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" style={{ opacity: 0.9 }}>
                            <Card.Img className='leg-images' variant="top" src="/images/Legs/legs adduction.png" />
                            <Card.Body>
                                <Card.Title>Adduction</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" style={{ opacity: 0.9 }}>
                            <Card.Img className='leg-images' variant="top" src="/images/Legs/legs extension.png" />
                            <Card.Body>
                                <Card.Title>Extension</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" style={{ opacity: 0.9 }}>
                            <Card.Img className='leg-images' variant="top" src="/images/Legs/legs squats.png" />
                            <Card.Body>
                                <Card.Title>Squats</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" style={{ opacity: 0.9 }}>
                            <Card.Img className='leg-images' variant="top" src="/images/Legs/legs donkey kicks.png" />
                            <Card.Body>
                                <Card.Title>Donkey Kicks</Card.Title>
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

export default Legs
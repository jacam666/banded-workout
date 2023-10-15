import React from 'react'
import Card from 'react-bootstrap/Card';

function Shoulders() {
    return (
        <div className='arm-container'>
            <div className='arm-page-header'>Shoulders</div>
            <div className='card-container row' >
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" >
                            <Card.Img className='arms-images' variant="top" src="/images/Shoulders/shoulders face pull.png" />
                            <Card.Body>
                                <Card.Title>Face Pull</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill">
                            <Card.Img className='arms-images' variant="top" src="/images/Shoulders/shoulders reverse fly.png" />
                            <Card.Body>
                                <Card.Title>Reverse Fly</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill">
                            <Card.Img className='arms-images' variant="top" src="/images/Shoulders/shoulders kneeling lift.png" />
                            <Card.Body>
                                <Card.Title>Kneeling Lift</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill">
                            <Card.Img className='arms-images' variant="top" src="/images/Shoulders/shoulders high row.png" />
                            <Card.Body>
                                <Card.Title>High Row</Card.Title>
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
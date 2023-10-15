import React from 'react'
import Card from 'react-bootstrap/Card';

function Chest() {
    return (
        <div className='arm-container'>
            <div className='arm-page-header'>Chest</div>
            <div className='card-container row' >
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" >
                            <Card.Img className='arms-images' variant="top" src="/images/Arms/triceps kickbacks.png" />
                            <Card.Body>
                                <Card.Title>Tricep Kick Backs</Card.Title>
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
                            <Card.Img className='arms-images' variant="top" src="/images/Arms/reverse pushdowns.png" />
                            <Card.Body>
                                <Card.Title>Reverse Pushdowns</Card.Title>
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
                            <Card.Img className='arms-images' variant="top" src="/images/Arms/arms pushdowns_edited.jpg" />
                            <Card.Body>
                                <Card.Title>Tricep Pushdowns</Card.Title>
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
                            <Card.Img className='arms-images' variant="top" src="/images/Arms/bicep curl.png" />
                            <Card.Body>
                                <Card.Title>Bicep Curl</Card.Title>
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

export default Chest
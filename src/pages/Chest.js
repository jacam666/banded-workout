import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/ChestPage.css'


function Chest() {
    return (
        <div className='arm-container'>
            <div className='chest-page-header'>Chest</div>
            <div className='card-container row' >
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill" >
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest press.png" />
                            <Card.Body>
                                <Card.Title>Press</Card.Title>
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
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest split press.png" />
                            <Card.Body>
                                <Card.Title>Split Press</Card.Title>
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
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest chest fly.png" />
                            <Card.Body>
                                <Card.Title>Fly</Card.Title>
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
                            <Card.Img className='chest-images' variant="top" src="/images/Chest/chest split fly.png" />
                            <Card.Body>
                                <Card.Title>Split Fly</Card.Title>
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
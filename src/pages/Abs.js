import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/AbsPage.css';

function Abs() {
    return (
        <div className='abs-container'>
            <div className='arm-page-header'>Abs</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='arms-images' variant="top" src="/images/Abs/abs banded crunches.png" />
                            <Card.Body>
                                <Card.Title>Banded Crunches</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='arms-images' variant="top" src="/images/Abs/abs kneeling ab crunch.png" />
                            <Card.Body>
                                <Card.Title>Kneeling Crunches</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='arms-images' variant="top" src="/images/Abs/abs push throughs.png" />
                            <Card.Body>
                                <Card.Title>Push Throughs</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='arms-images' variant="top" src="/images/Abs/abs standing ab twist.png" />
                            <Card.Body>
                                <Card.Title>Standing Ab Twist</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mt-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='arms-images' variant="top" src="/images/Abs/abs bicycle crunches.png" />
                            <Card.Body>
                                <Card.Title>Bicycle Crunches</Card.Title>
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

export default Abs;
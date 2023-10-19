import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/BackPage.css'


function ResistanceBandBack() {
    return (
        <div className='back-container'>
            <div className='back-page-header'>Back</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}  >
                            <Card.Img className='back-images' variant="top" src="/images/Back/back pulldown.png" />
                            <Card.Body>
                                <Card.Title>Pull Down</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='back-images' variant="top" src="/images/Back/back row.png" />
                            <Card.Body>
                                <Card.Title>Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='back-images' variant="top" src="/images/Back/back reverse row.png" />
                            <Card.Body>
                                <Card.Title>Reverse Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='back-images' variant="top" src="/images/Back/back single row.png" />
                            <Card.Body>
                                <Card.Title>Alternating Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='back-images' variant="top" src="/images/Back/back one arm row.png" />
                            <Card.Body>
                                <Card.Title>One Arm Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='back-images' variant="top" src="/images/Back/back kneeling one arm row.png" />
                            <Card.Body>
                                <Card.Title>Kneeling One Arm Row</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='back-images' variant="top" src="/images/Back/back kneeling lat pull down.png" />
                            <Card.Body>
                                <Card.Title>Kneeling Lat Pull Down</Card.Title>
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

export default ResistanceBandBack;
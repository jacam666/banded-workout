import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ResistanceBandArms() {
    return (
        <div className='arm-container'>
            <div className='arm-page-header'>Arms</div>
            <div className='card-container row justify-content-evenly' >
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }} >
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/triceps kickbacks.png" />
                            <Card.Body>
                                <Card.Title>Tricep Kick Backs</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/reverse pushdowns.png" />
                            <Card.Body>
                                <Card.Title>Reverse Pushdowns</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/arms pushdowns_edited.jpg" />
                            <Card.Body>
                                <Card.Title>Tricep Pushdowns</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button' >Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6 '>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/bicep curl.png" />
                            <Card.Body>
                                <Card.Title>Bicep Curl</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/arms over head tricep extensions.png" />
                            <Card.Body>
                                <Card.Title>Tricep Extensions</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/arms hammer curls.png" />
                            <Card.Body>
                                <Card.Title>Hammer Curls</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/arms tricep dip.png" />
                            <Card.Body>
                                <Card.Title>Tricep Dip</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className="d-flex flex-column h-100">
                        <Card className="flex-fill mb-4" style={{ opacity: 0.9 }}>
                            <Card.Img className='resistance-band-arms-images' variant="top" src="/images/Arms/arms lying banded tricep extension.png" />
                            <Card.Body>
                                <Card.Title>Lying Banded Tricep Extension</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button className='arm-card-button'>Add to Today's Workout</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResistanceBandArms
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

function ContactPage() {
    return (
        <div className='contact-page mt-5'>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" src=".\img\square_me.jpg" />
                    <Card.Body>
                        <Card.Title className='card-title'>Contact Me Here</Card.Title>
                        <Card.Text className='card-text'>
                            Please feel free to email me at mjtoffey@gmail.com, reach me on LinkedIn or check out my GitHub
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                            <Button variant="secondary" href="https://www.linkedin.com/in/matthewtoffey/">LinkedIn</Button>
                            <Button variant="success" href="https://github.com/Mjtoffey">GitHub</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ContactPage;

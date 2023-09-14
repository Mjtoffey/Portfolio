import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from 'react-bootstrap/Card';
import './App.css';


function ContactPage() {
    return (
        <div className='contact-page'>
            <div className="contact-card">
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src=".\img\square_me.jpg" />
                    <Card.Body>
                        <Card.Title className='card-title'>Contact Me Here</Card.Title>
                        <Card.Text className='card-text'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ContactPage;
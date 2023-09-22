import React from 'react';
import './App.css'; // Import your CSS file

function InfoPage() {
    return (
        <div className="about-me">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Welcome to my Portfolio!</h1>
                    </div>
                </div>
                <div className="row align-items-center"> {/* Center-align columns vertically */}
                    <div className="col-md-6">
                        <img
                            src=".\img\profile.jpg"
                            alt="Your Name"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <p>
                            Hi there! I'm Matthew Toffey, a passionate web developer with a love
                            for creating beautiful and functional websites. I have just finished the Awesome Inc. bootcamp and have worked on various
                            projects, both as an individual and as part of a team.
                        </p>
                        <p>
                            My skills include HTML, CSS, JavaScript, React, and much more. I
                            am constantly learning and improving my skills to stay up to date
                            with the latest technologies in the web development world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoPage;



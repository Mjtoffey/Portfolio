import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
    return (
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <ul>
                <li><Link to="/InfoPage">About</Link></li> {/* Use Link to navigate to "/about" */}
                <li><Link to="/ProjectsPage">Projects</Link></li> {/* Use Link to navigate to "/projects" */}
                <li><Link to="/ContactPage">Contact</Link></li> {/* Use Link to navigate to "/contact" */}
            </ul>
        </nav>
    );
}

export default Navbar;
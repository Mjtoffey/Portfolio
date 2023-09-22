import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Navbar() {
    return (
        <nav className="navbar">
            <h1>
                <Link to="/InfoPage">My Portfolio</Link>
            </h1>
            <ul>
                <li><Link to="/InfoPage">About</Link></li>
                <li><Link to="/ProjectsPage">Projects</Link></li>
                <li><Link to="/ContactPage">Contact</Link></li>
                {/* <li><Link to="/BlogPage">Blog Posts</Link></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
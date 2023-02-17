import React from "react";
import { Link } from "react-router-dom";
import './nav.css'

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/getposts">Home</Link>
                </li>

                <li>
                    <Link to="/newpost">Create New Post</Link>
                </li>

                <li>
                    <Link to="/replypost">Reply To A Post</Link>
                </li>

                <li>
                    <Link to="/">Logout</Link>
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/getposts">GetPosts</Link>
            </li>
            <li>
              <Link to="/newpost">NewPost</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
            <Link to='/restaurant' className="text-decoration-none fs-2 fw-bold ">Restaurant</Link>
            </div>
        </nav>

    );
};

export default Header;
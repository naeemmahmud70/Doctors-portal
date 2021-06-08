import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
            <h2 className="text-white">Doctors Portal</h2>
            <button className="navbar-toggler nav-hover" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active nav-hover">
                        <Link className="nav-link mr-5 text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item nav-hover">
                        <a className="nav-link mr-5 text-white" href="#services">Services</a>
                    </li>
                    <li className="nav-item nav-hover">
                        <a className="nav-link mr-5 text-white" href="#review">Reviews</a>
                    </li>
                    <li className="nav-item nav-hover">
                        <a className="nav-link mr-5 text-white" href="#contact">Contact Us</a>
                    </li>
                    <li className="nav-item nav-hover">
                        <Link className="nav-link mr-5 text-white" to="/login ">Login</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
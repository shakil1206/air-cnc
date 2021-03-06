import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color">
            <div className="container">
                <a className="navbar-brand" href="/"> <span className="text-success logo">Aircnc</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link" href="/home">Host your home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/experiance">Host your experiance</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/help">Help</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/login">Log in</a>
                        </li>
                        <li className="nav-item ">
                            <a type="button" className="btn btn-success signUp"  href="/signUp">Sign Up</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
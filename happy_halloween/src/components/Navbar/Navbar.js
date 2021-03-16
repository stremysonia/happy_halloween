import React from 'react';
import './Navbar.css';

const Navbar = () => {
        return (
            <>
                <ul className="navbar-container">
                    <li><a className="navbar-links" href="#psychology">Psychology</a>
                    </li>
                        <li><a className="navbar-links" href="#types">Type of Killers</a>
                        </li>
                            <li><a className="navbar-links" href="#females">Female Serial Killers</a>
                            </li>
                                <li><a className="navbar-links" href="#males">Male Serial Killers</a>
                                </li>
                </ul>
            </>
        );
}
export default Navbar;

import React from 'react';
import './Navbar.css';

const Navbar = () => {
        return (
            <>
                <ul className="navbar-container">
                    <li><a href="psychology">Psychology</a>
                    </li>
                        <li><a href="types">Types of Serial Killers</a>
                        </li>
                            <li><a href="females">Female Serial Killers</a>
                            </li>
                                <li><a href="males">Male Serial Killers</a>
                                </li>
                </ul>
            </>
        );
}
export default Navbar;

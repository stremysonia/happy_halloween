import React from 'react';
import './Navbar.css';
import serialkillerslogo from '../../assets/serial-killers-logo.png'
import Logo from '../Logo/Logo'
// import design from '../../assets/design.png'

const Navbar = () => {
        return (
            <>
            
                <ul className="navbar-container">
                {/* <li><a className="navbar-link" href="/"><img className="logo" src={serialkillerslogo}></img></a> */}
                        {/* </li> */}
                    {/* <li><a className="navbar-link" href="/">Serial
                        <img className="blood-splatter" src={design} alt="Logo"></img></a>
                    </li> */}
                        <li><a className="navbar-link" href="#psychology">Psychology</a>
                        </li>
                            <li><a className="navbar-link" href="#types">Type of Killers</a>
                            </li>
                                <li><a className="navbar-link" href="#females">Female Serial Killers</a>
                                </li>
                                    <li><a className="navbar-link" href="#males">Male Serial Killers</a>
                                    </li>
                </ul>
            </>
        );
}
export default Navbar;

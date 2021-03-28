import React from 'react';
import './Navbar.css';

const Navbar = () => {
        return (
            <>
            
                <nav className="navbar-container">
                {/* <li><a className="navbar-link" href="/"><img className="logo" src={serialkillerslogo}></img></a> */}
                        {/* </li> */}
                    {/* <li><a className="navbar-link" href="/">Serial
                        <img className="blood-splatter" src={design} alt="Logo"></img></a>
                    </li> */}
                        <a className="navbar-link" href="/psychology">Psychology</a>
                            <a className="navbar-link" href="/types">Motives</a>
                                <a className="navbar-link" href="/femaleserialkillers">Female Serial Killers</a>
                                    <a className="navbar-link" href="maleserialkillers">Male Serial Killers</a>
                                    
                </nav>
            </>
        );
}
export default Navbar;

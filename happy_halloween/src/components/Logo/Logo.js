import React from 'react';
import './Logo.css'
import seriallogo from '../../assets/serial-logo.png'

const Logo = () => {
        return (
            <>
                {/* <a className="logo" href="/home">Serial
                    <img className="blood-splatter" src={design} alt="Logo"></img>
                </a> */}

                <a href="/"><img src={seriallogo} className="logo" alt="Logo"></img></a>
                {/* <div className="">   */}
                
            </>
        );
}
export default Logo;
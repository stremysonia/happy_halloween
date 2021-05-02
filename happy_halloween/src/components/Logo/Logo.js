import React from 'react';
import './Logo.css'
import seriallogo from '../../assets/serial-logo.png'

const Logo = () => {
        return (
            <>
                <a href="/"><img src={seriallogo} className="logo" alt="Serial Logo"></img></a>
            </>
        );
}
export default Logo;
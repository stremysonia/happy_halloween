import React from 'react';
import './Home.css';
import Witch from '../../components/Witch/Witch'
// import Logo from '../../components/Logo/Logo'
// import seriallogo from '../../assets/serial-logo.png'

const Home = () => {
        return (
                <>
                <Witch></Witch>
                {/* <Logo></Logo> */}

                {/* <a href="/"><img src={seriallogo} className="logo"></img></a>
                // <div className="">   */}
                        <a href="#">
                                <span className="title">
                                        <span className="flicker">E</span>
                                        <span>N</span>
                                        <span className="flicker">T</span>
                                        <span >E</span>
                                        <span className="flicker">R</span>
                                </span>
                        </a>
                                {/* <span className="subtitle-container">
                                        <p className="subtitle">
                                                <span>AT YOUR OWN RISK</span>
                                                <span className=""></span>
                                        </p>
                                </span> */}
                    {/* </div> */}
                </>
        );
}
export default Home;
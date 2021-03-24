import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom'
import Witch from '../../components/Witch/Witch'
import PopUp from '../../components/PopUp/PopUp'
import Cards from '../../components/Cards/Cards'

// import seriallogo from '../../assets/serial-logo.png'

const Home = () => {
        return (
                <>
                <Cards></Cards>
                <Witch></Witch>
                {/* <Logo></Logo> */}
                <PopUp></PopUp>

                {/* <a href="/"><img src={seriallogo} className="logo"></img></a>
                // <div className="">   */}
                        {/* <NavLink exact to="MainPage">
                                {/* <a href="/types/"> */}
                                {/* <span className="title">
                                        <span className="flicker">E</span>
                                        <span>N</span>
                                        <span className="flicker">T</span>
                                        <span>E</span>
                                        <span className="flicker">R</span>
                                </span>  */}
                        {/* </a> */}
                        {/* </NavLink> */}
                </>
        );
}
export default Home;
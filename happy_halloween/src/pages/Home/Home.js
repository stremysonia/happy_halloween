import React from 'react';
import './Home.css';
// import Clouds from '../../components/Clouds/Clouds'
import Witch from '../../components/Witch/Witch'

const Home = () => {
        return (
                <>
                <Witch></Witch>
                <div className="">  
                        <a href="#">
                                <span className="title">
                                        <span className="flicker">E</span>
                                        <span>N</span>
                                        <span className="flicker">T</span>
                                        <span >E</span>
                                        <span className="flicker">R</span>
                                </span>
                        </a>
                                <span className="subtitle-container">
                                        <p className="subtitle">
                                                <span>AT YOUR OWN RISK</span>
                                                <span className=""></span>
                                        </p>
                                </span>
                    </div>
                </>
        );
}
export default Home;
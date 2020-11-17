import React from 'react';
import './Home.css';
import Smoke  from '../../components/Smoke/Smoke'
import Witch from '../../components/Witch/Witch'

const Home = () => {
        return (
                <>
                    <Witch></Witch>
                    <Smoke></Smoke>
                        <div>
                            <h1 className="title">
                                <span>E</span>
                                <span>N</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                            </h1>

                        </div>
                </>
        );
}
export default Home;
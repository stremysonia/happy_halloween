import React from 'react'
import './Clouds.css'
import cloud1 from '../../assets/cloud1.png'
import cloud2 from '../../assets/cloud2.png'
import cloud3 from '../../assets/cloud3.png'
import cloud4 from '../../assets/cloud4.png'
import cloud5 from '../../assets/cloud5.png'


const Clouds = () => {
        return (
                <>
                        <div className="container">
                                <img src={cloud1} className="cloud" alt=""></img>
                                <img src={cloud2} className="cloud" alt=""></img>
                                <img src={cloud3} className="cloud" alt=""></img>
                                <img src={cloud4} className="cloud" alt=""></img>
                                <img src={cloud5} className="cloud" alt=""></img>
                        </div>
                </>
        )
} 
export default Clouds;
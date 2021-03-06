import React from 'react';
import './ThunderStorm';
import thunderlightning from '../../assets/thunder-lightning.mp3'

const ThunderStorm = () => {
        return (
            <audio>
                <source src={thunderlightning} type="audio/mp3"/>
            </audio>
        );
}
export default ThunderStorm;
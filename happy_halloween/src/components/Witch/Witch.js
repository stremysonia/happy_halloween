import React from 'react';
import './Witch.css';
import witchcackle from '../../assets/witch-cackle.mp3'

const Witch = () => {
        return (
            <audio autoPlay>
                <source src={witchcackle} type="audio/mp3"/>
            </audio>

        );
}
export default Witch;
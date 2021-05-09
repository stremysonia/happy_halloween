import React from 'react';
import './MaleCards.css';


const MaleCards = ({killerdata}) => {
    console.log(killerdata)
    const males = killerdata 
        return (
            <>
        
            {males.map((male)=>(
                <div className="cards">
                    <div className="card-container">
                        <div className="front-of-card">
                            <img src={male.image} alt="#" className="image"/>
                            <div className="profileNameBirth">
                                <h3 className="name">{male.name}</h3>
                                <h3 className="nickname">{male.nickname}</h3>
                                <h3 className="dateOfBirthAndLocation">{male.dateOfBirthAndLocation}</h3>
                                <h3 className="dateOfDeathAndLocation">{male.dateOfDeathAndLocation}</h3>
                                <h3 className="provenVictims">Victims: {male.provenVictims}</h3>
                                <h3 className="possibleOrConfessedVictims">Possible / Confessed Victims: {male.possibleOrConfessedVictims}</h3>
                            </div>
                        </div>
                        <div className="back-of-card">
                            <div className="cardDescriptionContainer">
                                <p className="card-description">{male.description}</p>
                            </div>
                        </div>
                    </div>
             </div>
        ))}
    </>
    )
}

export default MaleCards;



{/* <div className="profileInformation">
                                <h3 className="name">{male.name}</h3>
                                <h3 className="alsoKnownAs">Also Known As: {male.alsoKnownAs}</h3>
                                <h3 className="nickname">Nickname: {male.nickname}</h3>
                                <h3 className="dateOfBirthAndLocation">Born: {male.dateOfBirthAndLocation}</h3>
                                <h3 className="dateOfDeathAndLocation">Died: {male.dateOfDeathAndLocation}</h3>
                                <h3 className="provenVictims">Proven Victims: {male.provenVictims}</h3>
                                <h3 className="possibleOrConfessedVictims">Possible / Confessed Victims: {male.possibleOrConfessedVictims}</h3>
                            // </div> */}

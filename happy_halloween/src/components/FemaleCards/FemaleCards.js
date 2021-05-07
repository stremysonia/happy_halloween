import React from 'react';
import './FemaleCards.css';


const FemaleCards = ({killerdata}) => {
    console.log(killerdata)
    const females = killerdata 
        return (
            <>
{/* 
                {females.map((female)=>
                    <div className="cards">
                    <div className="card-container">
                        <div className="front-of-card">
                            <img src={female.image} alt="#" className="image"/>
                            <div className="profileInformation">
                                <h3 className="name">{female.name}</h3>
                                <h3 className="alsoKnownAs">Also Known As: {female.alsoKnownAs}</h3>
                                <h3 className="nickname">Nickname: {female.nickname}</h3>
                                <h3 className="dateOfBirthAndLocation">Born: {female.dateOfBirthAndLocation}</h3>
                                <h3 className="dateOfDeathAndLocation">Died: {female.dateOfDeathAndLocation}</h3>
                                <h3 className="provenVictims">Proven Victims: {female.provenVictims}</h3>
                                <h3 className="possibleOrConfessedVictims">Possible / Confessed Victims: {female.possibleOrConfessedVictims}</h3>
                            </div>
                        </div>
                        <div className="back-of-card">
                            <div className="cardDescriptionContainer">
                                <p className="card-description">{female.description}</p>
                            </div>
                        </div>
                    </div>
             </div>
        )} */}
    </>
    )
}
           
export default FemaleCards;
  
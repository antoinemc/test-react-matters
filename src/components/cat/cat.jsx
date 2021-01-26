import React from 'react';
import './cat.scss';

const Cats = props => {
    const { name, picturePath, gender, breed, birthdate, id} =
    (props.location && props.location.state) || {};
        return (
            <div className="cat">
                <img src={picturePath} alt={name} className="cat__image"></img>
                <div className="cat__description">
                    <ul>
                        <li>Nom : {name}</li>
                        <li>Date de naissance : {birthdate} </li>
                        <li>Genre : {gender}</li>
                        <li>Race : {breed} </li>
                    </ul>
                <button className="cat__button">
                    Prendre RDV
                </button>
                </div>
            </div>
    
            );
      }

export default Cats;

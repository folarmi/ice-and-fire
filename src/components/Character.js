import React, { useState } from 'react'
import Characters from '../Pages/Characters';


const Character = (props) => {
    return (
        <div className="container">
            <div className="card">
                <img src={props.image} class="card__image" />
                <p className="card_name"></p>
                <div className="book-info">
                    <h4>Character Name:</h4> <p>{props.name}</p>
                    <h4>Gender:</h4> <p>{props.gender}</p>
                </div>

            </div>
        </div>
    );
}

export default Character;





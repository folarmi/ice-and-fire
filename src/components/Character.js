import React, { useState } from 'react'
import Characters from '../Pages/Characters';


const Character = (props) => {
    return (
        <div className="container">
            <div className="card">
                <img src={props.image} class="card__image" />
                <p className="card_name"></p>
                <div className="book-info">
                    <h4>Aliases: {props.aliases}</h4>
                    <h4>Gender: {props.gender}</h4>
                    <h4>Culture: {props.culture}</h4>
                </div>

            </div>
        </div>
    );
}

export default Character;





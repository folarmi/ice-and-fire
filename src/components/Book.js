import React, { useState } from 'react'


const Book = (props) => {
    return (
        <div className="container">
            <div className="card">
                <img src={props.image} class="card__image" />
                <p className="card_name"></p>
                <div className="book-info">
                    <h4>Book Name: {props.name}</h4>
                    <h4>Author: {props.author}</h4>
                    <h4>Book Count: {props.count}</h4>
                </div>

            </div>
        </div>
    );
}

export default Book;





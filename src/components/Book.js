import React, { useState } from 'react'
import axios from 'axios'

const Book = (props) => {
    return (
        <div className="container">
            <div className="card">
                <img src={props.image} class="card__image" />
                <p className="card_name"></p>
                <div className="book-info">
                    <h4>Book Name:</h4> <p>{props.name}</p>
                    <h4>Author:</h4> <p>{props.author}</p>
                    <h4>Book Count:</h4> <p>{props.count}</p>
                    <p>{props.id}</p>
                </div>

            </div>
        </div>
    );
}

export default Book;





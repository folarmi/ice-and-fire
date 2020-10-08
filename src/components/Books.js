import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Book from './Book'

const Books = () => {
    const [books, setBooks] = useState([])
    const [author, setAuthor] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        // axios.get('https://anapioficeandfire.com/api/books/')
        //     .then((response) => {
        //         console.log(response.data);
        //         const returnedData = response.data
        //         setData(returnedData)
        //     });
        fetch('https://anapioficeandfire.com/api/books/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then((data) => {
                let returnedData = data;
                console.log(returnedData);
                setBooks(returnedData)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="wrapper">
            <h2>IceandFire</h2>

            <div className="header">
                <h1>All Books</h1>
            </div>
            <div className="all-books">
                {books.map(book => {
                    return <Book
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOZnH2KXR03ElpwIqgYlI07EiQwg7OinBYkA&usqp=CAU"}
                        name={book.name}
                        author={book.authors}
                        console={book.count}
                        id={book.id}
                    />
                })}
            </div>
        </div>
    );
}

export default Books;
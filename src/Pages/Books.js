import React, { useState, useEffect } from 'react'
import Book from '../components/Book'
import uuid from 'react-uuid'


const Books = () => {
    const [books, setBooks] = useState([])
    const [author, setAuthor] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
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
            <div className="header">
                <h1>Books List</h1>
            </div>
            <div className="all-items">
                {books.map(book => {
                    return <Book key={uuid()}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOZnH2KXR03ElpwIqgYlI07EiQwg7OinBYkA&usqp=CAU"}
                        name={book.name}
                        author={book.authors}
                        pages={book.numberOfPages}
                    />
                })}
            </div>
        </div>
    );
}

export default Books;
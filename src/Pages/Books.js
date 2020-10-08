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

    function handleClick(e) {
        e.preventDefault();
        console.log('works');
    }
    return (
        <div className="wrapper">
            <h2>IceandFire</h2>

            <div className="header">
                <h1>All Books</h1>
            </div>
            <div className="all-books" onClick={handleClick}>
                {books.map(book => {
                    return <Book key={uuid()}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOZnH2KXR03ElpwIqgYlI07EiQwg7OinBYkA&usqp=CAU"}
                        name={book.name}
                        author={book.authors}
                        console={book.count}
                        id={uuid()}
                    />
                })}
            </div>
        </div>
    );
}

export default Books;
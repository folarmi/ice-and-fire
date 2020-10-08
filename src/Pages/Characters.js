import React, { useState, useEffect } from 'react'
import Character from '../components/Character'
import uuid from 'react-uuid'


const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://anapioficeandfire.com/api/characters/"
        fetch(proxyurl + url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then((data) => {
                let returnedData = data;
                console.log(returnedData);
                setCharacters(returnedData)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="wrapper">
            <div className="header">
                <h1>Character List</h1>
            </div>
            <div className="all-characters">
                {characters.map(character => {
                    return <Character key={uuid()}
                        image={"https://i.pinimg.com/originals/70/4e/1d/704e1d8384aa4b165547e61979d4f15b.jpg"}
                        aliases={character.aliases}
                        gender={character.gender}
                        culture={character.culture}
                    />
                })}
            </div>
        </div>
    );
}

export default Characters;
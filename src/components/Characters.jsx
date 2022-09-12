import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Characters = ({characterUrl}) => {

    const [character, setCharacter] = useState({})

    const [characterStatus, setCharacterStatus] = useState("")

    useEffect(() =>{
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    }, [])

    useEffect(()=>{
        setStatusColor()
    }, [character])

    const setStatusColor = () => {
        if(character.status === "Alive"){
            setCharacterStatus ("green");
        }else if(character.status === "Dead"){
            setCharacterStatus("red");
        }
    }

    return (
        <li className='character-item'>
            <div className='character-card'>
                <div className='status-container'> <div className='status-indicator' style={{backgroundColor: `${characterStatus}`}}></div>{character.status}</div>
                <img className='character-picture' src={character.image} alt="" />
                <br />
                <h3>{character.name}</h3>
                <hr />
                <p>Species: </p>
                {character.species}
                <p>Origin: </p>
                {character.origin?.name}
                <p>Episodes where appear: </p>
                {character.episode?.length}
            </div>
        </li>
    );
};

export default Characters;
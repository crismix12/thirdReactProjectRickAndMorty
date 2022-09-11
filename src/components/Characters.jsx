import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Characters = ({characterUrl}) => {

    const [character, setCharacter] = useState({})

    useEffect(() =>{
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    }, [])

    // console.log(character);

    return (
        <li className='character-item'>
            <div className='character-card'>
                {/* <h1>PokemonItems</h1> */}
                {/* {characterUrl} */}
                {character.name}
                <br />
                <img className='character-picture' src={character.image} alt="" />
                <br />
                {character.status}
                <p>origin:</p>
                {character.origin?.name}
                <p>episodes where appear</p>
                {character.episode?.length}
            </div>
        </li>
    );
};

export default Characters;
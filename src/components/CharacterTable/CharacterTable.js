import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const CharacterTable = () => {
    const [allCharacters, setAllCharacters] = useState([]);

    const BASE_URL = 'https://swapi.dev/api';

    useEffect(() => {
        getAllCharacters()
    },[]);

    const getAllCharacters = async () => {
        const allCharacters = await axios({
            url: `${BASE_URL}/people/`,
            method: 'get'
        })
        setAllCharacters(allCharacters.data.results);
    }

    const characterTableRows = () => {
        console.log(allCharacters)
        const rows = allCharacters.map((character, i) => {
            console.log(character);
            return (            
                <tr key={i}>
                    <th>{character.name}</th>
                    <th>{character.birth_year}</th>
                    <th>{character.height}</th>
                    <th>{character.mass}</th>
                    <th>{character.homeworld}</th>
                    <th>{character.species}</th>
                </tr>
            )
        })
        return rows;
    }

    return (
        <Table responsive striped bordered variant="light" size="sm" style={{ width: '90vw', margin: 'auto'}}>
            <thead style={{ cursor: 'pointer'}}>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Homeworld</th>
                    <th>Species</th>
                </tr>
            </thead>
            <tbody>
                {characterTableRows()}
            </tbody>
        </Table>
    )
}

export default CharacterTable;
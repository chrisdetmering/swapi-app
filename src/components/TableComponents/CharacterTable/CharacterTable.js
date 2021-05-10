import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import './CharacterTable.css';

const CharacterTable = (props) => {
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters();
    },[]);

    const getAllCharacters = async () => {
        const allCharacters = await axios({
            url: props.characterApiUrl,
            method: 'get'
        })

        const allCharactersArray = allCharacters.data.results;
        const characterArrayWithHomeworld = await Promise.all(allCharactersArray.map(async (character) => {
            character.homeworld = await getHomeworld(character)
            character.species = await getSpeciesArray(character)
            return character;
        }))

        setAllCharacters(characterArrayWithHomeworld)

    }

    const getHomeworld = async (character) => {
        const homeworldData = await axios({
            url: character.homeworld,
            method: 'get'
        })
        return homeworldData.data.name
    }

    const getSpecies = async (speciesURL) => {
        const species = await axios({
            url: speciesURL,
            method: 'get'
        })

        return species.data
    }

    const getSpeciesArray = async (character) => {
        const characterSpecies = await Promise.all(character.species.map(async (speciesURL) => {
            const species = await getSpecies(speciesURL);
            return species.name
        }))
        
        return characterSpecies;
    }

    const characterTableRows = () => {
        const rows = allCharacters.map((character, i) => {
            return (            
                <tr key={i}>
                    <th>{character.name}</th>
                    <th>{character.birth_year}</th>
                    <th>{character.height}</th>
                    <th>{character.mass}</th>
                    <th>{character.homeworld}</th>
                    <th>{character.species.toString()}</th>
                </tr>
            )
        })
        return rows;
    }

    return (
        <Table className="character-table" responsive striped bordered variant="light" size="sm">
            <thead className="table-header">
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
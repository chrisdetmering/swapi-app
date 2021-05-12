import React, {useState, useEffect} from 'react';
import CharacterTable from './CharacterTable/CharacterTable';
import SearchBar from './SearchBar/SearchBar';
import NextPrevButton from './NextPrevButton/NextPrevButton';

import axios from 'axios';

const TableComponents = () => {
    const BASE_URL = 'https://swapi.dev/api/people';
    const [currentApiUrl, setCurrentApiUrl] = useState(BASE_URL);
    const [allCharacters, setAllCharacters] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [prevPageUrl, setPrevPageUrl] = useState(null);


    useEffect(() => {
        getAllCharacters()
    },[currentApiUrl])

    const getAllCharacters = async () => {
        const allCharacters = await axios({
            url: currentApiUrl,
            method: 'get'
        })

        setNextPageUrl(allCharacters.data.next);
        setPrevPageUrl(allCharacters.data.previous);
        
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

    return (
        <div id="table-div">
            <SearchBar setCurrentApiUrl={setCurrentApiUrl} />
            <CharacterTable allCharacters={allCharacters} />
            <NextPrevButton nextPageUrl={nextPageUrl} 
                            prevPageUrl={prevPageUrl} 
                            setCurrentApiUrl={setCurrentApiUrl} />
        </div>
    )
}

export default TableComponents;
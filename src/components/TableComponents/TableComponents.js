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
        updateAllCharacters()
    },[currentApiUrl])

    const updateAllCharacters = async () => {
        setAllCharacters([])

        const getAllCharactersResponse = await axios.get(currentApiUrl)

        setNextPageUrl(getAllCharactersResponse.data.next);
        setPrevPageUrl(getAllCharactersResponse.data.previous);
        
        getAllCharactersResponse.data.results.forEach(async (character) => {
            character.homeworld = await getHomeworld(character);
            character.species = await getSpeciesArray(character);

            setAllCharacters(allCharacters => [...allCharacters, character])
        });
    }

    const getHomeworld = async (character) => {
        const homeworld = await axios.get(character.homeworld)
        return homeworld.data.name
    }

    const getSpeciesArray = async (character) => {
        const characterSpecies = await Promise.all(character.species.map(async (speciesUrl) => {
            const species = await axios.get(speciesUrl);
            return species.data.name;
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
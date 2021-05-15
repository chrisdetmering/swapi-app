import React, {useState, useEffect} from 'react';
import CharacterTable from './CharacterTable/CharacterTable';
import SearchBar from './SearchBar/SearchBar';
import NextPrevButtons from './NextPrevButtons/NextPrevButtons';

import axios from 'axios';

const TableComponents = () => {
    const BASE_URL = 'https://swapi.dev/api/people';
    const [currentApiUrl, setCurrentApiUrl] = useState(BASE_URL);
    const [allCharacters, setAllCharacters] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [prevPageUrl, setPrevPageUrl] = useState(null);


    useEffect(() => {
        setAllCharacters([])
        updateAllCharacters();
    },[currentApiUrl])

    const updateAllCharacters = async () => {
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

    const nextPage = () => {
        setCurrentApiUrl(nextPageUrl);
    }

    const prevPage = () => {
        setCurrentApiUrl(prevPageUrl)
    }

    return (
        <div id="table-div">
            <SearchBar setCurrentApiUrl={setCurrentApiUrl} />
            <CharacterTable allCharacters={allCharacters} />
            <NextPrevButtons nextPage={nextPage}
                            prevPage={prevPage}
                            nextPageUrl={nextPageUrl} 
                            prevPageUrl={prevPageUrl} />
        </div>
    )
}

export default TableComponents;
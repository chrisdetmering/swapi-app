import React, {useState, useEffect} from 'react';
import CharacterTable from './CharacterTable/CharacterTable';
import SearchBar from './SearchBar/SearchBar';

const TableComponents = () => {
    const BASE_URL = 'https://swapi.dev/api/people';
    const [currentApiUrl, setCurrentApiUrl] = useState(BASE_URL);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log(searchText)
        const url = searchText.length === 0 ? BASE_URL : `${BASE_URL}/?search=${searchText}`;
        setCurrentApiUrl(url)
    },[searchText])

    return (
        <div id="table-div">
            <SearchBar updateSearchText={setSearchText} />
            <CharacterTable characterApiUrl={currentApiUrl} />
        </div>
    )
}

export default TableComponents;
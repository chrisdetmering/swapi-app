import React, {useState, useEffect} from 'react';
import CharacterTable from './CharacterTable/CharacterTable';

const TableComponents = () => {
    const BASE_URL = 'https://swapi.dev/api';
    const [currentApiUrl, setCurrentApiUrl] = useState(`${BASE_URL}/people`);

    useEffect(() => {
        console.log(currentApiUrl)
    })

    return (
        <div id="table-div">
            <CharacterTable characterApiUrl={currentApiUrl} />
        </div>
    )
}

export default TableComponents;
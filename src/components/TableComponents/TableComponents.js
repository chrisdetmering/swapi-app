import React, {useState} from 'react';
import CharacterTable from './CharacterTable/CharacterTable';

const TableComponents = () => {
    const BASE_URL = 'https://swapi.dev/api';

    return (
        <div id="table-div">
            <CharacterTable />
        </div>
    )
}

export default TableComponents;
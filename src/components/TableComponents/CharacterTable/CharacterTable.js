import React from 'react';
import Table from 'react-bootstrap/Table';

import './CharacterTable.css';

const CharacterTable = ({ allCharacters }) => {

    const characterTableRows = () => {
        const populatedRows = allCharacters.map((character, i) => {
            return (
                <tr key={i}>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.height}</td>
                    <td>{character.mass}</td>
                    <td>{character.homeworld}</td>
                    <td>{character.species}</td>
                </tr>
            )
        })
        return populatedRows;
    }

    return (
        <Table className="character-table" hover responsive striped bordered variant="light" size="sm">
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
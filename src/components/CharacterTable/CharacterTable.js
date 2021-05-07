import React from 'react';
import Table from 'react-bootstrap/Table';

class CharacterTable extends React.Component {
    render() {
        return (
            <Table striped bordered variant="light" size="sm" style={{ width: '90vw', margin: 'auto'}}>
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
                        <tr>
                        <td>Luke Skywalker</td>
                        <td>19BBY</td>
                        <td>172</td>
                        <td>77</td>
                        <td>?</td>
                        <td>?</td>
                        </tr>
                    </tbody>
            </Table>
        )
    }
}

export default CharacterTable;
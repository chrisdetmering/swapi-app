import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

const SearchBar = (props) => {
    const BASE_URL = 'https://swapi.dev/api/people/';
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
        if(event.target.value.length === 0) props.updateCurrentUrl("");
        setSearchInput(event.target.value)
    }

    const handleClick = (event) => {
        props.updateCurrentUrl(`?search=${searchInput}`)
    }

    return (
        <div id="search-div">
            <Form.Control id="searchbar" size="sm" type="text" placeholder="Search..." onChange={handleChange} />
            <Button id="search-button" variant="light" size="sm" onClick={handleClick}>Search</Button>
        </div>
    )    
}

export default SearchBar;
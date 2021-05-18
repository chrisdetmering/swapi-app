import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SearchBar.css';

const SearchBar = ({ updateCurrentUrl }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const handleClick = () => {
        updateCurrentUrl(`?search=${searchInput}`)
    }

    return (
        <div id="search-div">
            <Form.Control id="searchbar" size="sm" type="text" placeholder="Search..." onChange={handleChange} />
            <Button id="search-button" variant="light" size="sm" onClick={handleClick}>Search</Button>
        </div>
    )
}

export default SearchBar;
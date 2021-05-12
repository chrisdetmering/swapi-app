import Form from 'react-bootstrap/Form';
import './SearchBar.css'

const SearchBar = (props) => {
    const BASE_URL = 'https://swapi.dev/api/people';

    const handleChange = (event) => {
        const searchString = event.target.value.length === 0 ? "" : `?search=${event.target.value}`
        props.setCurrentApiUrl(`${BASE_URL}/${searchString}`)
    }

    return <Form.Control id="searchbar" size="sm" type="text" placeholder="Search..." onChange={handleChange} />
}

export default SearchBar;
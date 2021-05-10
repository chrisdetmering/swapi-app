import Form from 'react-bootstrap/Form';
import './SearchBar.css'

const SearchBar = (props) => {

    const handleChange = (event) => {
        props.updateSearchText(event.target.value)
    }

    return <Form.Control id="searchbar" size="sm" type="text" placeholder="Search..." onChange={handleChange} />
}

export default SearchBar;
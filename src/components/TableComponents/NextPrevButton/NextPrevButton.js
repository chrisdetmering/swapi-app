import Button from 'react-bootstrap/Button';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import {useEffect} from 'react';

import './NextPrevButton.css';

const NextPrevButton = (props) => {

    useEffect(() => {
        setButtonDisabledProperty()
    }, [props.nextPageUrl, props.prevPageUrl])
    
    const handleClick = (event) => {
        const url = event.target.id === 'next' ? props.nextPageUrl : props.prevPageUrl;
        props.setCurrentApiUrl(url);
    }

    const setButtonDisabledProperty = () => {
        document.getElementById('next').disabled = !props.nextPageUrl
        document.getElementById('prev').disabled = !props.prevPageUrl
    }


    return (
        <div id="button-div">
            <Button id="prev" className="button" variant="light" size="sm" onClick={handleClick}><BsFillCaretLeftFill /> Prev</Button>
            <Button id="next" className="button" variant="light" size="sm" onClick={handleClick}>Next <BsFillCaretRightFill /></Button>
        </div>
    )
}

export default NextPrevButton;
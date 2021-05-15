import Button from 'react-bootstrap/Button';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import {useEffect} from 'react';

import './NextPrevButtons.css';

const NextPrevButtons = (props) => {
    useEffect(() => {
        setButtonDisabledProperty()
    }, [props.nextPageUrl, props.prevPageUrl])

    const setButtonDisabledProperty = () => {
        document.getElementById('next').disabled = !props.nextPageUrl
        document.getElementById('prev').disabled = !props.prevPageUrl
    }


    return (
        <div id="button-div">
            <Button id="prev" className="button" variant="light" size="sm" onClick={props.prevPage}><BsFillCaretLeftFill /> Prev</Button>
            <Button id="next" className="button" variant="light" size="sm" onClick={props.nextPage}>Next <BsFillCaretRightFill /></Button>
        </div>
    )
}

export default NextPrevButtons;
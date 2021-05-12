import Button from 'react-bootstrap/Button';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import './NextPrevButton.css';

const NextPrevButton = () => {
    return (
        <div id="button-div">
            <Button className="button" variant="light" size="sm"><BsFillCaretLeftFill /> Prev</Button>
            <Button className="button" variant="light" size="sm">Next <BsFillCaretRightFill /></Button>
        </div>
    )
}

export default NextPrevButton;
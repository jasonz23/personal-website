import react from 'react';
import './input.css';
import {useState} from 'react';

const Input = () => {
    const [text,setText] = useState("");

    const onSubmit = () => {
        switch (text) {
            case "help":
                console.log("help");
                break;
            case "cd":
                checkLocationAndGo();
                break;
            
        }
    }

    const checkLocationAndGo = () => {
        console.log("cd");
    }
    return (
        <div>
            <label htmlFor="prompt">
                <span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~
            </label>
            <input 
                id="prompt" 
                className="input-box" 
                type="text" 
                aria-label="prompt" 
                autoFocus 
                onChange={(e) => {
                    setText(e.target.value);
                }} 
                onKeyDown={onSubmit}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                />
            
        </div>   
    )
}

export default Input;
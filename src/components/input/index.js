import react from 'react';
import './input.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Input = (props) => {
    const [text,setText] = useState("");
    const navigate = useNavigate();
    const handleCommand = (location, previousInput) => {
        const previousInputList = previousInput.split(" ").map(item => item.trim());;
        console.log(previousInputList);
        const firstCommand = previousInputList[0];
        if (previousInputList.length >= 3) {
            previousInputList[0] = "error";
        }
        switch (firstCommand) {
            case "help":
                console.log("help");
                location.innerHTML += `<div class="command-return">
                                        <div>
                                            Usable Commands are cd, help
                                        </div>
                                        <div>
                                            <div>
                                                cd location: 
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>linkedin</li>
                                                    <li>github</li>
                                                    <li>aboutme</li>
                                                    <li>contactme</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`
                break;
            case "cd":
                checkLocationAndGo(previousInputList[1], location);
                break;
            default:
                location.innerHTML += `<div class="command-return">command not found: ${previousInput}. Please enter help to see all available command.</div>`
            
        }
    }

    const onSubmit = (event) => {
        const inputBody = document.getElementById(`${props.location}-input-body`);
        if (event.key === "c" && event.ctrlKey) {
            inputBody.innerHTML = "";
            return;
        }
        if (event.key === "Enter") {
            const previousInput = event.target.value;
            console.log(previousInput);
            inputBody.innerHTML += `<div class="main-page-command-input"><span class="main-page-command-name">jasonzhao</span>@<span class="main-page-command-location">terminal</span>:$ ~ ${previousInput}<div>`;
            event.target.value = "";
            handleCommand(inputBody,previousInput);
        }
    }

    const throwCdError = (location) => {
        location.innerHTML += '<div class="command-return">Unknown location. Please enter help to see all available locations<div>';
    }

    const checkLocationAndGo = (input, location) => {
        console.log("b")
        switch (input) {
            case "github":
                window.open("https://www.github.com/jasonz23");
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/jason-zhao-24a5b8233/");
                break;
            case "aboutme":
                window.open("/about-me","_self");
                break;
            case "..":
                console.log(window.location.pathname);
                if (window.location.pathname.length > 1) {
                    navigate(-1);
                } else {
                    location.innerHTML += '<div class="command-return">You are already on homepage. Can not go deeper.<div>';
                }
                break;
            default:
                throwCdError(location);

        }
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
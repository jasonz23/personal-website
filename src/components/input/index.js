import './input.css';
import { useNavigate } from 'react-router-dom';
import pdf from "../../static/info/Resume_JasonZhao.pdf";
const Input = (props) => {

    const navigate = useNavigate();
    const handleCommand = (location, previousInput) => {
        const previousInputList = previousInput.split(" ").map(item => item.trim());
        const firstCommand = previousInputList[0];
        if (previousInputList.length >= 3) {
            previousInputList[0] = "error";
        }
        switch (firstCommand) {
            case "help":
                location.innerHTML += `<div class="command-return">
                                            <div>
                                                Usable Commands are cd, help, ls
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
                                                        <li>resume</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>`
                break;
            case "cd":
                checkLocationAndGo(previousInputList[1], location);
                break;
            case "ls":
                location.innerHTML += '<div class="command-return">linkedin, github, aboutme, projects, contactme, resume<div>';
                break;
            default:
                location.innerHTML += `<div class="command-return">command not found: ${firstCommand}. Please enter 'help' to see all available command.</div>`;
                break;
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
            inputBody.innerHTML += `<div class="main-page-command-input"><span class="main-page-command-name">jasonzhao</span>@<span class="main-page-command-location">terminal</span>:$ ~ ${previousInput}<div>`;
            event.target.value = "";
            handleCommand(inputBody,previousInput);
        }
    }

    const throwCdError = (location) => {
        location.innerHTML += `<div class="command-return">Unknown location. Please enter 'help' to see all available locations<div>`;
    }

    const checkLocationAndGo = (input, location) => {
        switch (input) {
            case "github":
                window.open("https://www.github.com/jasonz23");
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/jason-zhao-24a5b8233/");
                break;
            case "aboutme":
                navigate("/about-me","_self");
                break;
            case "projects":
                navigate("/projects","_self");
                break;
            case "contactme":
                navigate("/contact-me","_self");
                break;
            case "resume":
                window.open(pdf);
                break;
            case "..":
                navigate("/");
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
                onKeyDown={onSubmit}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                />
            
        </div>   
    )
}

export default Input;
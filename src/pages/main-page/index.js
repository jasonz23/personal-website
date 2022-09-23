import react from 'react';
import './main-page.css';
import Input from '../../components/input/index';
const MainPage = () => {
    return (
        <div className="main-page-root">
            <div className="main-page-screen">
                <div>   
                    <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ title</p>
                    <pre className="main-page-name-row">   ___                         _______                 </pre>
                    <pre className="main-page-name-row">  |_  |                       |___  / |                </pre>
                    <pre className="main-page-name-row">    | | __ _ ___  ___  _ __      / /| |__   __ _  ___  </pre>
                    <pre className="main-page-name-row">    | |/ _` / __|/ _ \| '_ \    / / | '_ \ / _` |/ _ \ </pre>
                    <pre className="main-page-name-row">/\__/ / (_| \__ \ (_) | | | |  / /__| | | | (_| | (_) |</pre>
                    <pre className="main-page-name-row">\____/ \__,_|___/\___/|_| |_|  \____/_| |_|\__,_|\___/ </pre>
                    <div className="main-page-subtitle-body">
                        <p className="main-page-subtitle">Third year computer science student at The University of British Columbia</p>
                        <p className="main-page-instructions">Enter 'help' to see list of commands and locations</p>
                        <p className="main-page-instructions">Enter 'ctrl + c' to clear the commands</p>
                    </div>
                    <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ links</p>
                    <button className="main-page-link" onClick={() => {window.open("https://www.github.com/jasonz23")}}>Linkedln</button>
                    <br />
                    <button className="main-page-link" onClick={() => {window.open("https://www.linkedin.com/in/jason-zhao-24a5b8233/")}}>Github</button>
                    <br />
                    <button className="main-page-link" onClick={() => {window.open("/about-me","_self");}}>About Me</button>
                    <br />
                    <button className="main-page-link" onClick={() => {window.open("/contact-me","_self");}}>Contact Me</button>
                    <br />
                    <div id="main-page-input-body"></div>
                    <Input location="main-page"/>
                    

                </div>
        </div>
        </div>
        
    )
}

export default MainPage;
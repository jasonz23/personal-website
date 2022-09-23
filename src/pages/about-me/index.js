import react from "react";
import Input from "../../components/input";
import "./about-me.css";
const AboutMe = () => {
    return (
        <div className="about-me-page-root">
            <div className="about-me-page-screen">
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ title</p>
                <pre className="main-page-name-row">           _                 _     __  __      </pre> 
                <pre className="main-page-name-row">     /\   | |               | |   |  \/  |     </pre>
                <pre className="main-page-name-row">    /  \  | |__   ___  _   _| |_  | \  / | ___ </pre>
                <pre className="main-page-name-row">   / /\ \ | '_ \ / _ \| | | | __| | |\/| |/ _ \</pre>
                <pre className="main-page-name-row">  / ____ \| |_) | (_) | |_| | |_  | |  | |  __/</pre>
                <pre className="main-page-name-row"> /_/    \_\_.__/ \___/ \__,_|\__| |_|  |_|\___|</pre>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ links</p>
                <p className="main-page-link" onClick={() => {window.open("/","_self");}}>Main Page</p>
                <div id="about-me-input-body">

                </div>
                <Input location="about-me"/>
            </div>
        </div>
    )
}
export default AboutMe;
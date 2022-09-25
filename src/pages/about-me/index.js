import react from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import "./about-me.css";
const AboutMe = () => {
    return (
        <div className="about-me-page-root">
            <div className="about-me-page-screen">
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ title</p>
                <pre className="about-page-name-row">           _                 _     __  __      </pre> 
                <pre className="about-page-name-row">     /\   | |               | |   |  \/  |     </pre>
                <pre className="about-page-name-row">    /  \  | |__   ___  _   _| |_  | \  / | ___ </pre>
                <pre className="about-page-name-row">   / /\ \ | '_ \ / _ \| | | | __| | |\/| |/ _ \</pre>
                <pre className="about-page-name-row">  / ____ \| |_) | (_) | |_| | |_  | |  | |  __/</pre>
                <pre className="about-page-name-row"> /_/    \_\_.__/ \___/ \__,_|\__| |_|  |_|\___|</pre>
                <div className="main-page-subtitle-body">
                    <p className="main-page-subtitle">Some info about me</p>
                    <p className="main-page-instructions">Enter 'help' to see list of commands and locations</p>
                </div>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ links</p>
                <Link className="main-page-link" to="/">Main Page</Link>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ aboutme</p>
                    <div className="about-me-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur doloribus? Distinctio in commodi, nam voluptatum soluta, a praesentium provident obcaecati porro dolor recusandae modi odio delectus beatae est doloremque!
                    </div>
                    <div className="about-me-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aspernatur doloribus? Distinctio in commodi, nam voluptatum soluta, a praesentium provident obcaecati porro dolor recusandae modi odio delectus beatae est doloremque!
                    </div>
                
                
                <div id="about-me-input-body">

                </div>
                <Input location="about-me"/>
            </div>
        </div>
    )
}
export default AboutMe;
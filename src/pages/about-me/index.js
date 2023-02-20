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
                    📚 Third year computer science student at The University of British Columbia.
                    <br />
                    👨‍💻 Full Stack Developer at STN Video (React, JavaScript, Java, PHP, Node JS)
                    <br />
                    <br />
                    As a full stack developer and student at the University of British Columbia, I am constantly striving to improve my skills and stay up-to-date with the latest technologies. My main expertise lies in React, JavaScript, Java, Node JS and PHP, but I am always eager to learn new programming languages and tools. I thrive in fast-paced environments and consider myself a quick learner. I am highly motivated and dedicated to delivering high-quality software solutions.
                    </div>
                    <div className="about-me-info">
                        In my free time I love to play tennis, video games and program. 
                    </div>            
                <div id="about-me-input-body">
                </div>
                <Input location="about-me"/>
            </div>
        </div>
    )
}
export default AboutMe;
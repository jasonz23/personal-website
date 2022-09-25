import react from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import projectsInfo from "../../static/info/projects-info";
import Project from "./project";
import "./projects.css";
const Projects = () => {
    return (
        <div className="project-me-page-root">
            <div className="project-me-page-screen">
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ title</p>
                <pre className="project-page-name-row"> _____           _           _        </pre>
                <pre className="project-page-name-row">|  __ \         (_)         | |       </pre>
                <pre className="project-page-name-row">| |__) | __ ___  _  ___  ___| |_ ___  </pre>
                <pre className="project-page-name-row">|  ___/ '__/ _ \| |/ _ \/ __| __/ __| </pre>
                <pre className="project-page-name-row">| |   | | | (_) | |  __/ (__| |_\__ \ </pre>
                <pre className="project-page-name-row">|_|   |_|  \___/| |\___|\___|\__|___/ </pre>
                <pre className="project-page-name-row">               _/ |                   </pre> 
                <pre className="project-page-name-row">              |__/                    </pre>
                <div className="main-page-subtitle-body">
                    <p className="main-page-subtitle">Projects I have created</p>
                    <p className="main-page-instructions">Enter 'help' to see list of commands and locations</p>
                </div>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ links</p>
                <Link className="main-page-link" to="/">Main Page</Link>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ projects</p>
                <div>
                    {projectsInfo.map((projectInfo) => {
                        return (
                            <div>
                                <Project info = {projectInfo} />
                            </div>      
                        )
                    })}
                </div>
                <div id="projects-input-body">

                </div>
                <Input location="projects"/>
            </div>
        </div>
    )

}

export default Projects;
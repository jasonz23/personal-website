import react from "react";
import Input from "../../components/input";
import "./contact-me.css"
const ContactMe = () => {
    return (
        <div className="contact-me-page-root">
            <div className="contact-me-page-screen">
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ title</p>
                <pre className="contact-page-name-row">   _____            _             _     __  __      </pre> 
                <pre className="contact-page-name-row">  / ____|          | |           | |   |  \/  |     </pre>
                <pre className="contact-page-name-row"> | |     ___  _ __ | |_ __ _  ___| |_  | \  / | ___ </pre>
                <pre className="contact-page-name-row"> | |    / _ \| '_ \| __/ _` |/ __| __| | |\/| |/ _ \</pre>
                <pre className="contact-page-name-row"> | |___| (_) | | | | || (_| | (__| |_  | |  | |  __/</pre>
                <pre className="contact-page-name-row">  \_____\___/|_| |_|\__\__,_|\___|\__| |_|  |_|\___|</pre>
                <div className="main-page-subtitle-body">
                    <p className="main-page-subtitle">Projects I have created</p>
                    <p className="main-page-instructions">Enter 'help' to see list of commands and locations</p>
                </div>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ links</p>
                <p className="main-page-link" onClick={() => {window.open("/","_self");}}>Main Page</p>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ form</p>

                <div id="contact-me-input-body"></div>
                <Input location="contact-me"/>
            </div>
        </div>
    )
}

export default ContactMe;
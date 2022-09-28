import react from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import { Grid } from "@mui/material";
import "./contact-me.css";

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
                <Link className="main-page-link" to="/">Main Page</Link>
                <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ form</p>
                <form>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <p className="contact-input-title">Name</p>
                            <input className="contact-input-box" />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <p className="contact-input-title">Email</p>
                            <input className="contact-input-box" />
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <p className="contact-input-title">Subject</p>
                            <input className="contact-input-box-subject" />
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <p className="contact-input-title">Message</p>
                            <textarea className="contact-input-box-message" rows="30" columns="30"> </textarea>
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <button className="contact-form-submit">Submit</button>
                        </Grid>
                    </Grid>
                </form>
                <div id="contact-me-input-body"></div>
                <Input location="contact-me"/>
            </div>
        </div>
    )
}

export default ContactMe;
import react, { useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import { Grid } from "@mui/material";
import emailjs from '@emailjs/browser';

import "./contact-me.css";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        const formElements = form.current.elements;
        console.log(process.env.REACT_APP_USER_ID)
        const data = {
            name: formElements['name'].value,
            subject: formElements['subject'].value,
            email: formElements['email'].value,
            message: formElements['message'].value
        }

        try {
            await emailjs.send(
                'service_hk73x2p',
                'contact-form',
                data,
                '4AJU7_g4gyOqqmVZE'
            );
        } catch(e)
        {
            console.error(e);
        }
        
    }

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
                <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <label className="contact-input-title">
                                <p style={{padding:0, margin:5}}>Name</p>
                                <input className="contact-input-box name" id="name"/>
                            </label>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <label className="contact-input-title">
                                <p style={{padding:0, margin:5}}>Email</p>
                                <input className="contact-input-box" id="email"/>
                            </label>
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <label className="contact-input-title">
                                Subject
                                <input className="contact-input-box-subject" id="subject"/>
                            </label>
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <label className="contact-input-title">
                                Message
                                <textarea className="contact-input-box-message" rows="30" columns="30" id="message"> </textarea>
                            </label>
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
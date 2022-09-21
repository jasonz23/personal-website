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
                    <pre className="main-page-name-row">/\__/ / (_| \__ \ (_) | | | | /  /__| | | | (_| | (_) |</pre>
                    <pre className="main-page-name-row">\____/ \__,_|___/\___/|_| |_| \_____/_| |_|\__,_|\___/ </pre>
                    <p><span className="main-page-command-name">jasonzhao</span>@<span className="main-page-command-location">terminal</span>:$ ~ links</p>
                    <p>Linkedln</p>
                    <p>Github</p>
                    <p>About Me</p>
                    <p>Contact Me</p>
                    <Input />

                </div>
        </div>
        </div>
        
    )
}

export default MainPage;
import react from 'react';
import AboutMe from '../about-me';
import MainPage from '../main-page/index';
import Projects from '../projects';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ContactMe from '../contact-me';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/contact-me" element={<ContactMe/>} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                
            </BrowserRouter>
        </>
    )

}

export default App;
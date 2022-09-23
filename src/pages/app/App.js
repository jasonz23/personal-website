import react from 'react';
import AboutMe from '../about-me';
import MainPage from '../main-page/index';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/about-me" element={<AboutMe />} />
                    
                </Routes>
                
            </BrowserRouter>
        </>
    )

}

export default App;
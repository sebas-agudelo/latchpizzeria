import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import './sass/style.scss';
import About from './pages/About';
import { Menu } from './pages/Menu';

function App() {
    const [showHome, setShowHome] = useState(false);



    return (
        <div className="App">
            <BrowserRouter>
                <Nav  />
                <Routes>
                    <Route path='/' element={<Home className={showHome ? 'hidden' : ""}/>}/>
                    <Route path='/kontakt' element={<Contact />}/>
                    <Route path='/om-oss' element={<About />}/>
                    <Route path='/meny' element={<Menu />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

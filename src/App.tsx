import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/AdminSignin';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import './sass/style.scss';
import AdminPanel from './pages/AdminPanel';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories';
// import { ScrollToTop } from './components/Nav';
import About from './pages/About';
import { Footer } from './components/Footer';
import { Menu } from './pages/Menu';

function App() {
    const [showHome, setShowHome] = useState(false);



    return (
        <div className="App">
            <BrowserRouter>
                <Nav  />
                {/* <ScrollToTop /> */}
                

                <Routes>
                    <Route path='/' element={<Home className={showHome ? 'hidden' : ""}/>}/>
                    <Route path='/kontakt' element={<Contact />}/>
                    <Route path='/about' element={<About />}/>

                    {/* ALLT OM ADMIN */}
                    <Route path='/adminlogin' element={<Signin />}/>
                    <Route path='/adminpanel' element={<AdminPanel />}/>
                    <Route path='/nyprodukt' element={<AddProduct />}/>
                    <Route path='/meny' element={<Menu />}/>

                    {/* ALLT OM USER */}
                    {/* <Route path='/login' element={<UserSignin />}/> */}
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </div>
    );
}

export default App;

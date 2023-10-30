import React from "react";
import {Container} from "react-bootstrap";
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComp from "./components/NavbarComp";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Config from "./components/Config";

function App () {
    return (
        <div className="App bg-info-subtle min-vh-100 align-items-center text-dark">
            <header className="">
            <NavbarComp/>
            </header>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path='config' element={<Config/>}/>
        </Routes>

                        
                    
                
            
        </div>

    )
}

export default App;
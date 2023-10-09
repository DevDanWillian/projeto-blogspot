import React from "react";
import {Container} from "react-bootstrap";
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom';


import NavbarComp from "./components/NavbarComp";
import Posts from "./components/Posts";

import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
    return (
        <div className="App bg-info-subtle min-vh-100 align-items-center text-dark">
            <header className="">
            <NavbarComp/>
            </header>
                            
                        
                    
                
            
        </div>

    )
}

export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import GoHome from '../GoHome/GoHome';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path='/' component={Home} exact />
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/contact' component={Contact} />
                    <GoHome />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App; 
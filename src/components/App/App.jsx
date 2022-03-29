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
            <BrowserRouter basename='/'>
                <div>
                    <NavBar />
                    <Route key= 'home' path='/' component={Home} exact />
                    <Route key= 'about' path='/about' component={About} />
                    <Route key= 'projects' path='/projects' component={Projects} />
                    <Route key= 'skills' path='/skills' component={Skills} />
                    <Route key= 'contact' path='/contact' component={Contact} />
                    <GoHome />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App; 
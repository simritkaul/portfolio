import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';

// We use a Class component because the routing is easier 
class NavBar extends React.Component {
    render() {

        const { pathname } = this.props.location;

        const homeClass = pathname === '/' ? 'active-item' : '';
        const aboutClass = pathname === '/about' ? 'active-item' : '';
        const projectsClass = pathname === '/projects' ? 'active-item' : '';
        const skillsClass = pathname === '/skills' ? 'active-item' : '';
        const publicationsClass = pathname === '/publications' ? 'active-item' : '';
        const contactClass = pathname === '/contact' ? 'active-item' : '';

        return (
            <Menu>
                {/* We will NEVER use <a> in react router */}
                {/* This is because the <a> will cause it to reload the entire page */}
                {/* But we want to do client side routing */}
                {/* <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="Projects" className="menu-item" href="/Projects">Projects</a>
                <a id="Skills" className="menu-item" href="/Skills">Skills</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a> */}
                <Link to='/' className= {`menu-item ${homeClass}`}>
                    Home
                </Link>
                <Link to='/about' className= {`menu-item ${aboutClass}`}>
                    About
                </Link>
                <Link to='/projects' className= {`menu-item ${projectsClass}`}>
                    Projects
                </Link>
                <Link to='/skills' className= {`menu-item ${skillsClass}`}>
                    Skills
                </Link>
                <Link to='/publications' className= {`menu-item ${publicationsClass}`}>
                    Publications
                </Link>
                <Link to='/contact' className= {`menu-item ${contactClass}`}>
                    Contact
                </Link>

            </Menu>
        )
    }
}

// This exports the component as well as the props alongside all the information about the routes and router
export default withRouter(NavBar);
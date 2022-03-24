import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({text, link, address}) => {
    return (
        <div className="footer-container">
            {text}
            <Link to={address} className= "footer-link">
                {link}
            </Link>
        </div>
    )
}

export default Footer;
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contact.css';
import contactVector from '../../assets/contact_vector.png';
import linkedin from '../../assets/li.png';
import website from '../../assets/website.png';
import github from '../../assets/github.png';

const Contact = () => {
    return (
        <div className="section-container">
            <Header 
                heading="Get in touch"
                details="Interested to collaborate? Feel free to drop me an email."
            />

            {/* Form Section */}
            <div className="contact-form-container">
                <form action="https://formspree.io/f/mdoblobn" method="POST" className="contact-form">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Your Email ID' 
                        className='input-box email-input'
                    />
                    <textarea 
                        type="text" 
                        name="message" 
                        placeholder='Your Message' 
                        className='input-box msg-input'
                    />
                    <button type="submit" className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className="social-icons-container">
                <a href="http://simritkaul.github.io/portfolio" className='social-icon'>
                    <img src={website} alt="social" />
                </a>
                <a href="https://www.linkedin.com/in/simrit-kaul-11409714b" className='social-icon'>
                    <img src={linkedin} alt="social" />
                </a>
                <a href="https://github.com/simritkaul" className='social-icon'>
                    <img src={github} alt="social" />
                </a>
            </div>

            <Footer 
                text="Read more "
                link="about me."
                address="/about"
            />

            <div className="vector-frame">
                {/* ClassName is about-vector because we want to use that same styling */}
                <img src={contactVector} alt="vector" className='about-vector'/>
            </div>
        </div>
    )
}

export default Contact;
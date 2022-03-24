import React from 'react';
import Header from '../Header/Header';
import './About.css';
import aboutVector from '../../assets/about_vector.png'
import Footer from '../Footer/Footer';
import aboutAnime from '../../assets/about_anime.gif'

const About = () => {
    return (
        <div className="section-container">
            <Header 
                heading="About Me" 
                details= "This is me. Writing a bit of a small bio"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* Subsection 1 */}
                    <h3 className='about-subhead'>Student</h3>
                    <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum aspernatur soluta sint quod in nesciunt quia, corrupti earum aliquid.</p>
                    {/* Subsection 2 */}
                    <h3 className='about-subhead'>Student</h3>
                    <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum aspernatur soluta sint quod in nesciunt quia, corrupti earum aliquid.</p>
                    {/* Subsection 3 */}
                    <h3 className='about-subhead'>Student</h3>
                    <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum aspernatur soluta sint quod in nesciunt quia, corrupti earum aliquid.</p>
                </div>
                <div className="about-main-right">
                    <img src={aboutAnime} alt="about-img" className='about-img'/>
                </div>
            </div>

            <Footer
                text="Check out my "
                link="projects"
                address="/projects" 
            />

            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} alt="about" className="about-vector"/>
            </div>
        </div>
    )
}

export default About;
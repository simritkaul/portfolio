import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Skills.css';
import skillsVector from '../../assets/skills_vector.png'
import {skillList} from '../../assets/skillsData';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className="section-container">
            <Header 
                heading= "My Skills"
                details= "I am passionate about new technologies so I try my best to learn different things and use them in my daily life. These are some of the skills I have learnt."
            />

            <div className="skill-card-container">
                {
                    skillList.map(({skillName, skillUrl}) => {
                        return (
                            <SkillCard key= {skillName} skillName={skillName} skillUrl= {skillUrl}/>
                        )
                    })
                }
            </div>

            <Footer 
                text="Get in "
                link= "touch"
                address= "/contact"
            />

            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills-vector" className="skills-vector" />
            </div>

        </div>
    )
}

export default Skills;
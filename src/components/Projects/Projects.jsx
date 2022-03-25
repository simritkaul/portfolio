import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { projectsData } from '../../assets/projectsData';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="section-container">
            <Header 
                heading="My Projects"
                details="Here are a few cool things I have worked on. Do check them out!"
            />

            <div className="project-cards-container">
                {
                    projectsData.map((project) => {
                        return <ProjectCard 
                                    key={project.projectName}
                                    projectName={project.projectName}
                                    projectDescription={project.projectDescription}
                                    imageUrl={project.imageUrl}
                                    projectUrl={project.projectUrl}
                                />
                    })
                }
            </div>

            <Footer 
                text="Check out "
                link="my skills!"
                address="/skills"
            />
        </div>
    )
}

export default Projects;
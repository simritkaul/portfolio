import React from 'react';
import './Projects.css';

const ProjectCard = ({projectName, projectDescription, imageUrl, projectUrl}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className= "project-external-link" target="_blank" rel='noreferrer'>
                    <img src={imageUrl} alt="project" className="project-img" />
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-desc">{projectDescription}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
import React from 'react';
import './Publications.css';

const PublicationCard = ({publicationName, journalName, publicationDescription, publicationUrl}) => {
    return (
        <div className="publication-card">
            <div className="details-container">
                <a href={publicationUrl} className="publication-link" target="_blank" rel="noreferrer">
                    <h1 className="project-heading">{publicationName}</h1>
                </a>
                <h2 className="journal-heading">{journalName}</h2>
                <p className="project-desc">{publicationDescription}</p>
            </div>
        </div>
    )
}

export default PublicationCard;
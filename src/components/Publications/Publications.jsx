import React from 'react';
import './Publications.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PublicationCard from './PublicationCard';
import {publicationData} from '../../assets/publicationData';

const Publications = () => {
    return (
        <div className="section-container">
            <Header 
                heading="My Published Work"
                details="Here are a few cool things I have worked on. Do check them out!"
            />

            <div className="publication-cards-container">
                {
                    publicationData.map((publication) => {
                        return <PublicationCard 
                                    key={publication.publicationName}
                                    publicationName={publication.publicationName}
                                    journalName= {publication.journalName}
                                    publicationDescription={publication.publicationDescription}
                                    publicationUrl={publication.publicationUrl}
                                />
                    })
                }
            </div>

            <Footer 
                text="Get in "
                link= "touch"
                address= "/contact"
            />
        </div>
    )
}

export default Publications;
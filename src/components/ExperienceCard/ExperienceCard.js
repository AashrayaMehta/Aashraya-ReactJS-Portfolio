import React from 'react'

import './experience-card.css';

export const ExperienceCard = ({ experience }) => {
    return (
        <div className="project-card">
            <p><b>Name:</b> {experience.companyName}</p>
            <p><b>Role:</b> {experience.role}</p>
            <p><b>About:</b> {experience.about}</p>
        </div>
    )
}
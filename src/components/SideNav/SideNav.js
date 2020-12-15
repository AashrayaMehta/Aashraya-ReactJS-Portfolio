import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={process.env.PUBLIC_URL + '/profile.jpg'}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Aashraya Mehta</h2>
            <p className="subtitle">"McMaster Engineering - 3rd Year"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("experiences")}>Experiences</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};
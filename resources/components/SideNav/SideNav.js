import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQHTNBtGZdZ7hA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=tvQDNDMGNCxNo-fSs-6B-v7aR-VfWyuOsYBVl0h6qus"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Madhav Bahl</h2>
            <p className="subtitle">"A Cadet Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};
import React from 'react';

import './sidenav.css'; 

export const SideNav = (props) => {
    return (
        <div className="sidenav">
            <img 
                src= "https://media-exp1.licdn.com/dms/image/C5603AQHTNBtGZdZ7hA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=tvQDNDMGNCxNo-fSs-6B-v7aR-VfWyuOsYBVl0h6qus"
                className="avatar"
                alt="avatar"
            />
        <h2 className="main-name">Aashraya Mehta</h2>
            <p className="subtitle">“The people who are crazy enough to think they can change the world are the ones who do.” Steve Jobs</p>
            <div className="sections-list">
                <p className="section-list-element">About Me</p>
                <p className="section-list-element">Skills</p>
                <p className="section-list-element">Projects</p>
            </div>  
        </div>
    )
}
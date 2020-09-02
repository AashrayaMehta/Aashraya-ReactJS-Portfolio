import React from 'react';

import { SideNav } from './../SideNav/SideNav'; 

import './portfolio.css';

export const Portfolio = (props) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container"> 
                <SideNav />
            </div>
            <div className="main-section-container">  
            <h1> Main Section </h1>
            </div>
        </div>
        
    )
}
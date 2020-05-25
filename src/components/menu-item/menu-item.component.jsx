import React from 'react';
import './menu-item.styles.scss';

function MenuItem(props) {
    return (
        <div className={`menu-item ${props.size}`}>
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">{props.subtitle}</span>
            </div>
            <div className="background-image" style={{backgroundImage:`url(${props.imageUrl})`}}></div> 
        </div>
    );
}

export default MenuItem;
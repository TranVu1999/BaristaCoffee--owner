import React from 'react';
import './style.scss';

export default function SidebarRightItem(props) {
    return (
        <div className="sidebar-right__item">
            <div className="sidebar-item__label">
                <span>{props.title}</span>
            </div>
            <div className="sidebar-item__text">{props.text}</div>
        </div>
    )
}

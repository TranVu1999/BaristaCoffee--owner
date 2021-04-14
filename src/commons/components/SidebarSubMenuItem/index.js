import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom'

export default function SidebarSubMenuItem(props) {
    return (
        <div 
            className={props.active ? "sidebar-sub-menu-item active" : "sidebar-sub-menu-item"}
        >
            <NavLink to={props.link}>{props.span}</NavLink>
        </div>
    )
}

import React from 'react';
import './style.scss';

export default function SidebarLeftItem(props) {
    const onHandleActive = () => {
        props.onHandleActive();
    }

    return (
        <div 
            className={props.isActive ? "sidebar--left__item active" : "sidebar--left__item close"}
            onClick = {onHandleActive}
        >
            <div className="sidebar-item__label">
                <div className="span-box">
                    <img src={props.icon} alt="icon"/>
                    <span className="span">{props.span}</span>
                </div>

                <div className="icon-box">
                    <span aria-hidden="true" class="arrow_carrot-down"></span>
                </div>
            </div>

            <div className="sidebar-item__toggle">
                {props.children}
            </div>
            
        </div>
    )
}

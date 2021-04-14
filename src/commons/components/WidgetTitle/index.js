import React from 'react';
import './style.scss';
import ReadmoreLink from './../ReadmoreLink'; 

export default function WidgetTitle(props) {
    return (
        <div className="widget">
            <div className="widget--left">
                <h4>{props.title}</h4>
                <span>{props.desc}</span>
            </div>
            {
                props.link ? (
                    <div className="widget--right">
                        <ReadmoreLink link={props.link}/>
                    </div>
                ) : ""
            }
            
        </div>
    )
}

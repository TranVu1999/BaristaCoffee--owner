import React from 'react';
import Popover from '../Popover';
import './style.scss';

export default function AnalysisItem(props) {
    return (
        <div className="analysis__item">
            <div className="analysis__item--label">
                {props.title}
                <Popover content={props.popover}/>
            </div>
            <div className="analysis__item--number">{props.number}</div>
            {props.isOpenDesc ? (<div className="analysis__item--desc">Vs hôm qua 0.00%</div>) : ""}
            
        </div>
    )
}

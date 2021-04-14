import React from 'react';
import './style.scss';

export default function ReadmoreLink(props) {
    return (
        <div className="reawdmore-link-box">
            <a href={props.link}>Xem thêm</a>
            <span aria-hidden="true" class="arrow_carrot-right"></span>
        </div>
    )
}

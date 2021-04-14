import React from 'react';
import './style.scss';

export default function ToDoListItem(props) {
    return (
        <div className="todo-list__item">
            <span className="number">{props.number}</span>
            <span className="label">{props.label}</span>
        </div>
    )
}

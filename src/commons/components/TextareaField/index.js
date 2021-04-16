import React from 'react';
import './style.scss';

export default function TextareaField(props) {
    const onHandleFocus = (event) =>{
        props.onHandleFocus(event);
    }

    const onHandleBlur = (event) =>{
        props.onHandleBlur(event);
    }

    const onHandleChange = (event) =>{
        props.onHandleChange(event);
    }

    return (
        <>
            <div 
                className = {props.errMessage ? "input-control has-error" : "input-control"}
            >
                <textarea 
                    rows = {props.rows ? props.rows : 10}
                    cols="30"
                    onFocus = {onHandleFocus}
                    onBlur = {onHandleBlur}
                    value = {props.value}
                    onChange = {onHandleChange}
                    name = {props.name}
                ></textarea>
                {props.errMessage ? <div className="input-error">
                    <span>{props.errMessage}</span>
                </div> : ""}
                
            </div>
            {props.rangeLimit ? <div className="input-suffix">{props.value.length}/{props.rangeLimit}</div> : ""}
            
        </>
    )
}

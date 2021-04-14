import React from 'react';
import './style.scss';

export default function InputField(props) {
    const onHandleChange = (event) =>{
        props.onHandleChange(event);
    }

    const onHandleFocus = (event) =>{
        props.onHandleFocus(event);
    }

    const onHandleBlur = (event) =>{
        props.onHandleBlur(event);
    }

    const renderClassInput = () =>{
        let str = "input-control";

        if(props.errMessage){
            str += " has-error";
        }

        if(props.mdInput){
            str += " md-input";
        }

        return str;
    }

    return (
        <div className="input-field__box">
            <div 
                className = {renderClassInput()}
            >
                {props.unit ? (<div className="input-prefix">đ</div>) : ""}
                {props.isReadOnly ? (
                    <input 
                    type="text" 
                    placeholder = {props.placeholder}
                    name = {props.name}
                    value = {props.value}
                    onChange = {onHandleChange}
                    onFocus = {onHandleFocus}
                    onBlur = {onHandleBlur}
                    readOnly
                />
                ):
                <input 
                    type="text" 
                    placeholder = {props.placeholder}
                    name = {props.name}
                    value = {props.value}
                    onChange = {onHandleChange}
                    onFocus = {onHandleFocus}
                    onBlur = {onHandleBlur}
                />
                }
                
                {props.rangeLimit ? <div className="input-suffix">{props.value.length}/{props.rangeLimit}</div> : ""}
                {props.errMessage ? <div className="input-error">
                    <span>{props.errMessage}</span>
                </div> : ""}
                
            </div>
        </div>
    )
}

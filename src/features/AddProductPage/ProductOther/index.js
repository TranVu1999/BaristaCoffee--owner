import React from 'react'
import './style.scss'

function ProudctOther(props) {

    const onHandleFocus = (event) =>{
        props.onHandleFocus(event)
    }

    const onHandleChange = (event) =>{
        props.onHandleChange(event);
    }

    const onHandleBlur = (event) =>{
        props.onHandleBlur(event);
    }

    return (
        <div className="widget-form__group last-group">
            <h4 className="title">Thông tin khác</h4>

            <div className="widget-form__row">
                <div className="widget-form__label">
                    Kích thước đóng gói
                </div>

                <div className="widget-form__input">
                    <div className="size-input__box">
                        <div className="size-input">
                            <input 
                                type="text" placeholder="R"
                                name="size-width"
                                onFocus = {onHandleFocus}
                                onChange = {onHandleChange}
                                onBlur = {onHandleBlur}
                                value = {props.prodWidth}
                            />
                            <div className="input-suffix">cm</div>
                        </div>
                        
                        <div className="size-input">
                            <input 
                                type="text" 
                                placeholder="D"
                                name="size-length"
                                onFocus = {onHandleFocus}
                                onChange = {onHandleChange}
                                onBlur = {onHandleBlur}
                                value = {props.prodLength}
                            />
                            <div className="input-suffix">cm</div>
                        </div>

                        <div className="size-input">
                            <input 
                                type="text" 
                                placeholder="C"
                                name="size-height"
                                onFocus = {onHandleFocus}
                                onChange = {onHandleChange}
                                onBlur = {onHandleBlur}
                                value = {props.prodHeight}
                            />
                            <div className="input-suffix">cm</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="widget-form__row">
                <div className="widget-form__label">
                    Trọng lượng đóng gói
                </div>

                <div className="widget-form__input">
                    <div className="size-input__box">
                        <div className="size-input">
                            <input 
                                type="text" 
                                placeholder="1.0"
                                name="size-weight"
                                onHandleFocus = {onHandleFocus}
                                onHandleChange = {onHandleChange}
                                onHandleBlur = {onHandleBlur}
                                value = {props.prodWeight}
                            />
                            <div className="input-suffix">kg</div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ProudctOther

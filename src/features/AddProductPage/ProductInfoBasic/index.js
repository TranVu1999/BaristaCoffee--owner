import React from 'react';
import InputField from './../../../commons/components/InputField';
import TextareaField from './../../../commons/components/TextareaField';
import SelectFindField from './../../../commons/components/SelectFindField';


export default function ProductInfomationBasic(props) {
    const onHandleFocus = (event) =>{
        props.onHandleFocus(event)
    }

    const onHandleChange = (event) =>{
        props.onHandleChange(event);
    }

    const onHandleBlur = (event) =>{
        props.onHandleBlur(event);
    }

    const onHandleChooseItem = item =>{
        props.onHandleChooseItem(item);
    }

    return (
        <div className="widget-form__group">
            <h4 className="title">Thông tin cơ bản</h4>

            <div className="widget-form__row">
                <div className="widget-form__label">
                    Tên sản phẩm
                </div>

                <div className="widget-form__input">
                    <InputField
                        placeholder="Nhập tên shop của bạn"
                        rangeLimit = "120"
                        value = {props.prodTitle}
                        onHandleChange = {onHandleChange}
                        name = "prodTitle"
                        onHandleFocus = {onHandleFocus}
                        errMessage = {props.prodTitleError}
                        onHandleBlur = {onHandleBlur}
                    />
                </div>
            </div>

            <div className="widget-form__row large-input">
                <div className="widget-form__label">
                    Mô tả sản phẩm
                </div>

                <div className="widget-form__input">
                    <TextareaField
                        onHandleChange = {onHandleChange}
                        onHandleFocus = {onHandleFocus}
                        onHandleBlur = {onHandleBlur}
                        name = "prodDesc"
                        value = {props.prodDesc}
                        rangeLimit = "3000"
                        errMessage = {props.prodDescError}
                    />
                </div>
            </div>

            <div className="widget-form__row">
                <div className="widget-form__label">Danh mục</div>

                <div className="widget-form__input">
                    <div className="input-control md-input">
                        <SelectFindField
                            listOption = {props.listProdCate}
                            onHandleChooseItem = {onHandleChooseItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

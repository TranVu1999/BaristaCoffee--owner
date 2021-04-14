import React, {useState} from 'react';
import SaleTableInput from './../SaleTableInput';
import InputField from './../../../commons/components/InputField';

export default function ProductInfoSale(props) {

    const [showListSaleRow, setShowListSaleRow] = useState(false);

    const [listSaleRow, setListSaleRow] = useState([
        { 
            id: "1", 
            from: {
                value: "",
                error: ""
            }, 

            to: {
                value: "",
                error: ""
            }, 

            price: {
                value: "",
                error: ""
            }
        }
    ]);

    const onHandleFocus = (event) =>{
        props.onHandleFocus(event)
    }

    const onHandleChange = (event) =>{
        props.onHandleChange(event);
    }

    const onHandleBlur = (event) =>{
        props.onHandleBlur(event);
    }

    const onHandleShowListSale = () =>{
        setShowListSaleRow(true);
    }

    const onHandleCloseListSaleRow = () =>{
        setShowListSaleRow(false);
    }

    return (
        <div className="widget-form__group">
            <h4 className="title">Thông tin bán hàng</h4>

            <div className="widget-form__row">
                <div className="widget-form__label">Giá</div>

                <div className="widget-form__input">
                    <InputField
                        placeholder="Nhập vào"
                        value = {props.prodPrice}
                        onHandleChange = {onHandleChange}
                        name = "prodPrice"
                        onHandleFocus = {onHandleFocus}
                        errMessage = {props.prodPriceError}
                        onHandleBlur = {onHandleBlur}
                        mdInput = {true}
                        unit = "đ"
                    />
                </div>
            </div>

            <div className="widget-form__row">
                <div className="widget-form__label">Kho hàng</div>

                <div className="widget-form__input">
                    <InputField
                        placeholder="0"
                        value = {props.prodSKU}
                        onHandleChange = {onHandleChange}
                        name = "prodSKU"
                        onHandleFocus = {onHandleFocus}
                        errMessage = {props.prodSKUError}
                        onHandleBlur = {onHandleBlur}
                        mdInput = {true}
                    />
                </div>
            </div>

            <div className="widget-form__row">
                <div className="widget-form__label">Phân loại hàng</div>

                <div className="widget-form__input ">
                    <div className="input-control md-input add-input">
                        <span className="add-label"><span aria-hidden="true" class="icon_plus_alt2"></span> Thêm nhóm phân loại</span>
                    </div>
                </div>
            </div>

            <div className="widget-form__row align-start">
                <div className="widget-form__label">Mua nhiều giảm giá</div>

                <div className="widget-form__input">
                    {showListSaleRow ? (<SaleTableInput 
                        listSaleRow = {listSaleRow}
                        onHandleCloseListSaleRow = {onHandleCloseListSaleRow}
                    />): (
                        <div 
                            className="input-control md-input add-input"
                            onClick = {onHandleShowListSale}
                        >
                            <span className="add-label"><span aria-hidden="true" class="icon_plus_alt2"></span> Thêm khoảng giá</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

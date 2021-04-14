import React, {useState} from 'react';
import './style.scss';
import WidgetTitle from './../../commons/components/WidgetTitle';
import Suggestion from '../../commons/components/Suggestion';

import * as validate from './../../commons/js/validate-input';
import * as helper from './../../commons/js/helper';
import ProductInfomationBasic from './../../features/AddProductPage/ProductInfoBasic';
import ProductInfoSale from './../../features/AddProductPage/ProductInfoSale';
import ProductImage from './../../features/AddProductPage/ProductImage';
import ProudctOther from './../../features/AddProductPage/ProductOther';

export default function AddProductPage() {
    const [isActiveSuggest, setIsActiveSuggest] = useState(false);
    const [prodTitle, setProdTitle] = useState({
        value: '',
        err: ''
    });

    const [prodDesc, setProdDesc] = useState({
        value: '',
        err: ''
    });

    const [prodPrice, setProdPrice] = useState({
        value: '',
        err: ''
    });

    const [prodSKU, setProdSKU] = useState({
        value: '',
        err: ''
    });

    const [listProdCate] = useState([
        "Coffee Cup",
        "Coffee Pot",
        "Coffee Treats",
        "Ground Coffee",
        "Paper Bag"
    ])

    const [prodOther, setProdOther] = useState({
        prodWidth: {
            value: '',
            error: ''
        },
        prodLength: {
            value: '',
            error: ''
        },
        prodHeight: {
            value: '',
            error: ''
        },
        prodWeight: {
            value: '',
            error: ''
        }
    })

    const onHandleFocus = (event) =>{
        setIsActiveSuggest(false);
        setTimeout(function(){ setIsActiveSuggest(true); }, 500);
    }

    const onHandleCloseSuggest = () =>{
        setIsActiveSuggest(false);
    }    

    const onHandleChange = (event) =>{
        let {name, value} = event.target;
        let aliasName = name
        let oldValue = null;
        let lengthValue = 0;

        let index = name.indexOf('size');
        
        if(index !== -1){
            aliasName = name.slice(0, name.indexOf('-'));
        }

        

        switch(aliasName){
            // Tên sản phẩm
            case 'prodTitle':
                oldValue = {...prodTitle};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }else {
                    let checkSpace = validate.checkSpaceOfString(value);
                    if(checkSpace === 0){
                        oldValue.error = "Tên sản phẩm không thể bắt đầu bằng một khoảng trắng"
                    }else if(checkSpace === -1){
                        oldValue.error = "Tên sản phẩm không thể có 2 khoảng trắng liên tiếp";
                    }else if(lengthValue < 10){
                        oldValue.error = "Tên sản phẩm của bạn quá ngắn. Vui lòng nhập ít nhất 10 ký tự";
                    }else{
                        oldValue.error = "";
                    }
                }
                setProdTitle(oldValue);
                break;

            // Mô tả sản phẩm
            case 'prodDesc':
                oldValue = {...prodDesc};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }else {
                    let checkSpace = validate.checkSpaceOfString(value);
                    if(checkSpace === 0){
                        oldValue.error = "Mô tả sản phẩm không thể bắt đầu bằng một khoảng trắng"
                    }else if(checkSpace === -1){
                        oldValue.error = "Mô tả sản phẩm không thể có 2 khoảng trắng liên tiếp";
                    }else if(lengthValue < 100){
                        oldValue.error = "Mô tả sản phẩm của bạn quá ngắn. Vui lòng nhập ít nhất 100 ký tự";
                    }else{
                        oldValue.error = "";
                    }
                }

                setProdDesc(oldValue);
                break;
            
            // Giá sản phẩm
            case 'prodPrice':
                lengthValue = value.length;
                let tempValue = helper.removeCharacter(value, ',');

                if((tempValue / 1 || lengthValue === 0) && value[lengthValue - 1] !== ' '){
                    
                    oldValue = {...prodPrice};
                    oldValue.value = helper.convertPice(tempValue);

                    if(lengthValue === 0){
                        oldValue.error = "Không được để trống ô";
                    }else{
                        oldValue.error = "";
                    }
                    setProdPrice(oldValue);
                    
                    
                }
                
                break;
            
            // Mã kho hàng
            case 'prodSKU':
                oldValue = {...prodSKU};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }else{
                    oldValue.error = "";
                }

                setProdSKU(oldValue);
                break;

            case 'size':
                // Standardized string
                let indexHyphen = name.indexOf('-');
                let suffixString = name.slice(indexHyphen + 1);
                
                let nameSize = `prod${suffixString[0].toUpperCase()}${suffixString.slice(1)}`;
                oldValue = {
                    ...prodOther,
                    [nameSize]: {
                        value: value,
                        error: ''
                    }
                }
                setProdOther(oldValue)
                break;
            default:
                break;
        }
    }

    const onHandleBlur = (event) =>{
        const {name, value} = event.target;
        let oldValue = null;
        let lengthValue = 0; 

        switch(name){
            case 'prodTitle':
                oldValue = {...prodTitle};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }
                setProdTitle(oldValue);
                break;

            case 'prodDesc':
                

                oldValue = {...prodDesc};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }
                setProdDesc(oldValue);
                break;

            case 'prodPrice':
                oldValue = {...prodPrice};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }
                setProdPrice(oldValue);
                break;

            case 'prodSKU':
                oldValue = {...prodSKU};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Không được để trống ô";
                }
                setProdSKU(oldValue);
                break;
            default:
                break;
        }
    }

    const onHandleChooseItem = (event) =>{
        // Xử lý chọn danh mục sản phẩm
    }

    return (
        <>
            <div className="container__content add-product__container">
                <div className="add-product--left">
                    <div className="add-product__main-title">
                        <WidgetTitle
                            title = "Thêm 1 sản phẩm mới"
                            desc = "Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn."
                        />
                    </div>

                    <div className="add-product__content">
                        {/* Thông tin cơ bản */}
                        <ProductInfomationBasic
                            prodTitle = {prodTitle.value}
                            prodTitleError = {prodTitle.error}
                            onHandleFocus = {onHandleFocus}
                            onHandleChange = {onHandleChange}
                            onHandleBlur = {onHandleBlur}

                            prodDesc = {prodDesc.value}
                            prodDescError = {prodDesc.error}

                            listProdCate = {listProdCate}
                            onHandleChooseItem = {onHandleChooseItem}
                        />

                        {/* Thông tin bán hàng */}
                        <ProductInfoSale
                            prodPrice = {prodPrice.value}
                            prodPriceError = {prodPrice.error}

                            prodSKU = {prodSKU.value}
                            prodSKUError = {prodSKU.error}

                            onHandleFocus = {onHandleFocus}
                            onHandleChange = {onHandleChange}
                            onHandleBlur = {onHandleBlur}
                        />

                        {/* Quản lý hình ảnh */}
                        <ProductImage/>

                        {/* Thông tin khác */}
                        <ProudctOther
                           onHandleFocus = {onHandleFocus}
                           onHandleChange = {onHandleChange}
                           onHandleBlur = {onHandleBlur}
                           
                           prodWidth = {prodOther.prodWidth.value}
                           prodHeight = {prodOther.prodHeight.value}
                           prodWeight = {prodOther.prodWeight.value}
                           prodLength = {prodOther.prodLength.value}
                        />

                        {/* Control */}
                        <div className="widget-form__group add-product__control">
                            <div className="widget-form__row">
                                <div className="widget-form__input">
                                    <button className="btn-cancel">Hủy</button>
                                    <button className="btn-save">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add-product--right">
                    <div className="tabContent">
                        <div className="tabContent__item active">
                            <h4>Thông tin cơ bản</h4>
                        </div>
                        <div className="tabContent__item">
                            <h4>Thông tin bán hàng</h4>
                        </div>
                        <div className="tabContent__item">
                            <h4>Quản lý hình ảnh</h4>
                        </div>
                        <div className="tabContent__item">
                            <h4>Thông tin khác</h4>
                        </div>
                    </div>
                </div>
                
            </div>
            <Suggestion 
                isActive = {isActiveSuggest}
                onHandleCloseSuggest = {onHandleCloseSuggest}
            />
        </>
    )
}

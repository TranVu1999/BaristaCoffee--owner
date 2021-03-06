import React, {useState, useEffect} from 'react';
import './style.scss';
import WidgetTitle from './../../commons/components/WidgetTitle';
import Suggestion from '../../commons/components/Suggestion';

import * as validate from './../../commons/js/validate-input';
import * as helper from './../../commons/js/helper';
import ProductInfomationBasic from './../../features/AddProductPage/ProductInfoBasic';
import ProductInfoSale from './../../features/AddProductPage/ProductInfoSale';
import ProductImage from './../../features/AddProductPage/ProductImage';
import ProudctOther from './../../features/AddProductPage/ProductOther';

import api from './../../api'
import setHeader from './../../untils/setHeader'
import * as Helpers from './../../commons/js/helper'

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
    const [prodShortDesc, setProdShortDesc] = useState({
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
    const [listProdCate, setListProdCate] = useState([])
    const [keySearch, setKeySearch] = useState("")
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
    const [moreImage, setMoreImage] = useState([
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''},
        {url: ''}
    ])
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
    const [productCategoryId, setProductCategoryId] = useState("")


    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            setHeader(accessToken)

            api.get('product-category')
            .then(res =>{
                if(res.data.success && res.data.listProdCate){
                    let listProdCate = res.data.listProdCate.map(item => {
                        return {
                            title: item.title,
                            id: item._id
                        }
                        
                    })

                    setListProdCate(listProdCate)
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }, [])

    
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
            // T??n s???n ph???m
            case 'prodTitle':
                oldValue = {...prodTitle};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }else {
                    let checkSpace = validate.checkSpaceOfString(value);
                    if(checkSpace === 0){
                        oldValue.error = "T??n s???n ph???m kh??ng th??? b???t ?????u b???ng m???t kho???ng tr???ng"
                    }else if(checkSpace === -1){
                        oldValue.error = "T??n s???n ph???m kh??ng th??? c?? 2 kho???ng tr???ng li??n ti???p";
                    }else if(lengthValue < 10){
                        oldValue.error = "T??n s???n ph???m c???a b???n qu?? ng???n. Vui l??ng nh???p ??t nh???t 10 k?? t???";
                    }else{
                        oldValue.error = "";
                    }
                }
                setProdTitle(oldValue);
                break;

            // M?? t??? s???n ph???m
            case 'prodDesc':
                oldValue = {...prodDesc};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }else {
                    let checkSpace = validate.checkSpaceOfString(value);
                    if(checkSpace === 0){
                        oldValue.error = "M?? t??? s???n ph???m kh??ng th??? b???t ?????u b???ng m???t kho???ng tr???ng"
                    }else if(checkSpace === -1){
                        oldValue.error = "M?? t??? s???n ph???m kh??ng th??? c?? 2 kho???ng tr???ng li??n ti???p";
                    }else if(lengthValue < 100){
                        oldValue.error = "M?? t??? s???n ph???m c???a b???n qu?? ng???n. Vui l??ng nh???p ??t nh???t 100 k?? t???";
                    }else{
                        oldValue.error = "";
                    }
                }

                setProdDesc(oldValue);
                break;

            // M?? t??? s???n ph???m
            case 'prodShortDesc':
                oldValue = {...prodShortDesc};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }else {
                    let checkSpace = validate.checkSpaceOfString(value);
                    if(checkSpace === 0){
                        oldValue.error = "M?? t??? s???n ph???m kh??ng th??? b???t ?????u b???ng m???t kho???ng tr???ng"
                    }else if(checkSpace === -1){
                        oldValue.error = "M?? t??? s???n ph???m kh??ng th??? c?? 2 kho???ng tr???ng li??n ti???p";
                    }else if(lengthValue < 100){
                        oldValue.error = "M?? t??? s???n ph???m c???a b???n qu?? ng???n. Vui l??ng nh???p ??t nh???t 100 k?? t???";
                    }else{
                        oldValue.error = "";
                    }
                }

                setProdShortDesc(oldValue);
                break;
            
            // Gi?? s???n ph???m
            case 'prodPrice':
                lengthValue = value.length;
                let tempValue = helper.removeCharacter(value, ',');

                if((tempValue / 1 || lengthValue === 0) && value[lengthValue - 1] !== ' '){
                    
                    oldValue = {...prodPrice};
                    oldValue.value = helper.convertPice(tempValue);

                    if(lengthValue === 0){
                        oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                    }else{
                        oldValue.error = "";
                    }
                    setProdPrice(oldValue);
                    
                    
                }
                
                break;
            
            // M?? kho h??ng
            case 'prodSKU':
                oldValue = {...prodSKU};
                oldValue.value = value;
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
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

            case "keySearch":
                setKeySearch(value)
                break
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
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }
                setProdTitle(oldValue);
                break;

            case 'prodDesc':
                

                oldValue = {...prodDesc};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }
                setProdDesc(oldValue);
                break;

            case 'prodPrice':
                oldValue = {...prodPrice};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }
                setProdPrice(oldValue);
                break;

            case 'prodSKU':
                oldValue = {...prodSKU};
                lengthValue = value.length;

                if(lengthValue === 0){
                    oldValue.error = "Kh??ng ???????c ????? tr???ng ??";
                }
                setProdSKU(oldValue);
                break;
            default:
                break;
        }
    }

    const onHandleChooseItem = (item) =>{
        setProductCategoryId(item)
    }

    const onHandleGetImage = (imageInfo) =>{
        const {index, url} = imageInfo
        let newMoreImage = [...moreImage]
        newMoreImage[index].url = url
        console.log(newMoreImage)
        setMoreImage(newMoreImage)
    }

    const onHanldeSave = () =>{
        let alias = Helpers.removeSpaveRedundancy(prodTitle.value)
        alias = Helpers.createAlias(alias)

        let keyWords = Helpers.splitKeyWord(keySearch)
        keyWords = keyWords.map(item => item.trim())

        let listSale = listSaleRow.map(item => {
            return {
                from: item.from.value,
                to: item.to.value,
                price: item.price.value
            }
        })

        const data = {
            avatar: moreImage[0].url,
            moreImage: moreImage.slice(1).map(item => item.url),
            title: prodTitle.value,
            alias,
            productCategoryId,
            price: Helpers.removeCharacter(prodPrice.value, ',') ,
            shortDescription: prodShortDesc.value,
            detail: prodDesc.value,
            sku: prodSKU.value,
            keySearch: keyWords,
            height: prodOther.prodHeight.value,
            width: prodOther.prodWidth.value,
            length: prodOther.prodLength.value,
            weight: prodOther.prodWeight.value,
            listSale
        }

        api.post('product', data)
        .then(res =>{
            if(res.data.success){
                console.log("ok")
            }
        })
        .catch(err =>{
            console.log(err)
        }) 
    }

    const onHanldeAddSale = (listSaleRow) =>{
        setListSaleRow(listSaleRow)
    }

    return (
        <>
            <div className="container__content add-product__container">
                <div className="add-product--left">
                    <div className="add-product__main-title">
                        <WidgetTitle
                            title = "Th??m 1 s???n ph???m m???i"
                            desc = "Vui l??ng ch???n ng??nh h??ng ph?? h???p cho s???n ph???m c???a b???n."
                        />
                    </div>

                    <div className="add-product__content">
                        {/* Th??ng tin c?? b???n */}
                        <ProductInfomationBasic
                            prodTitle = {prodTitle.value}
                            prodTitleError = {prodTitle.error}
                            onHandleFocus = {onHandleFocus}
                            onHandleChange = {onHandleChange}
                            onHandleBlur = {onHandleBlur}

                            prodDesc = {prodDesc.value}
                            prodDescError = {prodDesc.error}

                            prodShortDesc = {prodShortDesc.value}
                            prodShortDescError = {prodShortDesc.error}

                            listProdCate = {listProdCate}
                            onHandleChooseItem = {onHandleChooseItem}
                        />

                        {/* Th??ng tin b??n h??ng */}
                        <ProductInfoSale
                            keySearch = {keySearch}

                            prodPrice = {prodPrice.value}
                            prodPriceError = {prodPrice.error}

                            prodSKU = {prodSKU.value}
                            prodSKUError = {prodSKU.error}

                            listSaleRow = {listSaleRow}

                            onHandleFocus = {onHandleFocus}
                            onHandleChange = {onHandleChange}
                            onHandleBlur = {onHandleBlur}
                            onAddSale = {onHanldeAddSale}
                        />

                        {/* Qu???n l?? h??nh ???nh */}
                        <ProductImage
                            onGetImage = {onHandleGetImage}
                            moreImage = {moreImage}
                        />

                        {/* Th??ng tin kh??c */}
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
                                    <button className="btn-cancel">H???y</button>
                                    <button 
                                        className="btn-save"
                                        onClick = {onHanldeSave}
                                    >L??u</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add-product--right">
                    <div className="tabContent">
                        <div className="tabContent__item active">
                            <h4>Th??ng tin c?? b???n</h4>
                        </div>
                        <div className="tabContent__item">
                            <h4>Th??ng tin b??n h??ng</h4>
                        </div>
                        <div className="tabContent__item">
                            <h4>Qu???n l?? h??nh ???nh</h4>
                        </div>
                        <div className="tabContent__item">
                            <h4>Th??ng tin kh??c</h4>
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

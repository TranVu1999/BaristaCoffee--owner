import React, {useState} from 'react';
import './style.scss';

import InputField from '../../../commons/components/InputField'
import * as Notify from '../../../commons/constant/Notify'

export default function ProfileText(props) {
    const [brand, setBrand] = useState({
        value: "",
        error: ""
    })
    const [description, setDiscription] = useState({
        value: "",
        error: ""
    })

    const onHandleChange = event =>{
        const {name, value} = event.target
        
        switch(name){
            case 'brand':
                setBrand({
                    value, error: ""
                })
                break

            case 'description':
                setDiscription({
                    value, error: ""
                })
                break

            default:    
                break
        }
    }

    const onHandleFocus = event =>{
        const {name, value} = event.target
        
        switch(name){
            case 'brand':
                setBrand({
                    value, error: ""
                })
                break

            case 'description':
                setDiscription({
                    value, error: ""
                })
                break

            default:    
                break
        }
    }

    const onHandleBlur = event =>{
        const {name, value} = event.target
        
        switch(name){
            case 'brand':
                if(!value){
                    setBrand({
                        value, error: Notify.IS_EMPTY
                    })
                }
                break

            case 'description':
                if(!value){
                    setDiscription({
                        value, error: Notify.IS_EMPTY
                    })
                }
                
                break

            default:    
                break
        }
    }

    const onUpdateImage = (typeImage) =>{
        if(props.onHandleUpdateImage){
            props.onHandleUpdateImage(typeImage)
        }
    }

    const onHandleSubmit = event =>{
        event.preventDefault()
        props.onSave({
            brand,
            description
        })
    }

    return (
        <div className="profile-text__content">
            <form 
                className="form shop-info"
                onSubmit = {onHandleSubmit}
            >
                <div className="form-group">
                    <label>Tên Shop</label>
                    <InputField
                        placeholder="Nhập tên shop của bạn"
                        rangeLimit = "120"
                        value = {brand.value}
                        onHandleChange = {onHandleChange}
                        name = "brand"
                        onHandleFocus = {onHandleFocus}
                        errMessage = {brand.error}
                        onHandleBlur = {onHandleBlur}
                    />
                </div>

                <div className="form-group col-2">
                    <div>
                        <label>Logo cửa hàng</label>
                        
                        <div 
                            className="input-thumb"
                            style = {{backgroundImage: `url(${props.brandImage})`}}
                        >
                            {!props.brandImage ? 
                                (
                                    <div className="input-thumb__label">Thêm hình ảnh</div> 
                                ): ""
                            }
                            

                            <div className="input-thumb__control">
                                <span 
                                    className="input-thumb__control--item"
                                    onClick = {() => onUpdateImage("brandImage")}
                                >Tải hình ảnh</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Mô tả hình ảnh và video</label>
                        
                        <div 
                            className="input-thumb"
                            style = {{backgroundImage: `url(${props.descImage})`}}
                        >
                            {!props.descImage ? 
                                (
                                    <div className="input-thumb__label">
                                        Thêm hình ảnh và Video
                                    </div>
                                ): ""
                            }
                            

                            <div className="input-thumb__control">
                                <span 
                                    className="input-thumb__control--item"
                                    onClick = {() => onUpdateImage("descImage")}
                                >Tải hình ảnh</span>
                                <span className="input-thumb__control--item">Tải Video</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="form-group">
                    <label>Mô tả Shop</label>
                    <div className="input-control">
                        <textarea 
                            rows="5" 
                            cols="32" 
                            placeholder="Nhập mô tả hoặc thông tin về Shop của bạn tại đây"
                            name="description"
                            value = {description.value}
                            onChange = {onHandleChange}
                        >
                        </textarea>
                    </div>
                </div>

                <div className="form-group">
                    <button>Lưu</button>
                </div>
            </form>
        </div>
    )
}

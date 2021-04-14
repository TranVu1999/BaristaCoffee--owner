import React, {useState} from 'react';
import './style.scss';

function ImageInput(props) {
    const [indexActiveTab, setIndexActiveTab] = useState(0);
    const [linkImage, setLinkImage] = useState('')

    const onHandleChooseTab = indexTab =>{
        setIndexActiveTab(indexTab);
    }

    const onHandleCloseImageInput = () =>{
        props.onHandleCloseImageInput();
    }

    const onHandleGetImage = () =>{
        props.onHandleGetImage(linkImage)
        props.onHandleCloseImageInput();
    }

    const onHandleChange = (event) =>{
        const value = event.target.value;
        setLinkImage(value);
    }

    return (
        <div className="image-input__content">
            <div className="image-input__box">
                <button 
                    className="image-input__close"
                    onClick = {onHandleCloseImageInput}
                ><span aria-hidden="true" class="icon_close_alt2"></span></button>
                <div className="image-input__tab">
                    <div 
                        className = {indexActiveTab === 0 ? "tab--item active" : "tab--item"}
                        onClick = {() =>{onHandleChooseTab(0)}}
                    >Upload</div>
                    <div 
                        className = {indexActiveTab === 1 ? "tab--item active" : "tab--item"}
                        onClick = {() => onHandleChooseTab(1)}
                    >Embed link</div>
                </div>
                <div className="image-input__control">
                    {
                        indexActiveTab === 0 ? (
                            <>
                                <button>Chọn dưới máy tính</button>
                                <span>The maximum size per file is 5 MB</span>
                            </>
                        ) : (
                            <>
                                <input 
                                    type="text" 
                                    placeholder="Paste the image link..."
                                    onChange = {onHandleChange}
                                    value = {linkImage}
                                />
                                <button
                                    onClick = {onHandleGetImage}
                                >Nhúng hình ảnh</button>
                                <span>Works with any iamge from the web</span>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageInput

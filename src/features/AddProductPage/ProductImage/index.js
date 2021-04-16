import React, {useState} from 'react';
import ImageInput from '../../Layout/ImageInput';
import './style.scss';

function ProductImage(props) {
    const [isOpenImageInput, setIsOpenImageInput] = useState(false)
    const [indexActiveImage, setIndexActiveImage] = useState(0)


    const onHandleCloseImageInput = () =>{
        setIsOpenImageInput(false)
    }

    const onHandleOpenImageInput = (imageIndex) =>{
        setIndexActiveImage(imageIndex)
        setIsOpenImageInput(true)
    }

    const onHandleGetImage = (linkImage) =>{
        props.onGetImage({
            index: indexActiveImage,
            url: linkImage
        })
    }

    return (
        <>
            <div className="widget-form__group">
                <h4 className="title">Quản lý hình ảnh</h4>

                <div className="widget-form__row large-input">
                    <div className="widget-form__label">Hình ảnh sản phẩm</div>

                    <div className="widget-form__input">
                        <div className="input-control add-img">
                            <div className="thumbnail--box">
                                <div 
                                    className="thumbnail--img"
                                    onClick = {() => onHandleOpenImageInput(0)}
                                    style = {{backgroundImage: `url(${props.moreImage[0].url})`}}
                                >
                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path><path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path></g></svg>
                                </div>
                                <div className="thumbnail--text">Avatar</div>
                            </div>

                            <div className="thumbnail--box">
                                <div 
                                    className="thumbnail--img"
                                    onClick = {() => onHandleOpenImageInput(1)}
                                    style = {{backgroundImage: `url(${props.moreImage[1].url})`}}
                                >
                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path><path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path></g></svg>
                                </div>
                                <div className="thumbnail--text">Hình ảnh 1</div>
                            </div>

                            <div className="thumbnail--box">
                                <div 
                                    className="thumbnail--img"
                                    onClick = {() => onHandleOpenImageInput(2)}
                                    style = {{backgroundImage: `url(${props.moreImage[2].url})`}}
                                >
                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path><path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path></g></svg>
                                </div>
                                <div className="thumbnail--text">Hình ảnh 2</div>
                            </div>

                            <div className="thumbnail--box">
                                <div 
                                    className="thumbnail--img"
                                    onClick = {() => onHandleOpenImageInput(3)}
                                    style = {{backgroundImage: `url(${props.moreImage[3].url})`}}
                                >
                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path><path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path></g></svg>
                                </div>
                                <div className="thumbnail--text">Hình ảnh 3</div>
                            </div>
                            
                            <div className="thumbnail--box">
                                <div 
                                    className="thumbnail--img"
                                    onClick = {() => onHandleOpenImageInput(4)}
                                    style = {{backgroundImage: `url(${props.moreImage[4].url})`}}
                                >
                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path><path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path></g></svg>
                                </div>
                                <div className="thumbnail--text">Hình ảnh 4</div>
                            </div>

                            <div className="thumbnail--box">
                                <div 
                                    className="thumbnail--img"
                                    onClick = {() => onHandleOpenImageInput(5)}
                                    style = {{backgroundImage: `url(${props.moreImage[5].url})`}}
                                >
                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path><path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path></g></svg>
                                </div>
                                <div className="thumbnail--text">Hình ảnh 5</div>
                            </div>
                            
                        </div>
                    </div>
                </div>                    
            </div>

            {
                isOpenImageInput ? (
                    <ImageInput
                        onHandleCloseImageInput = {onHandleCloseImageInput}
                        onHandleGetImage = {onHandleGetImage}
                    />
                ) : ""
            }
            
        </>
    )
}

export default ProductImage

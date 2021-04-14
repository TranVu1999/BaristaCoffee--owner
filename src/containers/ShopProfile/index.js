import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

import WidgetTitle from './../../commons/components/WidgetTitle'
import ShopListInfo from './../../commons/components/ShopListInfo';
import ImageInput from '../../features/Layout/ImageInput'
import ProfileBasic from './../../features/ShopProfilePage/ProfileBasic'
import ProfileText from './../../features/ShopProfilePage/ProfileText'

import api from './../../api'
import setHeader from './../../untils/setHeader'
import * as Helpers from './../../commons/js/helper'


ShopProfilePage.propTypes = {
    
};


function ShopProfilePage(props) {
    const [isOpenImageInput, setIsOpenImageInput] = useState(false)
    const [avatar, setAvatar] = useState('https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e')
    const [coverImage, setCoverImage] = useState('https://i.pinimg.com/originals/e8/07/57/e807579edb93300913645941f251c97d.jpg')
    const [typeImageUpdate, setTypeImageUpdate] = useState('')
    const [brandImage, setBrandImage] = useState('')
    const [descImage, setDescImage] = useState('')

    const onHandleCloseImageInput = () =>{
        setIsOpenImageInput(false)
    }

    const onHandleGetImage = (linkImg) =>{

        switch(typeImageUpdate){
            case "avatar":
                setAvatar(linkImg)
                break

            case "coverImage":
                setCoverImage(linkImg)
                break

            case "brandImage":
                setBrandImage(linkImg)
                break

            case "descImage":
                setDescImage(linkImg)
                break

            default: 
                break
        }
    }

    const onHandleUpdateImage = (typeImage) =>{
        setTypeImageUpdate(typeImage)
        setIsOpenImageInput(true)
    }

    const onHanldeSave = (shopText) =>{
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            let alias = Helpers.removeSpaveRedundancy(shopText.brand.value)
            alias = Helpers.createAlias(alias)

            const data = {
                brand: shopText.brand.value,
                logo: brandImage,
                description: shopText.description.value,
                coverImage,
                descriptionImage: [descImage],
                avatar,
                alias
            }
            
            setHeader(accessToken)
            api.post('store/register', data)
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
            
        }
        


        
    }

    return (
        <div className="container__content shop-profile__container">
            <WidgetTitle
                title = "Hồ Sơ Shop"
                desc = "Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn"
            />

            <div className="shop-profile__content">
                <div className="shop-profile--left">
                    <ProfileBasic
                        onHandleUpdateImage = {onHandleUpdateImage}
                        avatar = {avatar}
                        coverImage = {coverImage}
                    >
                        <ShopListInfo/>
                    </ProfileBasic>
                </div>

                <div className="shop-profile--right">
                    <ProfileText
                        onHandleUpdateImage = {onHandleUpdateImage}
                        brandImage = {brandImage}
                        descImage = {descImage}
                        onSave = {onHanldeSave}
                    />
                    
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
            
        </div>
    );
}

export default ShopProfilePage;
import React, {useState, useEffect} from 'react';
import './style.scss'

import WidgetTitle from './../../commons/components/WidgetTitle'
import ShopListInfo from './../../commons/components/ShopListInfo';
import ImageInput from '../../features/Layout/ImageInput'
import ProfileBasic from './../../features/ShopProfilePage/ProfileBasic'
import ProfileText from './../../features/ShopProfilePage/ProfileText'

import api from './../../api'
import * as Helpers from './../../commons/js/helper'

import setHeader from './../../untils/setHeader'
import * as Notify from '../../commons/constant/Notify'


function ShopProfilePage(props) {
    const [isOpenImageInput, setIsOpenImageInput] = useState(false)
    const [avatar, setAvatar] = useState('https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e')
    const [coverImage, setCoverImage] = useState('https://i.pinimg.com/originals/e8/07/57/e807579edb93300913645941f251c97d.jpg')
    const [typeImageUpdate, setTypeImageUpdate] = useState('')
    const [brandImage, setBrandImage] = useState('')
    const [descImage, setDescImage] = useState('')
    const [brand, setBrand] = useState({
        value: "",
        error: ""
    })
    const [description, setDescription] = useState({
        value: "",
        error: ""
    })
    const [isUpdate, setIsUpdate] = useState(false)
    

    useEffect(() =>{
        const accessToken = localStorage.getItem('accessToken')
        console.log({accessToken})
        if(accessToken){
            setHeader(accessToken)

            api.get('store')
            .then(res =>{
                if(res.data.success){
                    const {
                        descriptionImage,
                        brand,
                        logo,
                        avatar,
                        description,
                        coverImage
                    } = res.data.store

                    setAvatar(avatar)
                    setCoverImage(coverImage)
                    setBrandImage(logo)
                    setDescImage(descriptionImage)
                    setBrand({
                        value: brand,
                        error: ""
                    })
                    setDescription({
                        value: description,
                        error: ""
                    })
                    setIsUpdate(true)
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }, [])

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

    const onHanldeSave = () =>{
        
        let alias = Helpers.removeSpaveRedundancy(brand.value)
        alias = Helpers.createAlias(alias)

        const data = {
            brand: brand.value,
            logo: brandImage,
            description: description.value,
            coverImage,
            descriptionImage: [descImage],
            avatar,
            alias
        }
        
        if(isUpdate){
            api.put('store/update', data)
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }else{
            api.post('store/register', data)
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }
        
        
    }

    const onHandleChange = event =>{
        const {name, value} = event.target
        
        switch(name){
            case 'brand':
                setBrand({
                    value, error: ""
                })
                break

            case 'description':
                setDescription({
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
                setDescription({
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
                    setDescription({
                        value, error: Notify.IS_EMPTY
                    })
                }
                
                break

            default:    
                break
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
                        brand = {brand}
                        description = {description}

                        onHandleBlur = {onHandleBlur}
                        onHandleChange = {onHandleChange}
                        onHandleFocus = {onHandleFocus}
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
import React from 'react';
import ShopListInfo from '../../../commons/components/ShopListInfo';
import './style.scss';

import PropTypes from 'prop-types'

ProfileBasic.prototype = {
    onHandleUpdateImage: PropTypes.func,
    avatar: PropTypes.string,
    coverImage: PropTypes.string,
}

ProfileBasic.defaultProps = {
    onHandleUpdateImage: null
}

export default function ProfileBasic(props) {

    const onUpdateImage = (typeImage) =>{
        if(props.onHandleUpdateImage){
            props.onHandleUpdateImage(typeImage)
        }
    }

    const {avatar, coverImage} = props

    return (
        <div className="profile-basic__content">
            <div 
                className="cover-img"
                style = {{backgroundImage: `url(${coverImage})`}}
            >
                <div 
                    className="sub-img"
                    onClick = {() =>{onUpdateImage("avatar")}}
                >
                    <img src={avatar} alt="avatar"/>
                </div>
                <button 
                    className="add-cover-img"
                    onClick = {() => onUpdateImage("coverImage")}
                >Sửa ảnh bìa</button>
            </div>

            {props.children}
        </div>
    )
}

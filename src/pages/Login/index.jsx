import React from 'react';
import './style.scss'
import Header from '../../features/Layout/Header';
import HeaderComback from '../../commons/components/HeaderComback';
import HeaderContact from '../../commons/components/HeaderContact';
import FormLogin from '../../features/Login/FormLogin';

function LoginPage(props) {
    return (
        <div className="auth-page">
            <Header
                headerComback = {<HeaderComback/>}
                headerContact = {<HeaderContact/>}
            />

            <div className="auth__content">
                <div className="auth--left">
                    <div className="auth__text">
                        <h2>Bán hàng chuyên nghiệp</h2>
                        <p>Quản lý shop của bạn một cách hiệu quả hơn trên CoffeeShop - Kênh Người bán</p>
                    </div>
                    <img src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/modules/account/image/login-img.9347138.png" alt="logo shop"/>
                </div>
                <div className="auth--right">
                    <FormLogin/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
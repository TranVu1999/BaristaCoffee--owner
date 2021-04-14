import React from 'react';
import './style.scss';

export default function HeaderAccount() {
    return (
        <div className = "header__account">
            <div className = "d-flex-start header__account--label">
                <img src="https://cf.shopee.vn/file/a480cda31decdcf26ea8b92af927328e" alt="avatar"/>
                <span>tranvudpqn123</span>
            </div>
            <ul className = "toggle-menu">
                <li><a href="/#"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M23.9 12.9l-1.6-1.6 6.2-6.2 1.6 1.6-6.2 6.2zM32 4.8l-1.6-1.6-1 1L31 5.8l1-1zM19.7 15.6l2.6-1.4-1.3-1.3-1.3 2.7zm8.6-4v16.3c0 .9-.7 1.6-1.6 1.6H1.6c-.9 0-1.6-.7-1.6-1.6V6.2c0-.9.7-1.6 1.6-1.6h24.2l-2 2H2v11.9l5.6-3.8 7.2 6.1 6.7-3 4.7 4.1v-8.4l2.1-1.9zm-2 15.9v-2.9l-5.1-4.4-6.7 3-7-6L2 21v6.5h24.3z"></path></svg>Hồ Sơ Shop</a></li>
                <li><a href="/#"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.77 15.42a.93.93 0 0 1 .21.52 1 1 0 0 1-.26.62l-8.07 8a1 1 0 1 1-1.38-1.38L28.62 17H5a1 1 0 0 1-1-1 1 1 0 0 1 1-1h23.6l-6.32-6.33a1 1 0 1 1 1.38-1.38s8.08 8.09 8.11 8.13zM16 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4h-2z" fill-rule="evenodd"></path></svg>Đăng Xuất</a></li>
            </ul>
        </div>
    )
}

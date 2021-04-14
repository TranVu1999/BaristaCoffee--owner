import React from 'react';
import './style.scss';

export default function ShopListInfo() {
    return (
        <div className="shop-list-info">
            <div className="shop-info__item">
                <div className="shop-info--left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3 21v2c0 .6.5 1 1 1h24c.6 0 1-.5 1-1v-2H3zM29 4c0-.6-.5-1-1-1H4c-.4 0-1 .5-1 1v15h26V4zM12 29h8v-3h-8v3zm10-3v3h2v2H8v-2h2v-3H3c-1 0-2-1-2-2V2.9C1 1.9 1.9 1 2.9 1h26.2c1 0 1.9.9 1.9 1.9v20.7c0 1-1 2.4-2 2.4h-7z"></path></svg> Giao diện Shop trên máy tính
                </div>
                <div className="shop-info--right">
                    <a href="/#">Xem <span aria-hidden="true" class="arrow_carrot-right"></span></a>
                </div>
            </div>

            <div className="shop-info__item">
                <div className="shop-info--left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path></svg> Sản phẩm
                </div>
                <div className="shop-info--right">
                    <a href="/#">0 <span aria-hidden="true" class="arrow_carrot-right"></span></a>
                </div>
            </div>

            <div className="shop-info__item">
                <div className="shop-info--left">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32">
                        <path d="M0 19V6c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v13c0 3.3-2.7 5-6 5H14l-8 8v-8c-3.3 0-6-1.7-6-5zm26 3c2.2 0 4-.8 4-3V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v13c0 2.2 1.8 3 4 3h2v5l5-5h13zM8 22"></path>
                        <circle cx="8" cy="12" r="2"></circle>
                        <circle cx="16" cy="12" r="2"></circle>
                        <circle cx="24" cy="12" r="2"></circle>
                    </svg> Tỉ lệ phản hồi
                </div>
                <div className="shop-info--right">
                    <span>57%</span>
                </div>
            </div>

            <div className="shop-info__item">
                <div className="shop-info--left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.83l3.18 7 .48 1.06 1.16.11 6.76.61L22.27 19l-.75.75.2 1 1.38 7.19-6.1-3.72-1-.64-1 .64-6.15 3.7 1.42-7.16.21-1-.76-.76-5.31-5.39 6.77-.61 1.16-.11.48-1.06 3.18-7M16 0l-5 11-11 1 8.3 8.37L6 32l10-6.07L26 32l-2.31-11.63L32 12l-11-1-5-11z"></path></svg> Đánh giá shop
                </div>
                <div className="shop-info--right">
                    <span>0</span>
                </div>
            </div>

            <div className="shop-info__item">
                <div className="shop-info--left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24.2 3.7h-2.1v-.8h-2.5C19.2 1.3 17.7 0 16 0c-1.8 0-3.3 1.3-3.7 2.9H9.8v.8h-2c-3.2 0-5.9 2.6-5.9 5.9v16.5c0 3.3 2.6 5.9 5.9 5.9h16.5c3.2 0 5.9-2.6 5.9-5.9V9.6c-.1-3.2-2.7-5.9-6-5.9zm-12.7 1h2.4v-.9c0-1.1.9-2 2-2s2 .9 2 2v.9h2.4v4.1h-8.9V4.7zm16.4 21.4c0 2-1.6 3.6-3.6 3.6H7.8c-2 0-3.6-1.6-3.6-3.6V9.6c0-2 1.6-3.6 3.6-3.6h2v4.5h12.4V6h2.1c2 0 3.6 1.6 3.6 3.6v16.5zM15.5 25c-.2 0-.4-.1-.5-.2L10.1 21c-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1l4.1 3.3 6.3-9.8c.3-.4.8-.5 1.2-.3.4.3.5.8.3 1.2l-6.8 10.7c-.1.2-.3.4-.6.4-.1-.2-.1-.2-.2-.2z"></path></svg> Tỉ lệ đơn không thành công
                </div>
                <div className="shop-info--right">
                    <a href="/#">0.00% <span aria-hidden="true" class="arrow_carrot-right"></span></a>
                </div>
            </div>
        </div>
    )
}

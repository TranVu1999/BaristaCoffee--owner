import React from 'react';
import ReadmoreLink from '../../../commons/components/ReadmoreLink';
import SidebarRightItem from '../../../commons/components/SidebarRightItem';
import './style.scss';

export default function SidebarRight() {
    return (
        <div className="sidebar--right__content">
            <div className="sidebar--right__title">
                <h4>Thông báo</h4>
                <ReadmoreLink link="/#"/>
            </div>
            <div className="sidebar--right__notify">
                <SidebarRightItem 
                    title="Nói không với hẹn ngày lấy hàng!"
                    text=" Nhằm nâng cao chất lượng dịch vụ và trải nghiệm tốt nhất cho người mua, Shop cần giao hàng đúng ngày đã hẹn với đơn vị vận chuyển (ĐVVC)."
                />
                <SidebarRightItem 
                    title="Nói không với hẹn ngày lấy hàng!"
                    text=" Nhằm nâng cao chất lượng dịch vụ và trải nghiệm tốt nhất cho người mua, Shop cần giao hàng đúng ngày đã hẹn với đơn vị vận chuyển (ĐVVC)."
                />
                <SidebarRightItem 
                    title="Nói không với hẹn ngày lấy hàng!"
                    text=" Nhằm nâng cao chất lượng dịch vụ và trải nghiệm tốt nhất cho người mua, Shop cần giao hàng đúng ngày đã hẹn với đơn vị vận chuyển (ĐVVC)."
                />
            </div>
        </div>
    )
}

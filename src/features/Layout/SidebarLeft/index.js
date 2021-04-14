import React, { useState } from 'react';
import SidebarLeftItem from '../../../commons/components/SidebarLeftItem';
import SidebarSubMenuItem from '../../../commons/components/SidebarSubMenuItem';
import './style.scss';

export default function SidebarLeft() {
    const [activeSidebarItem, setActiveSidebarItem] = useState([
        {isActive: false},
        {isActive: false},
        {isActive: false},
        {isActive: false},
        {isActive: false},
        {isActive: false},
        {isActive: false},
        {isActive: false},
        {isActive: false},
    ]);

    const onHandleActive = (indexActive) =>{
        let activeSidebarItemTemp = [...activeSidebarItem];
        activeSidebarItemTemp[indexActive].isActive =  !activeSidebarItemTemp[indexActive].isActive;
        setActiveSidebarItem(activeSidebarItemTemp);
    }

    return (
        <div className="sidebar--left__content">
            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/c15905d5a6284687c4a6ad00d0feb511" 
                span="Vận Chuyển"
                isActive={activeSidebarItem[0].isActive}
                onHandleActive = {() => onHandleActive(0)}
            >
                <SidebarSubMenuItem span="Quản lý vận chuyển" link="/#" active={true}/>
                <SidebarSubMenuItem span="Giao hàng loạt" link="/#"/>
                <SidebarSubMenuItem span="Cài đặt vận chuyển" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/f82f8ccb649afcdf4f07f1dd9c41bcb0" 
                span="Quản lý đơn hàng"
                isActive={activeSidebarItem[1].isActive}
                onHandleActive = {() => onHandleActive(1)}
            >
                <SidebarSubMenuItem span="Tất cả" link="/#"/>
                <SidebarSubMenuItem span="Đơn hủy" link="/#"/>
                <SidebarSubMenuItem span="Trả hàng / Hoàn tiền" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/3fa3bdb20eb201ae3f157ee8d11a39d5" 
                span="Quản lý sản phẩm"
                isActive={activeSidebarItem[2].isActive}
                onHandleActive = {() => onHandleActive(2)}
            >
                <SidebarSubMenuItem span="Tất cả sản phẩm" link="/#"/>
                <SidebarSubMenuItem span="Thêm sản phẩm" link="add-product"/>
                <SidebarSubMenuItem span="Sản phẩm vi phạm" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/2f9d62dd7e037c22608ac75dfb84a409" 
                span="Kênh Marketing"
                isActive={activeSidebarItem[3].isActive}
                onHandleActive = {() => onHandleActive(3)}
            >
                <SidebarSubMenuItem span="Kênh Marketing" link="/#"/>
                <SidebarSubMenuItem span="Quảng cáo Barista" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/f9e8756bcf783fe1783bf59577fdb263" 
                span="Tài Chính"
                isActive={activeSidebarItem[4].isActive}
                onHandleActive = {() => onHandleActive(4)}
            >
                <SidebarSubMenuItem span="Doanh Thu" link="/#"/>
                <SidebarSubMenuItem span="Ví Barista" link="/#"/>
                <SidebarSubMenuItem span="Tài khoản ngân hàng" link="/#"/>
                <SidebarSubMenuItem span="Thiết lập thanh toán" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/09759afab8ae066ca5e1630bc19133a1" 
                span="Dữ liệu"
                isActive={activeSidebarItem[5].isActive}
                onHandleActive = {() => onHandleActive(5)}
            >
                <SidebarSubMenuItem span="Phân tích bán hàng" link="/#"/>
                <SidebarSubMenuItem span="Hiệu quả hoạt động" link="/#"/>
                <SidebarSubMenuItem span="Shop yêu thích" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/9f2ae273250a1a723d7d8892c9584c6d" 
                span="Chăm sóc khách hàng"
                isActive={activeSidebarItem[6].isActive}
                onHandleActive = {() => onHandleActive(6)}
            >
                <SidebarSubMenuItem span="Trợ lý chat" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/6b1ffcde1ff12621088110f419a5283a" 
                span="Quản lý shop"
                isActive={activeSidebarItem[7].isActive}
                onHandleActive = {() => onHandleActive(7)}
            >
                <SidebarSubMenuItem span="Đánh giá shop" link="/#"/>
                <SidebarSubMenuItem span="Hồ sơ shop" link="profile"/>
                <SidebarSubMenuItem span="Trang trí shop" link="/#"/>
                <SidebarSubMenuItem span="Danh mục của shop" link="/#"/>
                <SidebarSubMenuItem span="Báo cáo của tôi" link="/#"/>
            </SidebarLeftItem>

            <SidebarLeftItem 
                icon="https://cf.shopee.vn/file/789f116a0778cf137519cadb1165d70f" 
                span="Thiết lập shop"
                isActive={activeSidebarItem[8].isActive}
                onHandleActive = {() => onHandleActive(8)}
            >
                <SidebarSubMenuItem span="Địa chỉ" link="/#"/>
                <SidebarSubMenuItem span="Thiết lập shop" link="/#"/>
                <SidebarSubMenuItem span="Tài khoản" link="/#"/>
            </SidebarLeftItem>
        </div>
    )
}

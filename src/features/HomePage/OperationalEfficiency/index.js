import React, {useState} from 'react';
import './style.scss';
import WidgetTitle from './../../../commons/components/WidgetTitle';

export default function OperationalEfficiency() {
    const [activeTab, setIndexTab] = useState([
        {isOpen: true, linePos: 0, lineWidth: 186},
        {isOpen: false, linePos: 186, lineWidth: 145},
        {isOpen: false, linePos: 331, lineWidth: 172},
        {isOpen: false, linePos: 503, lineWidth: 235}
    ]);
    
    const onChooseTab = (indexTab) =>{
        let indexTabTemp = [...activeTab].map(item =>{
            let itemTemp = {...item, isOpen: false};
            return itemTemp;
        });
        indexTabTemp[indexTab].isOpen = true;
        setIndexTab(indexTabTemp);
    }

    const getWidthLineTab = () =>{
        return activeTab.find(item => item.isOpen).lineWidth;
    }

    const getPosLineTab = () =>{
        return activeTab.find(item => item.isOpen).linePos;
    }

    return (
        <div className="operational-efficiency__content">
            <WidgetTitle 
                title = "Hiệu quả hoạt động" 
                desc = "Bảng Hiệu Quả Hoạt Động giúp Người Bán hiểu rõ hơn về hoạt động buôn bán của Shop"
                link = "/#"
            />

            <div className="operational-efficiency__widget">
                <div className="operational-efficiency__tab">
                    <div 
                        className = {activeTab[0].isOpen ? "operational-efficiency__tab--item active" : "operational-efficiency__tab--item"}
                        onClick = {() => onChooseTab(0)}
                    >
                        Các sản phẩm vi phạm
                    </div>
                    <div 
                        className = {activeTab[1].isOpen ? "operational-efficiency__tab--item active" : "operational-efficiency__tab--item"}
                        onClick = {() => onChooseTab(1)}
                    >
                        Quản lý đơn hàng
                    </div>
                    <div 
                        className = {activeTab[2].isOpen ? "operational-efficiency__tab--item active" : "operational-efficiency__tab--item"}
                        onClick = {() => onChooseTab(2)}
                    >
                        Chăm sóc khách hàng
                    </div>
                    <div 
                        className = {activeTab[3].isOpen ? "operational-efficiency__tab--item active" : "operational-efficiency__tab--item"}
                        onClick = {() => onChooseTab(3)}
                    >
                        Mức độ hài lòng của người mua
                    </div>
                    
                    <div 
                        className="operational-efficiency__tab--line"
                        style={{
                            width: getWidthLineTab() + "px",
                            left: getPosLineTab() + "px"
                        }}
                    ></div>
                </div>
                <div className="operational-efficiency__table">
                    
                </div>
            </div>
        </div>
    )
}

import React, {useState} from 'react';
import './style.scss';
import WidgetTitle from '../../../commons/components/WidgetTitle';

export default function Marketing() {
    const [activeTab, setIndexTab] = useState([true, false]);
    
    const onChooseTab = (indexTab) =>{
        let indexTabTemp = activeTab.map((item, index) =>{
            return index === indexTab
        });
        
        setIndexTab(indexTabTemp);
    }

    return (
        <div className="marketing__content">
            <WidgetTitle 
                title = "Kênh Marketing" 
                desc = "Đăng ký chương trình khuyến mãi"
                link = "/#"
            />

            <div className="marketing__widget">
                <div className="marketing__tab">
                    <div 
                        className = {activeTab[0] ? "marketing__tab--item active" : "marketing__tab--item"}
                        onClick = {() => onChooseTab(0)}
                    >
                        Chương trình giảm giá sản phẩm
                    </div>
                    <div 
                        className = {activeTab[1] ? "marketing__tab--item active" : "marketing__tab--item"}
                        onClick = {() => onChooseTab(1)}
                    >
                        Chương trình mã giảm giá
                    </div>
                    <div 
                        className="marketing__tab--line"
                        style={{
                            width: activeTab[0] ? "258px" : "199px",
                            left: activeTab[0] ? "0" : "258px"
                        }}
                    ></div>
                </div>
                <div className="marketing__table">
                    
                </div>
            </div>
        </div>
    )
}

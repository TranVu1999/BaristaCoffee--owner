import React from 'react';
import './style.scss';

export default function Suggestion(props) {
    const onHandleCloseSuggest = () =>{
        props.onHandleCloseSuggest();
    }
    
    return (
        <div 
            className = {props.isActive ? "suggestion-box active" : "suggestion-box"}
        >
            <button 
                className="suggestion__control"
                onClick = {onHandleCloseSuggest}
            ><span aria-hidden="true" class="arrow_carrot-down_alt2"></span></button>
            <div className="suggestion__main-title">Gợi ý</div>
            <div className="suggestion__sub-title">Mô tả sản phẩm</div>
            <div className="suggestion__main-content">
                Tham khảo mô tả sản phẩm theo quy định theo từng ngành hàng tại đây
            </div>
            <div className="suggestion__sub-content">
                Tối thiểu 1 ký tự và tối đa 3000 ký tự (5000 ký tự đối với Barista mall)
            </div>
        </div>
    )
}

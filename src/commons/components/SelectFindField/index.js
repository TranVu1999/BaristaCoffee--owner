
import React, {useState, useEffect} from 'react';
import './style.scss';

export default function SelectFindField(props) {
    const [isOpenListSelect, setIsOpenSelect] = useState(false);
    const [originalListOption, setOriginalListOption] = useState(props.listOption);
    const [showListOption, setShowListOption] = useState(props.listOption);
    const [keySearch, setKeySearch] = useState("");
    const [resSpan, setResSpan] = useState("");

    useEffect(() =>{
        setOriginalListOption(props.listOption)
        setShowListOption(props.listOption)
    })

    

    const onOpenListSelect = () =>{
        setIsOpenSelect(true);
    }

    const onCloseListSelect = () =>{
        let oldIsOpenListSelect = isOpenListSelect;
        setIsOpenSelect(!oldIsOpenListSelect);
    }

    const onHandleChooseItem = (item) =>{
        props.onHandleChooseItem(item.id);
        setResSpan(item.title);
        setIsOpenSelect(false);
    }

    const renderListOption = () =>{
        return showListOption.map((item, index) =>{
            return (
                <div 
                    key = {index} 
                    className="option__item"
                    onClick = {() => onHandleChooseItem(item)}
                >{item.title}</div>
            )
        })
    }

    const onHandleChange = event =>{
        const value = event.target.value;
        setKeySearch(value);

        let resList = [];
        resList = originalListOption.filter(item =>{
            return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        })
        setShowListOption(resList);
    }

    return (
        <div className="select-find__container">
            <div 
                className="select-span"
                onClick = {onOpenListSelect}
            >
                Ví dụ: Barista Coffee
            </div>

            <div 
                className = {isOpenListSelect ? "select-option active" : "select-option close"}
            >
                <div 
                    className="select-res"
                    onClick = {onCloseListSelect}
                >
                    {resSpan === "" ? "Ví dụ: Barista Coffee" : resSpan}
                    
                </div>

                <div className="select-find">
                    <div className="find-box">
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm danh mục sản phẩm"
                            value = {keySearch}
                            onChange = {onHandleChange}
                        />
                        <span aria-hidden="true" class="icon_search"></span>
                    </div>
                    <div className="list-option">
                        {renderListOption()}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

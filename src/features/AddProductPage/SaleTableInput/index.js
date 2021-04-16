import React, {useState} from 'react'
import './style.scss';
import InputField from './../../../commons/components/InputField';

export default function SaleTableInput(props) {
    const [listSaleRow, setListSaleRow] = useState([...props.listSaleRow]);

    const [errorMessage, setErrorMessage] = useState({
        rowIndex: -1,
        content: ""
    });

    const getSaleRowInfo = (nameRow) =>{
        // Get id
        const indexOfHyphen = nameRow.indexOf('-');
        const saleRowId = nameRow.substring(indexOfHyphen + 1);
        // Get name
        const nameOfInput = nameRow.substring(0, indexOfHyphen);
        // Get type
        const isFrom = nameRow.indexOf('from') !== -1;

        return {saleRowId, nameOfInput, isFrom}
    }

    const updateFromOfSaleRow = (listSaleRow, index) =>{

        let newListSaleRow = [...listSaleRow];
        let lengthListSaleRow = newListSaleRow.length;

        for(let i = index + 1; i < lengthListSaleRow; i++){
            let previousToValue = parseInt(newListSaleRow[i - 1].to.value) || 0;
            let previousFromValue = parseInt(newListSaleRow[i - 1].from.value) || 0;

            let nextFromValue = previousToValue > previousFromValue ? previousToValue : previousFromValue;
            nextFromValue = parseInt(nextFromValue) + 1;

            newListSaleRow[i].from.value = nextFromValue;
            newListSaleRow[i].to.value = "";
        }

        return newListSaleRow;
    }

    const getIndexRow = (newListSaleRow, rowId) =>{
        let index = -1;
        let lengthListSaleRow = newListSaleRow.length;
        for(let i = 0; i < lengthListSaleRow; i++){
            if(newListSaleRow[i].id === rowId){
                index = i;
                break;
            }
        }

        return index;
    }

    const onHandleChange = (event) =>{
        const {name, value} = event.target;
        let newListSaleRow = [...listSaleRow];

        // Get row infomation
        let rowInfo = getSaleRowInfo(name);

        let index = getIndexRow(newListSaleRow, rowInfo.saleRowId);
        newListSaleRow[index] = {
            ...newListSaleRow[index],
            [rowInfo.nameOfInput]: {
                error: "",
                value
            }
        }  

        let currentFromValue = parseInt(newListSaleRow[index].from.value) || 0;
        let currentToValue = parseInt(newListSaleRow[index].to.value) || 0;

        if(currentFromValue >= currentToValue){
            setErrorMessage({
                rowIndex: index + 1,
                content: "Max order cannot be less than min order."
            });
        }else{
            setErrorMessage({
                rowIndex: -1,
                content: ""
            });
        }

        newListSaleRow = updateFromOfSaleRow(newListSaleRow, index);
        setListSaleRow(newListSaleRow);
    }

    const onHandleFocus = (event) =>{

    }

    const onHandleBlur = (event) =>{
        const {name, value} = event.target;

        if(value === ''){
            let newListSaleRow = [...listSaleRow];
            // Get row infomation
            let rowInfo = getSaleRowInfo(name);

            let lengthSaleRow = newListSaleRow.length;
            for(let i = 0; i < lengthSaleRow; i++){
                if(newListSaleRow[i].id === rowInfo.saleRowId){
                    newListSaleRow[i] = {
                        ...newListSaleRow[i],
                        [rowInfo.nameOfInput]: {
                            error: "Không được để trống ô",
                            value: ""
                        }
                    }
                    break;
                }
            }

            setListSaleRow(newListSaleRow);
        }        
    }

    const onHandleRemoveSaleRow = (rowId) =>{
        let newListSaleRow = [...listSaleRow];
        let index = getIndexRow(newListSaleRow, rowId);
        newListSaleRow = newListSaleRow.filter(item => item.id !== rowId);
        newListSaleRow = updateFromOfSaleRow(newListSaleRow, index);
        
        setListSaleRow(newListSaleRow);
        if(newListSaleRow.length === 0){
            props.onHandleCloseListSaleRow()
        }
    }

    const onHandleAddNewSaleRow = () =>{
        let newListSaleRow = [...listSaleRow];
        const lengthSaleRow = newListSaleRow.length;

        const newSalveRow = { 
            id: lengthSaleRow + 1 + "", 
            from: {
                value: "",
                error: ""
            }, 

            to: {
                value: "",
                error: ""
            }, 

            price: {
                value: "",
                error: ""
            }
        }
        newListSaleRow.push(newSalveRow);

        newListSaleRow = updateFromOfSaleRow(newListSaleRow, lengthSaleRow - 1);

        setListSaleRow(newListSaleRow);

        props.onAddSale(listSaleRow)
    }

    const renderSaleRow = () =>{
        return listSaleRow.map((item, index) =>{

            return (
                <div key={index} className="sale-table__row">
                    <div className="sale-table__label">{index + 1}. Khoảng giá {index + 1}</div>

                    <div className="sale-table__from">
                        <InputField
                            placeholder="Từ (sản phẩm)"
                            value = {item.from.value}
                            onHandleChange = {onHandleChange}
                            name = {`from-${item.id}`}
                            onHandleFocus = {onHandleFocus}
                            errMessage = {item.from.error}
                            onHandleBlur = {onHandleBlur}
                            isReadOnly = {index !== 0}
                        />
                    </div>
                    <div className="sale-table__to">
                        <InputField
                            placeholder="Đến (sản phẩm)"
                            value = {item.to.value}
                            onHandleChange = {onHandleChange}
                            name = {`to-${item.id}`}
                            onHandleFocus = {onHandleFocus}
                            errMessage = {item.to.error}
                            onHandleBlur = {onHandleBlur}
                        />
                    </div>
                    <div className="sale-table__price">
                        <InputField
                            placeholder="Đơn giá"
                            value = {item.price.value}
                            onHandleChange = {onHandleChange}
                            name = {`price-${item.id}`}
                            onHandleFocus = {onHandleFocus}
                            errMessage = {item.price.error}
                            onHandleBlur = {onHandleBlur}
                        />
                    </div>

                    <div 
                        className="sale-table__control"
                        onClick = {() => onHandleRemoveSaleRow(item.id)}
                    >
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M14.516 3.016h-4v-1a.998.998 0 0 0-.703-.955.99.99 0 0 0-.297-.045h-3a.998.998 0 0 0-.955.703.99.99 0 0 0-.045.297v1h-4a.5.5 0 1 0 0 1h1v10a.998.998 0 0 0 .703.955.99.99 0 0 0 .297.045h9a.998.998 0 0 0 .955-.703.99.99 0 0 0 .045-.297v-10h1a.5.5 0 1 0 0-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path><path d="M5.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5zM8.016 12.016a.5.5 0 0 0 .5-.5v-5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 .5.5zM10.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5z"></path></g></svg>
                    </div>
                </div>
            )
        })
    }
    
    return (
        <div className="sale-table__content">
            {/* Table Header */}
            <div className="sale-table__header">
                <div className="sale-table__row">
                    <div className="sale-table__label"></div>
                    <div className="sale-table__from">Từ (sản phẩm)</div>
                    <div className="sale-table__to">Đến (sản phẩm)</div>
                    <div className="sale-table__price">Đơn giá</div>
                    <div className="sale-table__control"></div>
                </div>
            </div>

            {/* Table Body */}
            <div className="sale-table__body">
                {renderSaleRow()}
            </div>

            {/* Table Footer */}
            <div className="sale-table__footer">
                <div className="widget-form__input ">
                    <div 
                        className="input-control add-input"
                        onClick = {onHandleAddNewSaleRow}
                    >
                        <span className="add-label"><span aria-hidden="true" class="icon_plus_alt2"></span> Thêm khoảng giá</span>
                    </div>
                </div>
            </div>

            {/* Table Error */}
            {
                errorMessage.rowIndex !== -1 ? (
                    <div className="sale-table__error">
                        <span className="label">Khoảng giá {errorMessage.rowIndex }: </span>
                        <span className="content">{errorMessage.content}</span>
                    </div>
                ): ""
            }
            
        </div>
    )
}

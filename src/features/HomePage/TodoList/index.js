import React from 'react'
import ToDoListItem from '../../../commons/components/TodoListItem';
import './style.scss';

export default function TodoList() {
    return (
        <div className="todo-list__content">
            <div className="widget">
                <div className="widget--left">
                    <h4>Danh sách cần làm</h4>
                    <span>Những việc bạn sẽ phải làm</span>
                </div>
            </div>
            <div className="todo-list__widget">
                <ToDoListItem number="0" label="Chờ xác nhận"/>
                <ToDoListItem number="0" label="Chờ lấy hàng"/>
                <ToDoListItem number="0" label="Đã xử lý"/>
                <ToDoListItem number="0" label="Đơn hủy"/>
                <ToDoListItem number="0" label="Trả hàng / Hoàn tiền chờ xử lý"/>
                <ToDoListItem number="0" label="Sản phẩm bị tạm khóa"/>
                <ToDoListItem number="0" label="Sản phẩm hết hàng"/>
                <ToDoListItem number="0" label="Chương trình khuyến mãi chờ xử lý"/>
            </div>
        </div>
    )
}

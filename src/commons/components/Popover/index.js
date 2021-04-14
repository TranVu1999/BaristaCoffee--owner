import React, {useState} from 'react';
import './style.scss';

export default function Popover(props) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenPopover = () =>{
        setIsOpen(true);
    }
    const onClosePopover = () =>{
        setIsOpen(false);
    }

    return (
        <div 
            className="popover-box"
            onMouseEnter = {onOpenPopover}
            onMouseLeave = {onClosePopover}
        >
            <span aria-hidden="true" class="icon_info_alt"></span>
            <div 
                className="popover__content"
                style={{display: isOpen ? "block" : "none"}}
            > <div>{props.content}</div>
            </div>
        </div>
    )
}

import React from 'react';
import HeaderAccount from '../../../commons/components/HeaderAccount';
import HeaderApp from '../../../commons/components/HeaderApp';
import HeaderLearn from '../../../commons/components/HeaderLearn';
import HeaderLogo from '../../../commons/components/HeaderLogo';
import HeaderNotify from '../../../commons/components/HeaderNotify';
import './style.scss';

export default function Header() {
    return (
        <header className = "d-flex-between header">
            <HeaderLogo/>

            <div className="d-flex-between">
                <HeaderAccount/>
                <div className="header--line"></div>
                <HeaderApp/>
                <HeaderNotify/>
                <HeaderLearn/>
            </div>
            
        </header>
    )
}

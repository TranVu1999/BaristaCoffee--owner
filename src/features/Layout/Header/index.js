import React from 'react';

import HeaderLogo from '../../../commons/components/HeaderLogo';
import './style.scss';

export default function Header({
    headerAccount, 
    headerApp, 
    headerLearn, 
    headerNotify,
    headerComback,
    headerContact
}) {
    return (
        <header className = "d-flex-between header">
            <HeaderLogo/>

            <div className="d-flex-between">
                {headerAccount}
                {headerComback}
                <div className="header--line"></div>
                {headerApp}
                {headerNotify}
                {headerLearn}
                {headerContact}
            </div>
            
        </header>
    )
}

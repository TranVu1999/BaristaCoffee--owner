import React from 'react';
import './style.scss'

function HeaderContact(props) {
    return (
        <div className="header__contact">
            <a href="/#"><span aria-hidden="true" className="social_facebook"></span></a>
            <a href="/#"><span aria-hidden="true" className="social_linkedin"></span></a>
            <a href="/#"><span aria-hidden="true" className="social_twitter"></span></a>
        </div>
    );
}

export default HeaderContact;
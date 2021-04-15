import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

import TodoList from './../../features/HomePage/TodoList'
import Analysis from './../../features/HomePage/Analysis'
import Marketing from './../../features/HomePage/Marketing'
import OperationalEfficiency from './../../features/HomePage/OperationalEfficiency'
import SidebarRight from './../../features/HomePage/SidebarRight'

import setHeader from './../../untils/setHeader'

HomePage.propTypes = {
    
};

function HomePage(props) {

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            setHeader(accessToken)
            console.log("Set access token")
        }
        
    }, )

    return (
        <div className="container__content home__container">
                <div className="home--left">
                    <div className="todo-list">
                        <TodoList/>
                    </div>

                    <div className="analysis">
                        <Analysis/>
                    </div>

                    <div className="marketing">
                        <Marketing/>
                    </div>

                    <div className="operational-efficiency">
                        <OperationalEfficiency/>
                    </div>
                </div>

                <div className="home--right sidebar--right">
                    <SidebarRight/>
                </div>
                
            </div>
    );
}

export default HomePage;

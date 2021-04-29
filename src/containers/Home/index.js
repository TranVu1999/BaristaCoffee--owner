import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './style.scss'

import TodoList from './../../features/HomePage/TodoList'
import Analysis from './../../features/HomePage/Analysis'
import Marketing from './../../features/HomePage/Marketing'
import OperationalEfficiency from './../../features/HomePage/OperationalEfficiency'
import SidebarRight from './../../features/HomePage/SidebarRight'

import setHeader from './../../untils/setHeader'
import {
    actConnect,
    actCreateRoom
} from './../../commons/modules/socket/actions'


HomePage.propTypes = {
    
};

function HomePage(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        const account = localStorage.getItem('account')
        if(accessToken){
            setHeader(accessToken)
            dispatch(actConnect())
            dispatch(actCreateRoom(account))
        }else{
            window.location.href = "http://localhost:3800/login"
        }
        
    }, [])

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

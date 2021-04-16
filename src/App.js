import React, { Component } from "react";
import './assets/Sass/index.scss';
import './App.scss';
import Header from "./features/Layout/Header";
import SidebarLeft from './features/Layout/SidebarLeft';
import LoginPage from './pages/Login'

import {Switch, Route} from 'react-router-dom'
import routes from './containers/routes'


// LAYOUT
class App extends Component {

  render(){
    
    return (
      <div className = "owner main-wrapper">
        <Switch>
          <Route path="/login" exact component={LoginPage}/>
          <Route path="/" exact>
          <Header/>
        <div className = "owner__page">

          <div className = "sidebar--left">
            <SidebarLeft/>
          </div>

          <div className = "owner--content">
            <Switch>
              {routes.map((item, index) =>{
                return <Route key = {index} path = {item.path} component = {item.component}/>
              })}
            </Switch>
            
          </div>
        </div>
          </Route>
        </Switch>

        
        
      </div>
    );
  }
  
  
}


export default App;

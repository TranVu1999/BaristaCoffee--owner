import {combineReducers} from 'redux';
import socketReducer from './../../commons/modules/socket/reducer'

const rootReducer = combineReducers({
    socketReducer
});

export default rootReducer;
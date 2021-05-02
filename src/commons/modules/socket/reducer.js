import io from 'socket.io-client'
import * as ActionTypes from './constants'

let initialState = {
    socket: io('http://localhost:5000'),
    newMessage: ""
}

const socketReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.CONNECT:
            let newMessage = "123"
            state.socket = io('http://localhost:5000')
            state.socket.emit('new user', localStorage.getItem('account'))
            state.socket.on('whisper', data =>{
                newMessage = data
            })
            state.newMessage = newMessage
            console.log(state.newMessage)
            
            return {...state}
        
        case ActionTypes.CREATE_ROOM:
            return {...state}

        default:
            return {...state}
    }
}

export default socketReducer
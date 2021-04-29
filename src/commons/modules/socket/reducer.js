import io from 'socket.io-client'
import * as ActionTypes from './constants'

let initialState = {
    socket: io('http://localhost:5000')
}

const socketReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.CONNECT:
            state.socket = io('http://localhost:5000')
            state.socket.on('i-want-to-talk', data =>{
                console.log(data)
            })
            return {...state}
        
        case ActionTypes.CREATE_ROOM:
            state.socket.emit("create-room", action.payload)
            return {...state}

        default:
            return {...state}
    }
}

export default socketReducer
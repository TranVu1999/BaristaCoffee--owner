import React, {useState, useEffect, useRef} from 'react';
import './style.scss'


import io from 'socket.io-client'
let socket = io('http://localhost:5000')

function ChatBox() {

    const [isSmallContent, setIsSmallContent] = useState(true)
    const [isLargecontent, setIsLargeContent] = useState(false)

    const [message, setMessage] = useState([])
    const [messageContent, setMessageContent] = useState("")
    const [isNewMessage, setIsNewMessage] = useState(true)
    const [currentUserActive, setCurrentUserActive] = useState("")
    const [listChat, setListChat] = useState([])
    const time = useRef(null)

    useEffect(() => {
        const account = localStorage.getItem('account')
        if(account){
            
            socket.emit('new user', account)
            socket.on('whisper', data =>{
                const mess = {
                    author: false,
                    content: data.mess,
                    isNewMessage: false
                }

                let newMessage = [...message, mess]
                setMessage(newMessage)
                setCurrentUserActive(data.listChat[0].id)
                setListChat(data.listChat)
            })
        }    
    }, [])


    const onHanldeCloseChatBox = () =>{
        setIsLargeContent(false)
        setIsSmallContent(true)

    }
    const onHanldeOpenChatBox = () =>{
        setIsSmallContent(false)
    }

    const onHandleToggleChatBoxMessage = () =>{
        setIsLargeContent(!isLargecontent)
    }

    const renderClass = () =>{
        let resClass = "chat-box__content"
        if(isSmallContent){
            resClass += " small"
        }

        if(isLargecontent){
            resClass += " large"
        }
        return resClass
    }

    const renderMessage = () =>{
        let index = -1
        const lengthChat = listChat.length
        for(let i = 0; i < lengthChat; i ++){
            if(listChat[i].id === currentUserActive){
                index = i
                break
            }
        }

        if(index !== -1){
            const account = localStorage.getItem('account')

            return listChat[index].listMessage.map((item, index) =>{
                return (
                    <div 
                        key = {index}
                        className = {item.sender === account ? "message__item author" : "message__item other"}
                    >
                        {item.isNewMessage ? <div className="message__date">Today, 10:33</div> : null}
                        
                        <div className="message__content--box">
                            <div className="message__content"> {item.content}</div>
                        </div>
                    </div>
                )
            })
        }

        return null
    }

    const onHanldeChangeMessageContent = event => {
        const {value} = event.target
        setMessageContent(value)
    }

    const onHanldeSendMessage = event =>{
        event.preventDefault()
        const data = {
            author: true,
            content: messageContent,
            isNewMessage
        }
        let newMessage = [...message]
        newMessage.push(data)
        setMessage(newMessage)
        setMessageContent("")
        setIsNewMessage(false)

        if(time.current){
            clearTimeout(time.current)
        }

        time.current = setTimeout(() =>{
            setIsNewMessage(true)
        }, 15000)

        // send message
        socket.emit('send message',{
            receiver: currentUserActive,
            sender: localStorage.getItem('account'),
            content: messageContent
        })

    }

    const renderListchat = () =>{
        if(listChat.length > 0){
            return listChat.map((item, index) =>{
                return (
                    <div 
                        className = {currentUserActive === index ? "conversation--item active" : "conversation--item"}
                        key = {index}
                    >
                        <div className="thumb">
                            <img src="https://cf.shopee.vn/file/08775e2674dabd8a64d516b37dbf9bca_tn" alt="brand logo"/>
                        </div>
                        <div className="text">
                            <p>{item.username.substring(0, item.username.indexOf('@'))}</p>
                            <div className="sub-message--box">
                                <div className="sub-message"> Chào bạn , có vấn đề cần liên hệ vui lòng gọi 085 504 0003 để được giải quyết nhé hoặc nhắn vào zalo sđt như trên nha</div>
                                
                                <div className="control">
                                    <div className="time">10:33</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }
    }

    const renderCurrentChat = () =>{
        let username = ""
        for(let item of listChat){
            if(item.id === currentUserActive){
                username = item.username.substring(0, item.username.indexOf('@'))
            }
        }

        return username
    }

    

    return (
        <div 
            className = {renderClass()}
        >
            <div 
                className="chat-box__title"
            >
                <div 
                    className="text"
                    onClick = {onHanldeOpenChatBox}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="chat-icon"><path d="M18 6.07a1 1 0 01.993.883L19 7.07v10.365a1 1 0 01-1.64.768l-1.6-1.333H6.42a1 1 0 01-.98-.8l-.016-.117-.149-1.783h9.292a1.8 1.8 0 001.776-1.508l.018-.154.494-6.438H18zm-2.78-4.5a1 1 0 011 1l-.003.077-.746 9.7a1 1 0 01-.997.923H4.24l-1.6 1.333a1 1 0 01-.5.222l-.14.01a1 1 0 01-.993-.883L1 13.835V2.57a1 1 0 011-1h13.22zm-4.638 5.082c-.223.222-.53.397-.903.526A4.61 4.61 0 018.2 7.42a4.61 4.61 0 01-1.48-.242c-.372-.129-.68-.304-.902-.526a.45.45 0 00-.636.636c.329.33.753.571 1.246.74A5.448 5.448 0 008.2 8.32c.51 0 1.126-.068 1.772-.291.493-.17.917-.412 1.246-.74a.45.45 0 00-.636-.637z"></path></svg>
                    Chat
                </div>

                {isSmallContent ? "" : (
                    <div className="control">
                        <button onClick = {onHandleToggleChatBoxMessage}>
                            {isLargecontent ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm5.854 1.319l2.828 2.828a.5.5 0 010 .708l-2.828 2.828a.5.5 0 11-.708-.707L9.121 9H4.5a.5.5 0 010-1h4.621L7.146 6.025a.5.5 0 11.708-.707zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H9v-1h5V2H9V1h5zM2 13v1h1v1H2a1 1 0 01-.993-.883L1 14v-1h1zm6 1v1H4v-1h4zM2 3.999V12H1V3.999h1zm4.975 1.319a.5.5 0 01.707.707L5.707 8h4.621a.5.5 0 010 1h-4.62l1.974 1.975a.5.5 0 01-.707.707L4.146 8.854a.5.5 0 010-.708zM3 1v1H2v.999H1V2a1 1 0 01.883-.993L2 1h1zm5 0v1H4V1h4z"></path></svg>}
                            
                        </button>

                        <button onClick = {onHanldeCloseChatBox}>
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="chat-icon"><path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zm0 1H2v12h12V2zm-2.904 5.268l-2.828 2.828a.5.5 0 01-.707 0L4.732 7.268a.5.5 0 11.707-.707l2.475 2.475L10.39 6.56a.5.5 0 11.707.707z"></path></svg>
                        </button>
                    </div>
                )}
                
                
            </div>

            <div 
                className = {isLargecontent ? "large-chat-box large" : "large-chat-box small"}
            >
                <div className="chat-box--left">
                    <div className="to">
                        <p>{renderCurrentChat()}</p>
                    </div>
                    <div className="list-message">{renderMessage()}</div>

                    <div className="send-message--box">
                        <form 
                            className = "send-message__form" 
                            onSubmit = {onHanldeSendMessage}
                        >
                            <input 
                                type="text"
                                placeholder="Type a message here"
                                name="message"
                                value = {messageContent}
                                onChange = {onHanldeChangeMessageContent}

                            />

                            <button><span class="icon icon-compass"></span></button>
                        </form>
                    </div>
                </div>

                <div className="chat-box--right">
                    <div className="chat-box__search">
                        <div className="input-search">
                            <span aria-hidden="true" class="icon_search"></span>
                            <input type="text" placeholder = "Search name"/>
                        </div>
                    </div>

                    <div className="list-conversation">{renderListchat()}</div>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
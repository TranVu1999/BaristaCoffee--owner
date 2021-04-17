import React, {useState} from 'react';
import './style.scss'

import api from './../../../api'

function FormLogin() {
    const [username, setUsername] = useState({
        value: "",
        error: ""
    })

    const [password, setPassword] = useState({
        value: "",
        error: ""
    })

    const onHanldeChange = (event) =>{
        const {name, value} = event.target
        let data = {value, error: ""}

        switch(name){
            case "username":
                setUsername(data)
                break

            case "password":
                setPassword(data)
                break

            default:
                break
        }
    }

    const onHanldeSubmit = (event) =>{
        event.preventDefault()

        let flag = true
        if(!username.value){
            flag = false
            setUsername({
                ...username,
                error: "Không được để trống ô này"
            })
        }

        if(!password.value){
            flag = false
            setPassword({
                ...password,
                error: "Không được để trống ô này" 
            })
        }

        if(flag){
            const data = {
                username: username.value,
                password: password.value
            }
    
            api.post("auth/login", data)
            .then(res =>{
                if(res.data.success){
                    localStorage.setItem('accessToken', res.data.accessToken)
                    window.location.href = "http://localhost:3800/"
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
        
    }

    return (
        <div className="form-login__box">
            <h3>Đăng nhập vào kênh người bán</h3>
            <form 
                className="form-login"
                onSubmit = {onHanldeSubmit}
            >
                <div 
                    className = {username.error ? "input-row error" : "input-row"}
                >
                    <input 
                        type="text" 
                        placeholder="Email/Số điện thoại"
                        value = {username.value}
                        name="username"
                        onChange = {onHanldeChange}
                    />
                    {username.error ? (<p>{username.error}</p>) : ""}
                    
                    
                </div>

                <div 
                    className = {password.error ? "input-row error" : "input-row"}
                >
                    <input 
                        type="text" 
                        placeholder="Mật khẩu"
                        value = {password.value}
                        name="password"
                        onChange = {onHanldeChange}
                    />
                    {password.error ? (<p>{password.error}</p>) : ""}
                    
                </div>
                <div className="input-row text-right">
                    <a href="/#">Quên mật khẩu?</a>
                </div>

                <button>Đăng nhập</button>
            </form>
        </div>
    );
}

export default FormLogin;
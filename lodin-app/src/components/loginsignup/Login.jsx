import React, { useState } from 'react'
import './login.css'
import personImg from '../assets/person.png'
import loginImg from '../assets/email.png'
import passwordImg from '../assets/password.png'

export const Login = () => {
    const [action, setAction] = useState('Signup')
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {
                    action === 'Login' ? <div></div> : <div className="input">
                    <img src={personImg} alt='person' />
                    <input type='text' placeholder='Enter your name' />
                </div>
                }
                <div className="input">
                    <img src={loginImg} alt='userid' />
                    <input type='email' placeholder='Enter your Id' />
                </div>
                <div className="input">
                    <img src={passwordImg} alt='password' />
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {action === 'Signup' ? <div></div>: <div className="forgot-password">Lost Possword? <span>Click Here</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={()=>{setAction('Signup')}}>SignUp</div>
                <div className={action === "Signup" ? "submit gray" : "submit"} onClick={()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
    )
}

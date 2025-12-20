import React from 'react'
import './Login.css';
import { PiHandsClappingFill } from "react-icons/pi";


const Login = () => {
    return (
        <div className="auth-page">
            <div className="auth-card">

                {/* Left Side */}
                <div className="auth-left">
                    <h1 className="auth-title">
                        Welcome back <PiHandsClappingFill />
                    </h1>
                    <p className="auth-subtitle">
                        Login to continue your journey
                    </p>
                </div>

                {/* Right Side */}
                <div className="auth-right">
                    <h1 className="auth-right-title">Login</h1>
                    <form className="login-form">
                        <input
                            type="text"
                            className="input-field"
                            name="emailOrphone"
                            placeholder=' Email or phone number...'
                            required
                        />

                        <input
                            type="password"
                            className="input-field"
                            name='password'
                            placeholder='Password..'
                            required
                        />

                        <button className="button">Login</button>

                    </form>
                </div>

            </div>
        </div >

    )
}

export default Login
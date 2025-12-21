import React, { useState } from 'react'
import './Login.css';
import { PiHandsClappingFill } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLoginRequest } from '../../redux/accounts/actionCreator';



const Login = () => {
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.accounts);
    const { loading, error, isAuthenticated } = loginState;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',

    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { emailOrPhone, password } = formData;
        // Check if emailOrPhone is an email or phone number
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone);
        const isPhone = /^[0-9]{10,15}$/.test(emailOrPhone);
        const userData = isEmail ?
            { email: emailOrPhone, password } :
            { phone_number: emailOrPhone, password };
        if (!emailOrPhone || !password) {
            alert("Please fill in all fields");
            return;
        }
        if (!isEmail && !isPhone) {
            alert("Please enter a valid email or phone number");
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        //Dispatch login action 
        dispatch(fetchLoginRequest(userData));
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate])

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
                    {error && (
                        <div className="error-text">
                            {typeof error === 'string'
                                ? error
                                : error?.message || 'Something went wrong'}
                        </div>
                    )}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input-field"
                            name="emailOrPhone"
                            placeholder=' Email or phone number...'
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            className="input-field"
                            name='password'
                            placeholder='Password..'
                            required
                            onChange={handleChange}
                        />

                        <button className="button">
                            {loading ? 'Logging in...'
                                : 'Login'}
                        </button>

                    </form>
                </div>

            </div>
        </div >

    )
}

export default Login
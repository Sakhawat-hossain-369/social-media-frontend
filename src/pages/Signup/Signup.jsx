import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { fetchSignupRequest } from '../../redux/accounts/actionCreator';

const Signup = () => {
    const dispatch = useDispatch();
    const signupState = useSelector((state) => state.accounts);
    const { loading, error, signupSuccess } = signupState;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_password: '',
    })
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            alert("Passwords does not match!");
            return;
        }
        //Removing confirm password before sending
        const { confirm_password, ...payload } = formData;
        // Dispatch signup action with formData
        dispatch(fetchSignupRequest(payload));

    }
    useEffect(() => {
        if (signupSuccess) {
            navigate('/login');
        }
    }, [signupSuccess, navigate])


    return (
        <div className="auth-page">
            <div className="auth-card">

                {/* Left */}
                <div className="auth-left">
                    <h1 className="auth-title">Create Account 🎉</h1>
                    <p className="auth-subtitle">
                        Sign up to start your journey
                    </p>
                </div>

                {/* Right */}
                <div className="auth-right">
                    <h1 className="auth-right-title">Sign Up</h1>
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
                            name="username"
                            className="input-field"
                            value={formData.username}
                            placeholder="Username"
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="input-field"
                            value={formData.email}
                            placeholder="Email address"
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="phone_number"
                            className="input-field"
                            value={formData.phone_number}
                            placeholder="Phone number (optional)"
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            className="input-field"
                            value={formData.password}
                            placeholder="Password"
                            required
                            onChange={handleChange}
                        />


                        <input
                            type="password"
                            name="confirm_password"
                            className="input-field"
                            value={formData.confirm_password}
                            placeholder="Confirm password"
                            required
                            onChange={handleChange}
                        />

                        <button className="button">
                            {loading ? 'Creating Account.........'
                                : 'Create Account'}
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup
import React from 'react'
import '../Login/Login.css';

const Signup = () => {
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

                    <form className="login-form">

                        <input
                            type="text"
                            name="username"
                            className="input-field"
                            placeholder="Username"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            className="input-field"
                            placeholder="Email address"
                            required
                        />

                        <input
                            type="text"
                            name="phone_number"
                            className="input-field"
                            placeholder="Phone number (optional)"
                        />

                        <input
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Password"
                            required
                        />


                        <input
                            type="password"
                            className="input-field"
                            placeholder="Confirm password"
                            required
                        />

                        <button className="button">Create Account</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup
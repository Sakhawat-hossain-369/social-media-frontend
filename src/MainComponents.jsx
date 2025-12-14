import React from 'react'
import './App.css';
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/navbar'

const MainComponents = () => {
    return (
        <div className="app">
            <Navbar />
            <main className="app-content">
                <AppRoutes />
            </main>
        </div>
    )
}

export default MainComponents;
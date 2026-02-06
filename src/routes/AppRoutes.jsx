import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup'
import Messages from '../pages/Messages'
import Notifications from '../pages/Notification'
import FollowingList from '../pages/FollowingList'
import FollowerLIst from '../pages/FollowerList'
import Profile from '../pages/Profile'
import ProtectedRoute from './protectedRoute'


const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            {/* Auth */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />


            {/* Social pages */}
            <Route path='/home'
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>

                } />
            <Route path='/messages'
                element={
                    <ProtectedRoute>
                        <Messages />
                    </ProtectedRoute>

                } />
            <Route path='/notifications'
                element={
                    <ProtectedRoute>
                        <Notifications />
                    </ProtectedRoute>

                } />
            <Route path='/followerList'
                element={
                    <ProtectedRoute>
                        <FollowerLIst />
                    </ProtectedRoute>

                } />
            <Route path='/followingList'
                element={
                    <ProtectedRoute>
                        <FollowingList />
                    </ProtectedRoute>

                } />
            <Route path='profile'
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>

                } />
        </Routes>


    )
}

export default AppRoutes;
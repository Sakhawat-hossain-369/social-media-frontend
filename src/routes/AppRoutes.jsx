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


const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            {/* Auth */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />


            {/* Social pages */}
            <Route path='/home' element={<Home />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/followerList' element={<FollowerLIst />} />
            <Route path='/followingList' element={<FollowingList />} />
            <Route path='profile' element={<Profile />} />
        </Routes>


    )
}

export default AppRoutes;
import React, { useState } from 'react'
import './Profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProfileRequest } from '../../redux/accounts/actionCreator'



const Profile = () => {
    const dispatch = useDispatch();
    const profileState = useSelector((state) => state.profile)
    const { userProfile, loading, error } = profileState;
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            dispatch(fetchProfileRequest(token));
            console.log("Fetching profile with token:", token);
        }
        else {
            console.log("No token found. User might not be logged in.");
        }
    }, [dispatch]);
    if (loading) {
        return <div> <p> Loading .... </p></div>
    }
    if (error) {
        return <div style={{ color: 'red' }}> <p> Error Loading profile: {error.messages}</p></div>
    }
    return (
        <div className="profile-page">
            <div className="profile-top-section">
                <div className="Left-sidebar">
                    <div className="profile-avatar">
                        <img src='' />
                    </div>

                </div>


                <div className="Right-sidebar">
                    <div className="profile-header">
                        <h1 className='profile-name'> {userProfile?.name || "User Name"} </h1>
                    </div>

                    <div className="profile-bio">
                        <p> This is the user bio.</p>
                    </div>
                    <div className="user-basic-info">
                        <div><p>City: </p></div>
                        <div><p>From:</p></div>
                        <div><p>Relationship status:</p></div>

                    </div>
                </div>
            </div>


            <br />

            <div className="profile-content-section">
                <div className="profile-content">
                    <h2> User Posts</h2>

                </div>
            </div>

        </div>
    )
}

export default Profile
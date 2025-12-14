import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
// import { IconName } from "react-icons/ai";
import { IoLogIn } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdHomeWork } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdOutlineSocialDistance } from "react-icons/md";


const Navbar = () => {
    const navItemClass = ({ isActive }) =>
        isActive ? "nav-item active" : "nav-item";
    return (
        <div className='navbar'>

            <div className='nav-logo'>
                <NavLink to="/" className={navItemClass} data-label="Social Media">
                    <MdOutlineSocialDistance size={30} style={{ marginRight: "6px" }} />
                </NavLink>

            </div>


            <div className="nav-search">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            </div>

            <div className='nav-links'>
                <NavLink to="/login" className={navItemClass} data-label="Login">
                    <IoLogIn size={30} style={{ marginRight: "6px" }} />
                    {/* Login */}
                </NavLink>
                <NavLink to="/signup" className={navItemClass} data-label="Signup">
                    <SiGnuprivacyguard size={30} style={{ marginRight: "6px" }} />

                    {/* Signup */}
                </NavLink>
                <NavLink to="/home" className={navItemClass} data-label="Home">
                    <MdHomeWork size={30} style={{ marginRight: "6px" }} />
                    {/* Home */}
                </NavLink>
                <NavLink to="/messages" className={navItemClass} data-label="Messages">
                    <BiSolidMessageSquareDetail size={30} style={{ marginRight: "6px" }} />
                    {/* Message */}
                </NavLink>
                <NavLink to="/notifications" className={navItemClass} data-label="Notifications">
                    <IoNotificationsCircleSharp size={30} style={{ marginRight: "6px" }} />
                    {/* Notifications */}
                </NavLink>
                <NavLink to="/profile" className={navItemClass} data-label="Profile">
                    <ImProfile size={30} style={{ marginRight: "6px" }} />
                    {/* Profile */}
                </NavLink>




            </div>


        </div>
    )
}

export default Navbar
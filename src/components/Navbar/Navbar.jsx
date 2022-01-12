import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}> 
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <div>   
               <FriendsContainer />
            </div>
        </div>
    );
}

export default Navbar;
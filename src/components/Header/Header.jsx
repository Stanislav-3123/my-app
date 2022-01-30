import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
	return (
		<div className={style.header}>
			<img src='https://i.pinimg.com/originals/d3/73/08/d37308d557d5feac1828114327840f3d.jpg'></img>
			<div className={style.loginBlock}>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</div>
	);
}


export default Header;
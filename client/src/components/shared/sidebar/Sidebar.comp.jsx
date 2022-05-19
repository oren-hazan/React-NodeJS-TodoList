import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.styles.css'

const Sidebar = (props) => {
	return (
		<div className={`sidebar-container ${props.className}`}>
			<div className='sidebar'>
				<Link className='link' to='/login' onClick={props.hideSidebar}>
					Login
				</Link>
				<Link className='link' to='/signup' onClick={props.hideSidebar}>
					Signup
				</Link>
			</div>
			<button className='close-btn' onClick={props.hideSidebar}>
				X
			</button>
		</div>
	);
};

export default Sidebar;

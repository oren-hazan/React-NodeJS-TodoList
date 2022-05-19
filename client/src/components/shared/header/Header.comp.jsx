import React, { useState } from 'react';
import './header.styles.css';
import Sidebar from '../sidebar/Sidebar.comp';

const Header = () => {
	const [sidebarClass, setSidebarClass] = useState('');

	const showSidebar = () => {
		setSidebarClass('show');
	};

	const hideSidebar = () => {
		setSidebarClass('');
	};

	return (
		<header className='main-header'>
			<h1>Todo List</h1>
			<div className='hamburger-container' onClick={showSidebar}>
				<div className='hamburger'></div>
				<div className='hamburger'></div>
				<div className='hamburger'></div>
			</div>
			<Sidebar className={sidebarClass} hideSidebar={hideSidebar} />
		</header>
	);
};

export default Header;

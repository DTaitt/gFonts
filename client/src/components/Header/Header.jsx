import React, { memo } from 'react';
import './Header.css';
import Sidebar from 'components/Sidebar/Sidebar'
import { Navbar } from 'react-materialize';

const Header = memo(() => (
	<header className='header'>
		<Navbar >
			<Sidebar />
		</Navbar>
	</header>
))

export default Header;
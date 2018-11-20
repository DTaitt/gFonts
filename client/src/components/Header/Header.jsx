//@flow
import React, { memo } from 'react';
import './Header.css';

import { Navbar } from 'react-materialize';

const Header = () => {
	return(
		<header className='header'>
			<Navbar brand='gFonts' />
		</header>
	)
}

export default Header;
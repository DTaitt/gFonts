//@flow
import React, { memo } from 'react';
import './Main.css';
import Sidebar from 'components/Sidebar/Sidebar';
import FontList from 'components/FontList/FontList';

type Props = {}

const Main = (props:Props) => {
	return(
		<main>
			<FontList />
			<Sidebar />
		</main>
	)
}

export default Main;
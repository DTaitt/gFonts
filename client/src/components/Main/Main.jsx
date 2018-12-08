import React, { memo } from 'react';
import './Main.css';
import FontList from 'components/FontList/FontList';

const Main = memo(() => (
	<main>
		<FontList />
	</main>
))

export default Main;
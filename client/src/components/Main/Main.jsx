import './Main.css';

import React, { memo } from 'react';

import FontList from 'components/FontList/FontList';

const Main = memo(() => (
	<main>
		<FontList />
	</main>
))

export default Main;
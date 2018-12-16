import React, { memo } from 'react';

import Main from 'components/Main/Main';
import Menu from 'components/Menu/Menu';

const App = memo(() => (
	<div className='app'>
		<Menu />
		<Main />
	</div>
))

export default App;

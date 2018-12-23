import React, { memo } from 'react';

import Helm from 'components/Helm/Helm';
import Main from 'components/Main/Main';
import Menu from 'components/Menu/Menu';

const App = memo(() => (
	<div className='app'>
		<Helm />
		<Menu />
		<Main />
	</div>
))

export default App;

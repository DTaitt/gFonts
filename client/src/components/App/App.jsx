import React, { memo } from 'react';

import Main from 'components/Main/Main';
import Menu from 'components/Menu/Menu';
import Helm from '../Helm/Helm';

const App = memo(() => (
	<div className='app'>
		<Helm />
		<Menu />
		<Main />
	</div>
))

export default App;

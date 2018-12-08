import React, { memo } from 'react';

import Header from 'components/Header/Header';
import Main from 'components/Main/Main';

const App = memo(() => (
	<div className='App'>
		<Header />
		<Main />
	</div>
))

export default App

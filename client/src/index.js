import App from 'components/App/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root'),
);
registerServiceWorker();

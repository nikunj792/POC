import React from 'react';
import {render} from 'react-dom';
import { Provider }from'react-redux';
import App from './container/App.js';
import store from './store.js';
render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('app')
	);			
	
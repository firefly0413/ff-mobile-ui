
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router } from 'react-router';

const rootRoute = {
	path: '/',
	component: require('./app/App'),
	childRoutes: [
		{
			path: 'index',
			getComponent(location, cb) {
				require.ensure([], (require) => {
					cb(null, require('./pages/Index'));
				}, 'Index');
			}
		},
	],
	indexRoute: {
		getComponent(location, cb) {
			require.ensure([], (require) => {
				cb(null, require('./pages/Index'));
			}, 'Index');
		}
	}
}

ReactDOM.render(
	<Router routes={rootRoute} history={hashHistory} />,
	document.getElementById('app')
);

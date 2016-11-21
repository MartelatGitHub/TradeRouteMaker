import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
// import { createHistory } from 'history';
// import StorePicker from '../components/StorePicker.js';
import App from '../components/App.js';
// import NotFound from '../components/NotFound.js';
import DetailedMap from '../components/view/DetailedMap';
import EditRoute from '../components/view/EditRoute';
import MainView from '../components/view/MainView';
import MapView from '../components/view/MapView';
import Notes from '../components/view/Notes';
import SavedRoutes from '../components/view/SavedRoutes';


var routes = (
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<Route path='main-view' component={MainView}></Route>
				<Route path='saved-routes' component={SavedRoutes}></Route>
				<Route path='detailed-map' component={DetailedMap}></Route>
			</Route>
		</Router>
	)




export default routes; 
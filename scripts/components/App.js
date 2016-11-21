import React from 'react';
// import Rebase from 're-base';
// var base = Rebase.createClass('https://death-bunnieswebsite.firebaseio.com/');
// import Catalyst from 'react-catalyst';
// import Header from '../components/Header.js';
// import Fish from '../components/Fish.js';
// import Order from '../components/Order.js';
// import Inventory from '../components/Inventory.js';
// import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';
import MainView from './view/MainView';
import { Link } from 'react-router';

const style = {
}

@autobind
class App extends React.Component {
	constructor() {
		super();
		this.state = {}
		}



		render() {

			return (
				<div style={style}>
					<p>This is from App.js</p>
					<Link to='main-view'>Create New Route</Link>
					<Link to='saved-routes'>View Saved Route</Link>
					{this.props.children}

				</div>
				)


		}


	}
	

export default App;
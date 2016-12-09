import React from 'react';
import autobind from 'autobind-decorator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import MapView from './MapView';
import Notes from './Notes';

import { Link } from 'react-router';


const style = {
	height: '1000',
	width: '100%',
	backgroundColor: 'red',
	borderRadius: '10px',
	borderColor: 'black',
	borderWidth: 0.9,
	display: 'flex',
	flex: 1,
}



@autobind
class MainView extends React.Component { 


	render() {
		return (
			<div>
			<div style={style}>
				<MuiThemeProvider>

					<Paper style={style}>
					<p> This is the MainView Component</p>
					<MapView />
					<Notes />
					</Paper>
				</MuiThemeProvider>
				</div>
				<Link to='/'> Go Back </Link>
			</div>
			)
	}



}
export default MainView;




















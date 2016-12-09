import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';

const style = {
	backgroundColor: 'orange',
	width: '40%',
	borderRadius: '10px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '1%',
	image: {
		width: '90%',
		height: '300px',

	},
}



@autobind
class MapView extends React.Component {


	render() {
		return (
			<div style={style}>
				<p>This is the MapView component</p>
				<img src='../css/images/mainmap.png' style={style.image} />
				<Link to="detailed-map">Click here to go to detailed map</Link>
			</div>
			)
	}

}

export default MapView;




















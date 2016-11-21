import React from 'react';
import autobind from 'autobind-decorator';

import { Link } from 'react-router';

const style = {
	width: '100%',
	height: '100%',
	display: 'flex',
} 


@autobind
class DetailedMap extends React.Component {


	render() {
		return (
			<div>
				<img src='../css/images/mainmap.png' style={style}/>
				<Link to='/'>Go Back</Link>
			</div>
			)
	}



}
export default DetailedMap;




















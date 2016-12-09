import React from 'react';
import autobind from 'autobind-decorator';

import { Link } from 'react-router'; 




@autobind
class SavedRoutes extends React.Component {


	render() {
		return (
			<div>
				<p>This is a saved route.</p>
				<Link to ='/'> Go Back </Link>
			</div>
			)
	}



}
export default SavedRoutes;




















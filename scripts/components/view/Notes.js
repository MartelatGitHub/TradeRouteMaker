import React from 'react';
import autobind from 'autobind-decorator';


const style = {
	backgroundColor: 'purple',
	width: '40%',
	borderRadius: '10px',
}



@autobind
class Notes extends React.Component {


	render() {
		return (
			<div style={style}>
				<p>This is from the Notes component</p>
			</div>
			)
	} 



}
export default Notes;




















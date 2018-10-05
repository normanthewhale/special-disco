import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {
	render() {
		return (< Link to = {
			this.props.to
		}
		className = {
			this.props.className
		} > {
			this.props.name
		} < /Link>
		)
	}
}
export default ListItem
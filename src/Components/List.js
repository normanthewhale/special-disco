import React, { Component } from 'react';

class List extends Component {
	render() {
		return (< h1 onClick = {
			this.props.onClick
		}
		id = {
			this.props.id
		} > {
			this.props.name
		} < /h1>
		)
	}
}
export default List
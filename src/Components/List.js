import React, { Component } from 'react';

class List extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		return (< h1 > {
			this.props.name
		} < /h1>
		)
	}
}
export default List
import React, { Component } from 'react';

class List extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		console.log( this.props );
		return (< h1 onClick = {
			( e ) => this
				.props
				.onClick( e )
		}
		band = {
			this.props.band
		} > {
			this.props.name
		} < /h1>
		)
	}
}
export default List
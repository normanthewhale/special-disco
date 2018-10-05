import React, { Component } from 'react';

class GetInfo extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			isLoading: false,
		};
	}
	componentDidMount() {
		console.log( this.props.match.params.id );
		// 	this
		// 		.callApi()
		// 		.then( res => {
		// 			this.setState( { data: res, isLoading: false } );
		// 			console.log( res );
		// 			console.log( this.props );
		// 		} )
		// 		.catch( err => console.log( err ) );
		// }
		//
		// callApi = async () => {
		// 	const response = await fetch( `/api/bands/:params.id }` );
		// 	const body = await response.json();
		// 	console.log( "test" );
		// 	if ( response.status !== 200 )
		// 		throw Error( body.message );
		// 	return body;

	};
	render() {
		return ( <div className="App">
			<h1>Hello</h1>
		</div> )
	}
}
export default GetInfo

import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'

class Help extends Component {
	state = {
		data: null
	};
	componentDidMount() {
		this
			.callApi()
			.then( res => this.setState( { data: res.express } ) )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( '/api' );
		const body = await response.json();

		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};
	render() {
		return ( <div className="App">

			<h1>We are here to help</h1>
		</div> );
	}
}

export default Help;

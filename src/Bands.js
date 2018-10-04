import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import List from './Components/List'

class Bands extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			isLoading: false,
		};
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
				this.setState( { data: res, isLoading: false } );
				console.log( res );
				console.log( this.state.data );
			} )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( '/api/bands' );
		const body = await response.json();

		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;
	};

	getInfo( e ) {
		console.log( e.currentTarget.id );
		// console.log( this.target );
	}

	getList = () => {
		if ( this.state.data != null ) {
			return this
				.state
				.data
				.map( band => {
					return <List key={band.name} id={band._id} name={band.name} onClick={this.getInfo}/>;
				} )
		};
	}

	render() {
		return ( <div className="App">
			{this.getList()}
		</div> );
	}
}

export default Bands;

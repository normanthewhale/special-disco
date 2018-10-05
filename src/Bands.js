import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import ListItem from './Components/ListItem';

class Bands extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
			isLoading: false
		};
	}
	componentDidMount() {
		this
			.callApi()
			.then( res => {
				this.setState( { data: res, isLoading: false, } );
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

	getList = () => {
		if ( this.state.data != null ) {
			return this
				.state
				.data
				.map( band => {
					return <ListItem key={band._id} className="list" name={band.name} to={`/bands/${ band._id }`}/>;
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

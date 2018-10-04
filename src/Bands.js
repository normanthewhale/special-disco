import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import List from './Components/List'

class Bands extends Component {
	constructor() {
		super();
		this.state={data: null};
}
	componentDidMount() {
		this.callApi()
			.then( res => {this.setState( { data: res } );
			 console.log(res);
			 	console.log(this.state.data) })
			.catch( err => console.log( err ) );
			}

	callApi = async () => {
		const response = await fetch( '/api/bands' );
		const body = await response.json();

		if ( response.status !== 200 )
			throw Error( body.message );
		return body;
			};

getInfo = () => {
	return this.state.data.map(band => <List name={band.name}/> )
}

render() {
	return ( <div className="App">
			{this.getInfo()}
			</div> );
	}
}

export default Bands;

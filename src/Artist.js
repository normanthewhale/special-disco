import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'

class Artist extends Component {

	componentDidMount() {
	        this
	            .callApi()
	            .then( res => {this.setState( { data: res.express } ); console.log(res) })
	            .catch( err => console.log( err ) );
	    }

	    callApi = async () => {
	        const response = await fetch( '/api/bands' );
	        const body = await response.json();

	        if ( response.status !== 200 )
	            throw Error( body.message );
	        return body;
	    };
render() {
		return ( <div className="App">


			<h1>Artist Test</h1>
	</div>	)
	}
}

export default Artist;

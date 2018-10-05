import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'

class Submit extends Component {
	state = {
		name: "",
		members: [],
		albums: [],
		genre: "",
		origin: "",
		years_active: "",
		rating: "",
		isLoading: false,
	};

	componentDidMount() {
		console.log( "is this it?" )
	}
	changeHandler = ( e ) => {
		this.setState( { name: e.target.value } )
	}
	submit = () => {
		fetch( '/api/bands', {
			method: 'post',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify( { name: this.state.name } )
		} )
			.then( res => {
				console.log( res )
				if ( res.status !== 200 ) 
					throw Error( res.message );
				return res.json()
			} )
			.then( res => {
				console.log( res )
			} );

	}
	render() {
		return ( < div className = "App" > <input onChange={this.changeHandler}/>
		<button onClick={this.submit}>Butt</button>
	</div> );
	}
}

export default Submit;

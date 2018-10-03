import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'
import Button from '@material-ui/core/Button';
///nav stuff below
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input'

class Landing extends Component {
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
	bandsbutt = () => {
		// window
		// 	.location
		// 	.assign( /Bands.js)
	}
	render() {
		return ( <div className="App">

			<AppBar position="static" color="default" title="Bandbase">
				<Toolbar>

					<Typography variant="title" color="inherit" gutterBottom={false}>
						Bandbase
					</Typography >
					<Button className="Nav-btn" onClick={this.bandsbutt} color="inherit">Bands</Button>
					<Button className="Nav-btn" color="inherit">Artist</Button>
					<Button className="Nav-btn" color="inherit">Submit Info</Button>
					<Button className="Nav-btn-help" color="inherit">Help</Button>
					<SearchIcon/>
					<Input placeholder="Search..." disableUnderline={true}/>
				</Toolbar>
			</AppBar>
			<img className="logo" src="./images/LogoMakr_3ExdKC.png" alt="#"/></div> );
	}
}

export default Landing;

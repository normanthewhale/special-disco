// import React, { Component } from 'react';
// import './App.css';
// import 'typeface-roboto'
// import Button from '@material-ui/core/Button';
// /nav stuff below
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import SearchIcon from '@material-ui/icons/Search';
// import Input from '@material-ui/core/Input'
//
// import { Field, reduxForm, } from 'redux-form'
// import TextField from 'material-ui/TextField'
// import { RadioButton, RadioButtonGroup, } from 'material-ui/RadioButton'
// import Checkbox from 'material-ui/Checkbox'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
// import asyncValidate from './asyncValidate'
//
// class Landing extends Component {
// 	state = {
// 		data: null
// 	};
// 	componentDidMount() {
// 		this
// 			.callApi()
// 			.then( res => this.setState( { data: res.express } ) )
// 			.catch( err => console.log( err ) );
// 	}
//
// 	callApi = async () => {
// 		const response = await fetch( '/api' );
// 		const body = await response.json();
//
// 		if ( response.status !== 200 )
// 			throw Error( body.message );
// 		return body;
// 	};
// 	render() {
// 		return ( <div className="App">
//
// 			<AppBar position="static" color="default" title="Bandbase">
// 				<Toolbar>
//
// 					<Typography variant="title" color="inherit" gutterBottom={false}>
// 						Bandbase
// 					</Typography>
// 					<Button className="Nav-btn" color="inherit">Bands</Button>
// 					<Button className="Nav-btn" color="inherit">Artist</Button>
// 					<Button className="Nav-btn" color="inherit">Submit Info</Button>
// 					<Button className="Nav-btn-help" color="inherit">Help</Button>
// 					<SearchIcon/>
// 					<Input placeholder="Search..." disableUnderline={true}/>
// 				</Toolbar>
// 			</AppBar>
//
// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					<Field name="firstName" component={renderTextField} label="First Name"/>
// 				</div>
// 				<div>
// 					<Field name="lastName" component={renderTextField} label="Last Name"/>
// 				</div>
// 				<div>
// 					<Field name="email" component={renderTextField} label="Email"/>
// 				</div>
// 				<div>
// 					<Field name="sex" component={renderRadioGroup}>
// 						<RadioButton value="male" label="male"/>
// 						<RadioButton value="female" label="female"/>
// 					</Field>
// 				</div>
// 				<div>
// 					<Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
// 						<MenuItem value="ff0000" primaryText="Red"/>
// 						<MenuItem value="00ff00" primaryText="Green"/>
// 						<MenuItem value="0000ff" primaryText="Blue"/>
// 					</Field>
// 				</div>
// 				<div>
// 					<Field name="employed" component={renderCheckbox} label="Employed"/>
// 				</div>
// 				<div>
// 					<Field name="notes" component={renderTextField} label="Notes" multiLine={true} rows={2}/>
// 				</div>
// 				<div>
// 					<button type="submit" disabled={pristine || submitting}>
// 						Submit
// 					</button>
// 					<button type="button" disabled={pristine || submitting} onClick={reset}>
// 						Clear Values
// 					</button>
// 				</div>
// 			</form>
//
// 		</div> );
// 	}
// }
//
// export default Landing;
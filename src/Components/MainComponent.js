import React, { Component } from "react";
import Bands from "../Bands";
import Artist from "../Artist";
import Submit from "../Submit";
import Help from "../Help";
import Landing from "../Landing";
// import Route from 'react-router';
import { Redirect, Route, Switch, } from 'react-router-dom';

class MainComponent extends Component {

	render() {
		return ( <div className="App-intro">
			<Switch>
				<Route exact="exact" path="/" component={Landing}/>
				<Route path="/bands" component={Bands}/>
				<Route path="/artist" component={Artist}/>
				<Route path="/submitInfo" component={Submit}/>
				<Route path="/help" component={Help}/>

				<Redirect to="/"/>
			</Switch>
		</div> );
	}
}
export default MainComponent;

import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto'
import BandAppBar from './Components/BandAppBar'
import MainComponent from './Components/MainComponent'

class App extends Component {

	render() {
		return ( <div className="App">
			<BandAppBar/>
			<MainComponent/>
		</div> );
	}
}

export default App;

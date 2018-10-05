import React, { Component } from 'react';
import 'typeface-roboto'
import Button from '@material-ui/core/Button';
///nav stuff below
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input'
import { Link } from 'react-router-dom'

class BandAppBar extends Component {

	render() {

		return ( <div>
			<AppBar position="static" color="default" title="Bandbase">
				<Toolbar>
					<Typography variant="title" color="inherit" gutterBottom={false} to="/" component={Link}>
						Bandbase
					</Typography>

					<Button className="Nav-btn" color="inherit" to="/bands" component={Link}>Bands</Button>
					<Button className="Nav-btn" color="inherit" to="/artist" component={Link}>Artist</Button>
					<Button className="Nav-btn" color="inherit" to="/submitInfo" component={Link}>Submit Info</Button>
					<Button className="Nav-btn-help" color="inherit" to="/help" component={Link}>Help</Button>
					<SearchIcon/>
					<Input placeholder="Search..." disableUnderline={true}/>
				</Toolbar>
			</AppBar>
		</div> );
	}
}

export default BandAppBar;

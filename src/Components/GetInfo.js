import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
///nav stuff below
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

class GetInfo extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			members: [],
			albums: [],
			genre: "",
			origin: "",
			years_active: "",
			rating: "",
			isLoading: false,
		};
	}

	componentDidMount() {
		console.log( "getInfo" )
		this
			.callApi()
			.then( res => {
				this.setState( {
					...res,
					isLoading: false,
				} );
			} )
			.catch( err => console.log( err ) );
	}

	callApi = async () => {
		const response = await fetch( `/api/bands/${ this.props.match.params.id }` );
		const body = await response.json();
		if ( response.status !== 200 ) 
			throw Error( body.message );
		return body;

	};
	render() {
		if ( this.state.name ) {
			return ( <div className="App">
				<h1>
					<Grid className="rowone" container={true} spacing={16}>
						<Grid >
							<Paper>
								<Card className="card">
									<CardActionArea>
										<CardMedia style={{
												height: 0,
												paddingTop: '56%'
											}} className="media" image='https://picsum.photos/200/300/?random' title="The Bad Plus"/>
										<CardContent>
											<Typography gutterBottom={false} variant="headline" component="h2">
												The Bad Plus
											</Typography>
											<Typography component="p">
												The Bad Plus is a band..for sure...here is a picture of them sitting at a table.
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Share
										</Button>
										<Button size="small" color="primary">
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Paper>
						</Grid>

						<Grid className="rowone">
							<Paper className="sidebar">
								<Table className="table">

									<TableHead >
										<TableRow>
											<TableCell>{this.state.name}</TableCell>
										</TableRow>
									</TableHead>

									<TableBody>
										<TableRow>
											<TableCell>Years Active</TableCell>
											<TableCell>hfg</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Genre</TableCell>
											<TableCell>Avantgarde Piano Trio</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Albums</TableCell>
											<TableCell>These Are the Vistas, Made Possible, Suspicious Activity?</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Origin</TableCell>
											<TableCell>Minneapolis, Minnesota, USA</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Members</TableCell>
											<TableCell>Orrin Evans, Reid Anderson, David King</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Past Members</TableCell>
											<TableCell>Ethan Iverson</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Labels</TableCell>
											<TableCell>HUI, Universal, Do the Math</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>Past Times</TableCell>
											<TableCell>Covers, Out solo's, epic endings</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</Paper>
						</Grid>
					</Grid>
					<Paper className="infoText">
						Play time i show my fluffy belly but it's a trap! if you pet it i will tear up your hand lick sellotape, purrrrrr. Cry louder at reflection leave fur on owners clothes pretend you want to go out but then don't chase laser for dead stare with ears cocked for present belly, scratch hand when stroked or eat the rubberband. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap yet kitty power. Lick human with sandpaper tongue refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am chirp at birds. Swat at dog meow and walk away, but ask for petting. Leave fur on owners clothes lick butt. Claws in your leg destroy couch as revenge yet nya nya nyan cats are fats i like to pets them they like to meow back fall asleep upside-down scratch. Cats secretly make all the worlds muffins this human feeds me, i should be a god cereal boxes make for five star accommodation . Lick the plastic bag lick the plastic bag scamper. Slap owner's face at 5am until human fills food dish litter kitter kitty litty little kitten big roar roar feed me that box? i can fit in that box this human feeds me, i should be a god.
					</Paper>
				</h1>
			</div> )
		} else {
			return <h1>Hello</h1>
		}
	}
}
export default GetInfo

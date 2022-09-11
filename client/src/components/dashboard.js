import { React, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	AppBar,
	IconButton,
	Card,
	CardActions,
	CardContent,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import './dashboard.scss';
import FundraiserCard from './fundraiser/fundraiserCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//create styles for the dashboard component
const useStyles = makeStyles((theme) => ({
	title: {
		height: '10vh',
		textAlign: 'center',
		fontSize: 30,
		color: '#C66461',
	},

	appbar: {
		background: 'white',
		boxShadow: 'none',
		display: 'flex',
	},
}));

//create a dashboard component
const Dashboard = () => {
	const [fundraisers, setFundraisers] = useState([]);
	const fetchFundraisers = async () => {
		const response = await axios.get(
			'https://daofundme-prod.herokuapp.com/fundraiser/fundraisers'
		);
		setFundraisers(response.data.fundraisers);
		//catch any errors
	};

	useEffect(() => {
		fetchFundraisers();
	}, []);

	const cards = fundraisers.map((fundraiser) => {
		return <FundraiserCard fundraiser={fundraiser}></FundraiserCard>;
	});

	const classes = useStyles();
	return (
		//sidebar component
		<div className="dashboard">
			<Sidebar />
			<div className="dashboard-container">
				<Typography variant="h2" class={classes.title}>
					Fundraisers
				</Typography>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={3}
				>
					{cards}
				</Grid>
			</div>
		</div>
	);
};

export default Dashboard;

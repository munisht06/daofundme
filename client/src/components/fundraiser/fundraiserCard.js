import { React, useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Button,
	Box,
	CardActions,
	LinearProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FundraiserCard = ({ fundraiser }) => {
	const [title, setTitle] = useState(fundraiser.title);
	const [description, setDescription] = useState(fundraiser.description);
	const [goal, setGoal] = useState(fundraiser.goal);
	const [endDate, setEndDate] = useState(fundraiser.endDate);
	const [user, setUser] = useState(fundraiser.user);

	const navigate = useNavigate();

	return (
		<Grid item xs={3.5}>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">
						{title}
					</Typography>

					<Typography sx={{ paddingBlock: 4 }} variant="body1" component="p">
						{description}
						<br />
						{'"a benevolent smile"'}
					</Typography>
					<Box sx={{ color: 'green' }}>
						<LinearProgress
							sx={{ marginTop: 3 }}
							variant="determinate"
							value={50}
							color="inherit"
						/>
					</Box>
					<Typography variant="body2">{goal}</Typography>
					<Typography color="textSecondary" variant="body2">
						(3472.33 DESO of 8680.55 DESO)
					</Typography>
				</CardContent>
				<CardActions>
					<Box textAlign="center">
						<Typography color="textSecondary" variant="body2">
							50% progress
						</Typography>
						<Button
							size="small"
							onClick={() => {
								navigate('/fundraiser/' + fundraiser._id, {
									state: { fundraiser },
								});
							}}
						>
							Learn More
						</Button>
					</Box>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default FundraiserCard;

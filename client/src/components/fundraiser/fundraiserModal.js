import React from 'react';
import { Paper, Grid, Button, TextField, Snackbar } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Deso from 'deso-protocol';
import { useForm } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Local Imports
import useFundraiser from './useFundraiser';

const FundraiserModal = () => {
	const [publicKey, setPublicKey] = useState('');
	const [modalOpen, setOpenModal] = useState(true);
	const { createFundraiser } = useFundraiser();
	const { register, handleSubmit } = useForm();
	const { user } = useAuth0();

	const deso = new Deso();

	const handleWallet = async () => {
		await deso.identity.login();
		const loggedInUserKey = deso.identity.getUserKey();
		setPublicKey(loggedInUserKey);
	};

	const onSubmit = async (data) => {
		const email = user.email;

		const requestData = {
			...data,
			email,
			publicKey,
		};

		const result = await createFundraiser(requestData);

		if (result.data) {
			toast.success(result.message);
		} else {
			toast.error(result.message);
		}
		setOpenModal(false);
	};

	if (modalOpen) {
		return (
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<Paper
					style={{
						margin: 'auto',
						marginTop: '4em',
						padding: '1.2em',
						height: '70vh',
						width: 500,
						borderRadius: '10px',
					}}
				>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<h1>Create Fundraiser</h1>
								<TextField
									{...register('title')}
									required
									id="title"
									name="title"
									label="Title"
									fullWidth
									autoComplete="title"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('description')}
									required
									id="description"
									name="description"
									label="Description"
									fullWidth
									autoComplete="description"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('goal')}
									required
									id="goal"
									name="goal"
									label="Goal"
									type={'number'}
									fullWidth
									autoComplete="goal"
								/>
							</Grid>
							<Grid item xs={12}>
								<DesktopDatePicker
									{...register('endDate')}
									label="End Date"
									inputFormat="MM/DD/YYYY"
									renderInput={(params) => <TextField fullWidth {...params} />}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									variant="contained"
									color="success"
									onClick={handleWallet}
									required
									fullWidth
								>
									Connect Wallet
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									fullWidth
									variant="outlined"
									sx={{ color: '#C66461', border: '#C66461' }}
									style={{ marginTop: '1em' }}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</LocalizationProvider>
		);
	}
	return (
		<>
			<ToastContainer />
		</>
	);
};

export default FundraiserModal;

import { React, useEffect, useState } from 'react';
import { Paper, Grid, Button, TextField, Snackbar, Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Deso from 'deso-protocol';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useDonate from './useDonate';

const DonateModal = ({ title }) => {
	const [amount, setAmount] = useState(0);
	const [publicKey, setPublicKey] = useState('');
	const [openModal, setOpenModal] = useState(true);
	const { donate } = useDonate();

	const deso = new Deso();

	const handleDonate = async () => {
		const requestData = {
			title,
			amount,
		};

		const result = await donate(requestData);

		if (result.data) {
			toast.success(result.message);
		} else {
			toast.error(result.message);
		}
		setOpenModal(false);
	};

	const handleAmount = (e) => {
		setAmount(e.target.value);
	};

	const handleWallet = async () => {
		await deso.identity.login();
		const loggedInUserKey = deso.identity.getUserKey();
		setPublicKey(loggedInUserKey);
	};

	if (openModal) {
		return (
			<Paper
				style={{
					margin: 'auto',
					marginTop: '4em',
					padding: '1.2em',
					height: '50vh',
					width: 500,
					borderRadius: '10px',
				}}
			>
				{publicKey}
				<form>
					<Grid container spacing={2}>
						<Grid item xs={12} textAlign="center">
							<h1 style={{ alignContent: 'center' }}>Make a Donation</h1>
							<TextField
								label=" Donation Amount (DESO)"
								sx={{ m: 1, width: '30' }}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end"></InputAdornment>
									),
								}}
								variant="standard"
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								fullWidth
								variant="outlined"
								sx={{ color: '#C66461', border: '#C66461' }}
								style={{ marginTop: '1em' }}
								onClick={handleWallet}
								required
							>
								Connect Wallet
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button
								onClick={handleDonate}
								variant="contained"
								color="success"
								required
								fullWidth
							>
								Donate
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		);
	} else
		return (
			<>
				<ToastContainer />
			</>
		);
};

export default DonateModal;

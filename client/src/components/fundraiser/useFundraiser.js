import axios from 'axios';
import * as React from 'react';

function useFundraiser() {
	// const [response, setResponse] = React.useState("")
	const apiUrl = 'https://daofundme-prod.herokuapp.com';

	const createFundraiser = async (fundraiserData) => {
		console.log(fundraiserData);
		try {
			const res = await axios.post(
				`${apiUrl}/fundraiser/create`,
				fundraiserData
			);

			if (res.data.status === 200) {
				return {
					status: 'success',
					message: 'Successfully created fundraiser!',
					data: res.data,
				};
			}

			return {
				status: 'error',
				message:
					'There was an issue creating fundraiser, please try a different title.',
				data: null,
			};
		} catch (e) {
			return {
				status: 'error',
				message:
					'There was an issue creating fundraiser, please try a different title.',
				error: e,
			};
		}
	};

	return { createFundraiser };
}

export default useFundraiser;

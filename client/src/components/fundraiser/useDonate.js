import axios from 'axios';

function useDonate() {
	const apiUrl = 'https://daofundme-prod.herokuapp.com';

	const donate = async (requestData) => {
		const { title, amount } = requestData;

		try {
			const res = await axios.post(`${apiUrl}/fundraiser/donate`, {
				title,
				amount,
			});

			if (res.data.status === 200) {
				return {
					status: 'success',
					message: 'Successfully donated!',
					data: res.data,
				};
			}

			return {
				status: 'error',
				message: 'There was an issue donating, please try again.',
				data: null,
			};
		} catch (e) {
			return {
				status: 'error',
				message: 'There was an issue donating, please try again..',
				error: e,
			};
		}
	};

	return { donate };
}

export default useDonate;

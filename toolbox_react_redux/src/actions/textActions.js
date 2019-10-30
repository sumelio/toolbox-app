import axios from 'axios';
import { SEND_TEXT } from '../types/textTypes';

export const sendText = (name) => async (dispatch) => {
	try {
		const response = await axios({
			method: 'post',
			url: 'http://localhost:4000',
			headers: {},
			data: {
				text: name
			}
		});
	dispatch({
		type: SEND_TEXT,
		payload: response.data
	})
}
catch (error) {
	console.log('Error: ', error.message);
}
};
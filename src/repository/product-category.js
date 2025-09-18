import axios from 'axios';

export const getproductCategories = async () => {
	const res = await axios.get('/api/get-categories');
	return res.data;
};

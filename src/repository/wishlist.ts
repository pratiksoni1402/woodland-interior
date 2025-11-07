import axios from 'axios';

export const getWishlistProducts = async () => {
	try {
		const response = await axios.get('/api/wishlist-items/get-data');
		return response.data.getallproduct;
	} catch (error) {
		console.error('Failed to fetch wishlist products:', error);
		throw error;
	}
};

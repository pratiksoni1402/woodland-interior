import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

export const apiClient: AxiosInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
});

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		const message =
			error.response?.data?.message ||
			error.response?.data?.error ||
			error.message ||
			'An unexpected error occurred';
		return Promise.reject(new Error(message));
	}
);

export default apiClient;

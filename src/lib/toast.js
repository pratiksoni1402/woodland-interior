import { toast } from 'react-hot-toast';

const successToast = {
	duration: 1000,
	style: {
		border: '1px solid #3c2f27',
		padding: '8px',
		color: '#faf2ec',
		backgroundColor: '#3c2f27',
	},
	iconTheme: {
		primary: '#faf2ec',
		secondary: '#3c2f27',
	},
};

const errorToast = {
	duration: 1000,
	style: {
		border: '1px solid #3c2f27',
		padding: '16px',
		color: '#faf2ec',
		backgroundColor: '#3c2f27',
	},
	iconTheme: {
		primary: '#faf2ec',
		secondary: '#3c2f27',
	},
};

export function showSuccessToast(message) {
	toast.success(message, successToast);
}

export function showErrorToast(message) {
	toast.error(message, errorToast);
}

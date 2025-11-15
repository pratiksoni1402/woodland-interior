export interface ApiMessage {
	type: 'success' | 'error' | 'warning' | 'info';
	content: string;
}

export interface ApiResponse {
	success: boolean;
	message: ApiMessage;
	data: object;
	error: string | object | number;
}

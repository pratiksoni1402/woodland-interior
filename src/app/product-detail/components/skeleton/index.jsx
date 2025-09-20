import { MoonLoader } from 'react-spinners';

export default function FallbackUi({ data }) {
	console.log('asd'.data);
	return !data ? (
		<div className="loading h-screen bg-background w-full flex justify-center items-center">
			<MoonLoader color="#3c2f27" />
		</div>
	) : (
		''
	);
}

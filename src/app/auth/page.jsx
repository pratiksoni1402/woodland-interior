import Login from '@/app/auth/login/page';
import SignUp from '@/app/auth/register/page';

export default function Auth() {
	return (
		<div className="container">
			<div className="flex gap-4 sm:flex-nowrap flex-wrap">
				<div className="w-full flex items-center justify-center">
					<Login />
				</div>
				<div className="w-full flex items-center justify-center">
					<SignUp />
				</div>
			</div>
		</div>
	);
}

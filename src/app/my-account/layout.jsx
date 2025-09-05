import MyAccount from '@/app/my-account/page';
import SideMenu from '@/app/my-account/components/side-menu';
export default function UserProfileLayout({ children }) {
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-4">
				<div>
					<SideMenu />
				</div>
			</div>

			<div className="col-span-8">
				<div>{children}</div>
			</div>
		</div>
	);
}

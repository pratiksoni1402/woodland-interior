import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function BillingDetailToggleSwitch({ show, onToggle }) {
	return (
		<div className="mt-6">
			<div>
				<Label htmlFor="" className="text-sm font-roboto text-primary">
					Is Billing detail same as shipping detail ?
				</Label>
			</div>
			<div className="flex items-center font-roboto text-sm py-3 text-primary">
				<span>Yes</span>
				<Switch
					id="airplane-mode"
					className="mx-2 hover:cursor-pointer border-primary bg-primary"
					checked={show}
					onClick={onToggle}
				/>
				<span>No</span>
			</div>
		</div>
	);
}

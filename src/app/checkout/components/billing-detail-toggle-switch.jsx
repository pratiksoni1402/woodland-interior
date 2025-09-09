import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function BillingDetailToggleSwitch({ show, onToggle }) {
	return (
		<div>
			<div>
				<Label htmlFor="" className="text-sm font-roboto text-[#3c2f27]">
					Is Billing detail Same as Shipping detail ?
				</Label>
			</div>
			<div className="flex items-center font-roboto text-sm py-3 text-[#3c2f27]">
				<span>Yes</span>
				<Switch
					id="airplane-mode"
					className="mx-2"
					checked={show}
					onClick={onToggle}
				/>
				<span>No</span>
			</div>
		</div>
	);
}

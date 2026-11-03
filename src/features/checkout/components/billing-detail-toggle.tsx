'use client'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

interface BillingDetailToggleProps {
	showBilling: boolean
	onChange: (showBilling: boolean) => void
}

export function BillingDetailToggle({
	showBilling,
	onChange,
}: BillingDetailToggleProps) {
	return (
		<div className="mt-6">
			<Label
				htmlFor="billing-details-toggle"
				className="text-sm font-roboto text-primary"
			>
				Is Billing detail same as shipping detail?
			</Label>
			<div className="flex items-center font-roboto text-sm py-3 text-primary">
				<span>Yes</span>
				<Switch
					id="billing-details-toggle"
					className="mx-2 hover:cursor-pointer border-primary bg-primary"
					checked={showBilling}
					onCheckedChange={onChange}
					aria-label="Use different billing details"
				/>
				<span>No</span>
			</div>
		</div>
	)
}

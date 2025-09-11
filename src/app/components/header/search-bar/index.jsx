'use client';
import { useForm } from 'react-hook-form';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function SearchInput({
	placeholder = 'Search...',
	onSearch,
	className,
}) {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm();

	const query = watch('query');

	const onSubmit = (data) => {
		console.log('Search query:', data.query);
		onSearch?.(data.query);
	};

	const clearSearch = () => {
		setValue('query', '');
	};

	return (
		<div className={cn('relative w-64', className)}>
			<form onSubmit={handleSubmit(onSubmit)} className="relative">
				<div className="relative">
					<Search className="absolute left-2 !top-2 h-4 w-4 text-muted-foreground" />
					<Input
						type="text"
						placeholder={placeholder}
						className="pl-10 pr-10 h-8 bg-background border-border font-roboto tracking-wide"
						{...register('query', {
							required: false,
							minLength: { value: 1, message: 'Search query is too short' },
						})}
					/>
					{query && (
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted"
							onClick={clearSearch}
						>
							<X className="h-3 w-3" />
							<span className="sr-only">Clear search</span>
						</Button>
					)}
				</div>

				{errors.query && (
					<p className="mt-1 text-sm text-destructive">
						{errors.query.message}
					</p>
				)}
			</form>
		</div>
	);
}

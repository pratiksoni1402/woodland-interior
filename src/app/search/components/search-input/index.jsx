'use client';
import { useForm } from 'react-hook-form';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchInput({ placeholder = 'Search...', className }) {
	const router = useRouter();
	const [isExpanded, setIsExpanded] = useState(false);

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm();

	const query = watch('query');

	const onSubmit = (data) => {
		router.push(`/search?keyword=${data.query}`);
		setIsExpanded(false);
	};

	const clearSearch = () => {
		setValue('query', '');
	};

	const toggleSearch = () => {
		setIsExpanded(!isExpanded);
	};

	const closeSearch = () => {
		setIsExpanded(false);
		setValue('query', '');
	};

	return (
		<div className={cn('relative', className)}>
			<Button
				type="button"
				variant="outline"
				size="sm"
				className="lg:hidden h-10 w-10 p-0 bg-transparent border-0 shadow-none hover:cursor-pointer hover:bg-white"
				onClick={toggleSearch}
			>
				<Search className="!h-5 !w-5" color="#3c2f27" />
				<span className="sr-only">Search</span>
			</Button>

			<div
				className={cn(
					'lg:block', // Always show on lg+ screens
					isExpanded ? 'block' : 'hidden', // Show/hide based on state on smaller screens
					'absolute lg:relative top-8 left-2 right-0 lg:top-auto lg:right-auto',
					'w-64 lg:w-auto z-10'
				)}
			>
				<form onSubmit={handleSubmit(onSubmit)} className="relative">
					<div className="relative">
						<Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
						<Input
							type="text"
							placeholder={placeholder}
							className="pl-10 pr-10 h-8 bg-background border-border font-roboto tracking-wide w-64"
							{...register('query', {
								required: false,
								minLength: { value: 1, message: 'Search query is too short' },
							})}
						/>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted lg:hidden"
							onClick={closeSearch}
						>
							<X className="h-3 w-3" />
							<span className="sr-only">Close search</span>
						</Button>

						{query && (
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted hidden lg:block"
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
		</div>
	);
}

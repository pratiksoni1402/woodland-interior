'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchInputProps {
	placeholder?: string;
	className?: string;
}

interface SearchInputValues {
	query: string;
}

export function SearchInput({
	placeholder = 'Search...',
	className,
}: SearchInputProps) {
	const router = useRouter();
	const [isExpanded, setIsExpanded] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<SearchInputValues>({ defaultValues: { query: '' } });

	const query = watch('query');

	const onSubmit = ({ query: submittedQuery }: SearchInputValues) => {
		const keyword = submittedQuery.trim();
		if (!keyword) return;

		const params = new URLSearchParams({ keyword });
		router.push(`/search?${params.toString()}`);
		setIsExpanded(false);
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
				onClick={() => setIsExpanded((expanded) => !expanded)}
				aria-label="Open search"
			>
				<Search className="!h-5 !w-5" color="#3c2f27" />
				<span className="sr-only">Search</span>
			</Button>

			<div
				className={cn(
					'lg:block',
					isExpanded ? 'block' : 'hidden',
					'absolute lg:relative top-8 left-2 right-0 lg:top-auto lg:right-auto',
					'w-64 z-10'
				)}
			>
				<form onSubmit={handleSubmit(onSubmit)} className="relative">
					<div className="relative">
						<Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder={placeholder}
							className="pl-10 pr-10 h-8 bg-background border-border font-roboto tracking-wide w-64"
							{...register('query', {
								validate: (value) =>
									value.trim().length > 0 || 'Enter a search term',
							})}
						/>
						{query && (
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-1 top-1/2 hidden h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted lg:block"
								onClick={() => setValue('query', '')}
								aria-label="Clear search"
							>
								<X className="h-3 w-3" />
								<span className="sr-only">Clear search</span>
							</Button>
						)}
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-muted lg:hidden"
							onClick={closeSearch}
							aria-label="Close search"
						>
							<X className="h-3 w-3" />
							<span className="sr-only">Close search</span>
						</Button>
					</div>

					{errors.query && (
						<p className="mt-1 text-sm text-destructive" role="alert">
							{errors.query.message}
						</p>
					)}
				</form>
			</div>
		</div>
	);
}

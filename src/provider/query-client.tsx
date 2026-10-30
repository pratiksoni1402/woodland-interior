'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

interface QueryClientProvidersProps {
	children: ReactNode;
}

export default function QueryClientProviders({ children }: QueryClientProvidersProps) {
	const [queryClient] = useState(() => new QueryClient());
	return React.createElement(
		QueryClientProvider,
		{ client: queryClient },
		children,
		React.createElement(ReactQueryDevtools, { initialIsOpen: false })
	);
}

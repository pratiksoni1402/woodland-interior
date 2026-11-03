'use client';

import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { searchKeys } from '../keys/search-keys';
import type { SearchProduct } from '../types';

export function useSearchProducts(keyword: string, price: string | null) {
	return useQuery({
		queryKey: searchKeys.products(keyword, price),
		queryFn: async (): Promise<SearchProduct[]> => {
			const response = await apiClient.post<{ searchProducts: SearchProduct[] }>(
				'/api/search-products',
				{ searchKeyword: keyword, filterByPrice: price }
			);
			return response.data.searchProducts;
		},
		enabled: keyword.length > 0,
	});
}

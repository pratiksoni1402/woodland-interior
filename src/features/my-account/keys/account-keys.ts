export const accountKeys = {
	all: ['account'] as const,
	countries: () => [...accountKeys.all, 'countries'] as const,
	profile: () => [...accountKeys.all, 'profile'] as const,
}

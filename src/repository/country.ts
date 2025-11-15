import prisma from '@/db';
export async function fetchCountriesList() {
	let countriesList = await prisma.countries.findMany();
	return Response.json({ countriesList });
}

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
export async function GET(request) {
    let countriesList = await prisma.countries.findMany()
    return Response.json({ countriesList })
}
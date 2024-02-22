export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
export async function GET(request) {
    let countriesList = await prisma.countries.findMany()
    console.log("Hello from Countires", { countriesList })
    return Response.json({ countriesList })
}
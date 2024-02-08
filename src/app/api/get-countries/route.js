import prisma from "@/db";
export const dynamic = 'force-dynamic'
export async function GET(request) {
    let countriesList = await prisma.countries.findMany()
    console.log("Hello from Countires", { countriesList })
    return Response.json({ countriesList })
}
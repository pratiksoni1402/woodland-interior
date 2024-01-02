import prisma from "@/db";

export async function GET(request) {
    let countries_list = await prisma.countries.findMany()
    console.log("Hello from Countires", { countries_list })
    return Response.json({ countries_list })
}
import { prisma } from '@/db'

export async function GET(request) {
    let categories = await prisma.category.findMany(/*{
        select: {
            name: true,
        },
        where: {
            isActive: 1,
        },
    }*/)

    console.log('Hello from the server', { categories })
    return Response.json({ categories })

}



import { prisma } from '@/db'
export async function POST(request) {
    let customers = await prisma.credentials.create(
        {
            data:{
                firstname: request.body.data,
                lastname: request.body.data,
                email: request.body.data,
                password: request.body.data,
            },
        }
    )

    console.log('Hello from the Auth', { customers })
    return Response.json({ customers })

}



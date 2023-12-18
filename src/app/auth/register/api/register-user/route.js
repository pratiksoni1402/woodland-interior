import { prisma } from '@/db'
export async function POST() {
    let customers = await prisma.credentials.create(
        {
            customers:{
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            },
        }
    )

    console.log('Hello from the Auth', { customers })
    return Response.json({ customers })

}



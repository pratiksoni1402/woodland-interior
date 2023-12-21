import { prisma } from '@/db'
export async function POST(req) {
    const formdata = await req.json()
    let customers = await prisma.credentials.create(
        {
            data:{
                firstname: formdata.firstname,
                lastname: formdata.lastname,
                email: formdata.email,
                password: formdata.password,
            },
        }
    )

    console.log('Hello from the Auth', { customers })
    return Response.json({ customers })

}



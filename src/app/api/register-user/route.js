import { prisma } from '@/db';
import bcrypt from 'bcrypt';
import { getSessionId } from '@/lib/session';
export const dynamic = 'force-dynamic'
export async function POST(req) {
    const session = await getSessionId();
    try {
        const formData = await req.json();

        // Hash the password using bcrypt
        const saltRounds = 10; // Adjust this value based security requirements
        const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

        // Save the hashed password in the database
        let customer = await prisma.credentials.create({
            data: {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: hashedPassword,
                sessionid: session,
            },
        });

        return Response.json({ });

    } catch (error) {

        console.error('Error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}

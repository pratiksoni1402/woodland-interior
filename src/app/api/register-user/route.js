import { prisma } from '@/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const formData = await req.json();

        // Hash the password using bcrypt
        const saltRounds = 10; // Adjust this value based on your security requirements
        const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

        // Save the hashed password in the database
        let customer = await prisma.credentials.create({
            data: {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: hashedPassword,
            },
        });

        // console.log('Hello from the Auth', { customer });
        return Response.json({ });

    } catch (error) {

        console.error('Error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}

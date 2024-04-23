export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { prisma } from '@/db';
import bcrypt from 'bcrypt';
import { getSessionId } from '@/lib/session';
import { getSession } from '@/lib/session';

export async function POST(req) {
    const session = await getSession();
    const sessionId = await getSessionId();
    
    try {
        const formData = await req.json();
        console.log("This is email", formData);

        // Hash the password using bcrypt
        const saltRounds = 14; 
        const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

        // Check if the email already exists
        let isEmailExist = await prisma.credentials.findFirst({
            where: {
                email: formData.email
            }
        });

        if (isEmailExist) {
            return Response.json({ errorMessage: "Email already exists" });
        } else {

            
            let customer = await prisma.credentials.create({
                data: {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    password: hashedPassword,
                    sessionid: sessionId,
                    session_email: formData.email,
                },
            });

            if(customer){
                session.user_details = {
                    firstname: customer.firstname,
                    lastname: customer.lastname,
                    email: customer.email
                }
                console.log("Session crreated", session.user_details)
                await session.save();
            }

            return Response.json({ successMessage: "Registered" });
        }
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

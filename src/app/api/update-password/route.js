export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import bcrypt from 'bcrypt';
import { getSession } from "@/lib/session";
export async function POST(request) {
  const sessionEmail = await getSession();
  const requestBody = await request.json();
  const readPassword = await prisma.credentials.findFirst({
    where: {
      session_email: sessionEmail.user_details?.email,
    },
  });

  const passwordMatch = await bcrypt.compare(requestBody.oldPassword, readPassword.password);
  console.log('old Password and password Does not match', passwordMatch)

  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(requestBody.newPassword, saltRound);
  console.log("Hashed", hashedPassword);

  if (passwordMatch) {
    const updatePassword = await prisma.credentials.updateMany({
      where: {
        session_email: sessionEmail.user_details?.email,
      },
      data: {
        password: hashedPassword,
      },
    });
    console.log("Password Changes successfully", { updatePassword })
    return Response.json({ updatePassword })
  }
  return Response.json({})

}
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import bcrypt from 'bcrypt';
import { getSession } from "@/lib/session";

export async function POST(request) {
  const sessionEmail = await getSession();
  const requestBody = await request.json();

  // Get password from database
  const readPassword = await prisma.credentials.findFirst({
    where: {
      session_email: sessionEmail.user_details?.email,
    },
  });
  // End

  // Match the db password with received password
  const passwordMatch = await bcrypt.compare(requestBody.oldPassword, readPassword.password);
  console.log('old Password and password match', passwordMatch)

  // If passwords don't match
  if (!passwordMatch) {
    return Response.json("Old password is incorrect");
  }
  // End

  // Hashing the password
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(requestBody.newPassword, saltRound);
  console.log("Hashed", hashedPassword);
  // End

  // Upating the old password
  if (passwordMatch) {
    const updatePassword = await prisma.credentials.updateMany({
      where: {
        session_email: sessionEmail.user_details?.email,
      },
      data: {
        password: hashedPassword,
      },
    });
    console.log("Password Changes successfully", { updatePassword });
    return Response.json({ updatePassword })
    // End
  }
  return Response.json({})

}
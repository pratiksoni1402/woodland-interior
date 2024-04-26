export const dynamic = 'force-dynamic';
export const revalidate = 0;
import prisma from "@/db";
import bcrypt from 'bcrypt';
import { getSession } from "@/lib/session";
export async function POST(request) {
  let session = await getSession();
  try {
    const user_details = await request.json();

    // Retrieve the hashed password from the database based on the user's email
    const details = await prisma.credentials.findFirst({
      where: {
        email: user_details.email,
      },
    });
    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(user_details.password, details.password);

    if (!passwordMatch) {
      console.log("Invalid password");
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }



    if (details && passwordMatch) {
      console.log("This is details", details)
      session.user_details = {
        firstname: details.firstname,
        lastname: details.lastname,
        email: details.email,
      },
        console.log("This is master session from login api", session)
      await session.save()
    }

    // If no user found
    if (!details) {
      console.log("User not found");
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }
    // End

    console.log("Login successful", { details: details });
    return Response.json({ success: "Login successful" });

  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

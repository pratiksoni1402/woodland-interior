import prisma from "@/db";

export async function POST(request) {
  let responseData = {};
  const user_details = await request.json();

  let details = await prisma.credentials.findFirst({
    where: {
      email: user_details.email,
    },
  });

  if (details) {
    if (details.password == user_details.password) {

      responseData = {
        status: true,
        message: "Logged in successfully.",
        data: null,
      };
    } else {
      responseData = {
        status: false,
        message: "Email or password is incorrect.",
        data: null,
      };
    }
  } else {
    responseData = {
      status: false,
      message: "We could find any account with the provided email.",
      data: null,
    };
  }

  console.log("Hello from login data", { details });
  return Response.json({});
}

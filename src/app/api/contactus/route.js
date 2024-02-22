export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { prisma } from "@/db";
export async function POST(request) {
  let querydata = await request.json();
  console.log(querydata);
  let query = await prisma.userquery.create({
    data: {
      firstname: querydata.firstname,
      lastname: querydata.lastname,
    //   phonenumber: querydata.phonenumber,
      email: querydata.email,
      subject: querydata.subject,
      message: querydata.message,
    },
  });
  console.log("Hello form contact us page", { query });
  return Response.json({});
}

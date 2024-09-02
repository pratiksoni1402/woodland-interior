export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import { prisma } from "@/db";
export async function POST(request) {
  let querydata = await request.json();
  console.log(querydata);
  let query = await prisma.userquery.create({
    data: {
      firstname: querydata.firstname,
      lastname: querydata.lastname,
      email: querydata.email,
      subject: querydata.subject,
      message: querydata.message,
    },
  });
  console.log("Hello form contact us page", { query });
  return Response.json({});
}
